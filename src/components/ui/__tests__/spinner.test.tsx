import { render, screen } from "@testing-library/react";
import Spinner from "../spinner";

describe("Spinner component", () => {
	it("renders with default size when no size is provided", () => {
		render(<Spinner />);

		const spinner = screen.getByTestId("test-spinner");

		expect(spinner).toBeInTheDocument();
		expect(spinner.style.width).toBe("24px");
		expect(spinner.style.height).toBe("24px");
		expect(spinner).toHaveClass("animate-spin text-blue-500");
	});

	it("renders with custom size", () => {
		render(<Spinner size={48} />);

		const spinner = screen.getByTestId("test-spinner");

		expect(spinner.style.width).toBe("48px");
		expect(spinner.style.height).toBe("48px");
	});
});
