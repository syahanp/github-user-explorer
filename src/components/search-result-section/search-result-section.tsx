import { type FC } from "react";
import UserCardList from "./user-list";

type Props = {
	searchValue: string;
};

const SearchResultSection: FC<Props> = ({ searchValue }) => {
	return <UserCardList searchValue={searchValue} />;
};

export default SearchResultSection;
