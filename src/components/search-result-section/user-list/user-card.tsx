import type { GithubUser } from "@/api/types";
import { useState, type FC } from "react";
import UserRepositoryList from "../user-repository-list";
import Avatar from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

type UserCardProps = {
	user: GithubUser;
};

const UserCard: FC<UserCardProps> = ({ user }) => {
	const [isOpenRepo, setIsOpenRepo] = useState(false);

	const handleClick = () => {
		setIsOpenRepo((prevState) => !prevState);
	};

	return (
		<>
			<div className="bg-slate-50 rounded border-2 border-slate-50 select-none">
				<div
					className="bg-slate-50 z-10 flex justify-between items-center cursor-pointer p-4 sticky top-0"
					onClick={handleClick}
				>
					<div className="flex items-center gap-4">
						<Avatar src={user.avatar_url} alt={user.login} size={40} />
						<span className="font-medium">{user.login}</span>
					</div>

					<ChevronDown
						size={22}
						className={`${isOpenRepo ? "rotate-180" : ""} transition-all`}
					/>
				</div>

				{isOpenRepo && <UserRepositoryList username={user.login} />}
			</div>
		</>
	);
};

export default UserCard;
