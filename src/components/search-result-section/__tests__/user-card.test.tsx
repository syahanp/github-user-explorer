import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import UserCard from "../user-list/user-card";
import type { GithubUser } from "@/api/types";

vi.mock("../user-repository-list", () => ({
	default: ({ username }: { username: string }) => (
		<div data-test-id="mock-user-repository-list">
			{username}'s repositories
		</div>
	),
}));

vi.mock("@/components/ui/avatar", () => ({
	default: ({ src, alt }: { src: string; alt: string }) => (
		<img data-test-id="mock-avatar" src={src} alt={alt} />
	),
}));

describe("UserCard", () => {
	const mockUser = {
		id: 1,
		login: "aligar",
		avatar_url: "https://example.com/avatar.png",
	};

	it("renders user avatar and login", () => {
		render(<UserCard user={mockUser as GithubUser} />);

		expect(screen.getByTestId("mock-avatar")).toHaveAttribute(
			"src",
			mockUser.avatar_url
		);
		expect(screen.getByText(mockUser.login)).toBeInTheDocument();
	});

	it("toggles UserRepositoryList when clicked", () => {
		render(<UserCard user={mockUser as GithubUser} />);

		expect(
			screen.queryByTestId("mock-user-repository-list")
		).not.toBeInTheDocument();

		// expand
		fireEvent.click(screen.getByText(mockUser.login));
		expect(screen.getByTestId("mock-user-repository-list")).toBeInTheDocument();
		expect(screen.getByTestId("mock-user-repository-list")).toHaveTextContent(
			"aligar's repositories"
		);

		// collapse
		fireEvent.click(screen.getByText(mockUser.login));
		expect(
			screen.queryByTestId("mock-user-repository-list")
		).not.toBeInTheDocument();
	});
});
