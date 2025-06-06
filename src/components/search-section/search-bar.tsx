import type { FC } from "react";
import { Search } from "lucide-react";

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SearchBar: FC<SearchBarProps> = (props) => {
	return (
		<div className="w-full mx-auto">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Search className="w-5 h-5 text-gray-500" />
				</div>

				<input
					{...props}
					type="text"
					placeholder="Search..."
					className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>
		</div>
	);
};
