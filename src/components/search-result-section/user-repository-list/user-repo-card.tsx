import type { UserRepo } from "@/api/types";
import { Star } from "lucide-react";
import { type FC } from "react";

type UserRepoCardProps = UserRepo;

const UserRepoCard: FC<UserRepoCardProps> = ({
	name,
	description,
	stargazers_count,
}) => {
	return (
		<div className="relative p-3 border border-slate-200 rounded space-y-1">
			<div className="font-medium">{name}</div>
			<div className="text-slate-600 text-sm">{description}</div>

			<div className="absolute top-4 right-3 text-slate-400 text-sm">
				<div className="flex items-center gap-1">
					<Star size={16} /> {stargazers_count}
				</div>
			</div>
		</div>
	);
};

export default UserRepoCard;
