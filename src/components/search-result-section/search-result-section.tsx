import { type FC } from "react";
import Container from "../container";
import UserCardList from "./user-list";

type Props = {
	searchValue: string;
};

const SearchResultSection: FC<Props> = ({ searchValue }) => {
	return (
		<Container>
			<UserCardList searchValue={searchValue} />
		</Container>
	);
};

export default SearchResultSection;
