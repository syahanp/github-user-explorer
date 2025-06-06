import axios from "axios";
import type { GetUsersResponse, UserRepo } from "./types";

const api = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28",
	},
});
/**
 * GET list of github users
 * get only 5 users
 */
api.getUsers = async (query: string) => {
	return await api.get(`/search/users?q=${query}&per_page=5`);
};

/**
 * GET list of github user repositories
 */
api.getUserRepositories = async (
	username: string,
	options?: { page: number }
) => {
	const page = options?.page || 1;

	const res = await api.get(`/users/${username}/repos?per_page=8&page=${page}`);

	// the only way to get the next page is by looking at the link header
	const linkHeader = res.headers.link;
	let nextPage: number | undefined;

	// if rel="next" exists in the link header, then there is a next page
	if (linkHeader?.includes('rel="next"')) {
		nextPage = page + 1;
	}

	return {
		repos: res.data,
		nextPage,
	};
};

// extends the AxiosInstance interface to include our built in methods
declare module "axios" {
	interface AxiosInstance {
		getUsers: (
			query: string
		) => Promise<AxiosResponse<GetUsersResponse, AxiosError>>;
		getUserRepositories: (
			username: string,
			options?: { page: number }
		) => Promise<{
			repos: UserRepo[];
			nextPage?: number;
		}>;
	}
}

export default api;
