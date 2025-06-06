import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import UserRepositoryList from "@/components/search-result-section/user-repository-list";
import { server } from "@/test/server";
import { http } from "msw";

const createTestClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

describe("UserRepositoryList", () => {
	it("user repositories rendered successfuly", async () => {
		const queryClient = createTestClient();

		render(
			<QueryClientProvider client={queryClient}>
				<UserRepositoryList username="aligar" />
			</QueryClientProvider>
		);

		expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText("Repo 1")).toBeInTheDocument();
		});

		for (let i = 1; i <= 8; i++) {
			expect(screen.getByText(`Repo ${i}`)).toBeInTheDocument();
		}

		await userEvent.click(screen.getByRole("button", { name: /load more/i }));

		await waitFor(() => {
			expect(screen.getByText("Repo 9")).toBeInTheDocument();
		});

		for (let i = 1; i <= 16; i++) {
			expect(screen.getByText(`Repo ${i}`)).toBeInTheDocument();
		}

		expect(
			screen.queryByRole("button", { name: /load more/i })
		).not.toBeInTheDocument();
	});

	it("shows error UI when the API fails", async () => {
		const queryClient = createTestClient();

		server.use(
			http.get("https://api.github.com/users/:username/repos", () => {
				return new Response(null, { status: 500 });
			})
		);

		render(
			<QueryClientProvider client={queryClient}>
				<UserRepositoryList username="aligar" />
			</QueryClientProvider>
		);

		expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByTestId("something-went-wrong")).toBeInTheDocument();
		});
	});
});
