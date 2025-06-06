import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { type FC } from "react";
import UserCard from "./user-card";
import Loading from "@/components/loading";
import SomethingWentWrong from "@/components/something-went-wrong";

type UserListProps = {
	searchValue: string;
};

const UserList: FC<UserListProps> = ({ searchValue }) => {
	const { isLoading, isError, data } = useQuery({
		queryKey: ["users", searchValue],
		enabled: !!searchValue, // only run the if searchValue is not empty
		queryFn: () => api.getUsers(searchValue),
	});

	if (isLoading) return <Loading />;

	if (isError) return <SomethingWentWrong />;

	return (
		<div className="space-y-4">
			{data?.data.items?.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserList;
