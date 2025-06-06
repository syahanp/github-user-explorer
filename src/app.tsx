import { useState } from "react";
import SearchSection from "./components/search-section";
import SearchResultSection from "./components/search-result-section";
import Container from "./components/container";

const App = () => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<>
			<Container>
				<SearchSection onEnter={setSearchValue} />
			</Container>

			<div className="border-b border-gray-200 my-6" />

			<SearchResultSection searchValue={searchValue} />
		</>
	);
};

export default App;
