import React, { useState, type FC } from "react";
import { Button } from "../ui/button";
import { SearchBar } from "./search-bar";

type SearchSectionProps = {
	onEnter: (value: string) => void;
};

const SearchSection: FC<SearchSectionProps> = ({ onEnter }) => {
	const [search, setSearch] = useState("");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== "Enter") return;
		return onSubmit();
	};

	const onSubmit = () => {
		onEnter(search);
	};

	return (
		<div className="space-y-4 pt-6">
			<SearchBar onChange={handleOnChange} onKeyDown={handleOnEnter} />
			<Button size="lg" onClick={onSubmit} className="w-full">
				Search
			</Button>
		</div>
	);
};

export default SearchSection;
