import api from "@/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { FC } from "react";
import UserRepoCard from "./user-repo-card";
import SomethingWentWrong from "@/components/something-went-wrong";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";

type UserRepositoryListProps = {
	username: string;
};

const UserRepositoryList: FC<UserRepositoryListProps> = ({ username }) => {
	const {
		data,
		isLoading,
		error,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: ["user-repos", username],
		enabled: !!username,
		initialPageParam: 1,
		queryFn: ({ pageParam = 1 }) =>
			api.getUserRepositories(username, { page: pageParam }),
		getNextPageParam: (lastPage) => lastPage.nextPage,
	});

	if (isLoading) return <Loading />;

	if (error) return <SomethingWentWrong />;

	if (!data?.pages.flatMap((page) => page.repos).length)
		return (
			<p className="text-center text-slate-700 py-2">No repository found</p>
		);

	return (
		<div className="bg-white rounded p-4 space-y-4">
			<p className="font-medium">Repositories</p>

			<div className="space-y-4">
				{data?.pages
					.flatMap((page) => page.repos)
					.map((repo) => (
						<UserRepoCard key={repo.id} {...repo} />
					))}
			</div>

			{isFetchingNextPage && (
				<div className="flex justify-center">
					<Spinner />
				</div>
			)}

			{!isFetchingNextPage && hasNextPage && (
				<div className="flex justify-center">
					<Button variant="outline" onClick={() => fetchNextPage()}>
						Load More
					</Button>
				</div>
			)}
		</div>
	);
};

export default UserRepositoryList;
