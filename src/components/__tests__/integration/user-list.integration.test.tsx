import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { server } from "@/test/server";
import { http } from "msw";
import UserList from "@/components/search-result-section/user-list";

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: { retry: false },
		},
	});

const queryClient = createTestQueryClient();

describe("UserList", () => {
	it("renders user list after successful fetch", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<UserList searchValue="user" />
			</QueryClientProvider>
		);

		expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText("user1")).toBeInTheDocument();
			expect(screen.getByText("user5")).toBeInTheDocument();
		});
	});

	it("shows error UI when the API fails", async () => {
		// override the handler to simulate a server error
		server.use(
			http.get("https://api.github.com/search/users", () => {
				return new Response(null, { status: 500 });
			})
		);

		render(
			<QueryClientProvider client={queryClient}>
				<UserList searchValue="fail-test" />
			</QueryClientProvider>
		);

		expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByTestId("something-went-wrong")).toBeInTheDocument();
		});
	});
});
