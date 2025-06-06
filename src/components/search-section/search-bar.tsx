import type { FC } from "react";
import { Search } from "lucide-react";

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SearchBar: FC<SearchBarProps> = (props) => {
	return (
		<div className="w-full mx-auto">
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Search
						data-test-id="lucide-search-icon"
						className="w-5 h-5 text-slate-500"
					/>
				</div>

				<input
					{...props}
					data-test-id="search-input"
					type="text"
					placeholder="search users..."
					className="transition-all w-full text-lg border border-slate-300 rounded py-3 px-8 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>
		</div>
	);
};
