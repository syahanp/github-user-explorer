import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "../search-bar";
import { vi } from "vitest";

describe("SearchBar", () => {
	it("renders with placeholder", () => {
		render(<SearchBar placeholder="Search..." />);
		const input = screen.getByTestId("search-input");

		expect(input).toBeInTheDocument();
	});

	it("renders search icon", () => {
		render(<SearchBar />);
		const icon = screen.getByTestId("lucide-search-icon");
		expect(icon).toBeInTheDocument();
	});

	it("calls onChange when typing", () => {
		const handleChange = vi.fn();
		render(<SearchBar onChange={handleChange} />);

		const input = screen.getByRole("textbox");
		fireEvent.change(input, { target: { value: "github" } });

		expect(handleChange).toHaveBeenCalled();
	});

	it("respects disabled state", () => {
		render(<SearchBar disabled />);
		const input = screen.getByRole("textbox");
		expect(input).toBeDisabled();
	});
});
