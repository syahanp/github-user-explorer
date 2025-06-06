import { render, screen } from "@testing-library/react";
import type { UserRepo } from "@/api/types";
import UserRepoCard from "../user-repository-list/user-repo-card";

describe("UserRepoCard", () => {
	const mockRepo = {
		id: 1,
		name: "awesome-repo",
		description: "This is a test repo",
		stargazers_count: 42,
	};

	it("renders repo name, description, and stargazer count", () => {
		render(<UserRepoCard {...(mockRepo as UserRepo)} />);

		expect(screen.getByText(mockRepo.name)).toBeInTheDocument();

		expect(screen.getByText(mockRepo.description)).toBeInTheDocument();

		expect(
			screen.getByText(mockRepo.stargazers_count.toString())
		).toBeInTheDocument();
	});
});
