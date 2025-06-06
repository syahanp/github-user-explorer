import { http, HttpResponse } from "msw";

export const handlers = [
	/**
	 * GET user repositories
	 */
	http.get(
		"https://api.github.com/users/:username/repos",
		({ request, params }) => {
			const url = new URL(request.url);
			const page = Number(url.searchParams.get("page") ?? "1");
			const perPage = Number(url.searchParams.get("per_page") ?? "8");

			const username = params.username as string;

			const start = (page - 1) * perPage + 1;
			const repos = Array.from({ length: perPage }, (_, i) => ({
				id: start + i,
				name: `Repo ${start + i}`,
				full_name: `${username}/repo-${start + i}`,
			}));

			const hasNextPage = page < 2;

			const headers: Record<string, string> = {};
			if (hasNextPage) {
				headers.Link = `<https://api.github.com/users/${username}/repos?page=${
					page + 1
				}>; rel="next"`;
			}

			return HttpResponse.json(repos, { headers });
		}
	),

	/**
	 * GET users
	 */
	http.get("https://api.github.com/search/users", () => {
		const mockUsers = [
			{ id: 1, login: "user1", avatar_url: "https://avatar.com/u1" },
			{ id: 2, login: "user2", avatar_url: "https://avatar.com/u2" },
			{ id: 3, login: "user3", avatar_url: "https://avatar.com/u3" },
			{ id: 4, login: "user4", avatar_url: "https://avatar.com/u4" },
			{ id: 5, login: "user5", avatar_url: "https://avatar.com/u5" },
		];

		return HttpResponse.json(
			{
				total_count: mockUsers.length,
				incomplete_results: false,
				items: mockUsers,
			},
			{ status: 200 }
		);
	}),
];
