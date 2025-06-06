import { render, screen } from "@testing-library/react";
import SomethingWentWrong from "../something-went-wrong";

describe("SomethingWentWrong", () => {
	it("renders the error message with correct texts and test-id", () => {
		render(<SomethingWentWrong />);

		const container = screen.getByTestId("something-went-wrong");
		expect(container).toBeInTheDocument();

		expect(screen.getByText("Something Went Wrong")).toBeInTheDocument();
		expect(
			screen.getByText("Something went wrong in our end")
		).toBeInTheDocument();
	});
});
