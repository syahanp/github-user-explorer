import { render, screen } from "@testing-library/react";
import Loading from "../loading";

describe("Loading", () => {
	it("renders the loading spinner container and Spinner component", () => {
		render(<Loading />);

		const container = screen.getByTestId("loading-spinner");
		expect(container).toBeInTheDocument();

		const spinner = screen.getByTestId("test-spinner");
		expect(spinner).toBeInTheDocument();
	});
});
