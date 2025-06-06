import { render, screen, fireEvent } from "@testing-library/react";
import SearchSection from "../search-section";
import { vi } from "vitest";

describe("SearchSection", () => {
	it("updates input value when typing", () => {
		render(<SearchSection onEnter={() => {}} />);
		const input = screen.getByPlaceholderText(/search/i);
		fireEvent.change(input, { target: { value: "react" } });
		expect((input as HTMLInputElement).value).toBe("react");
	});

	it("calls onEnter when pressing Enter key", () => {
		const onEnterMock = vi.fn();
		render(<SearchSection onEnter={onEnterMock} />);
		const input = screen.getByPlaceholderText(/search/i);
		fireEvent.change(input, { target: { value: "vite" } });
		fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
		expect(onEnterMock).toHaveBeenCalledWith("vite");
	});

	it("calls onEnter when clicking Search button", () => {
		const onEnterMock = vi.fn();
		render(<SearchSection onEnter={onEnterMock} />);
		const input = screen.getByPlaceholderText(/search/i);
		const button = screen.getByRole("button", { name: /search/i });

		fireEvent.change(input, { target: { value: "github" } });
		fireEvent.click(button);

		expect(onEnterMock).toHaveBeenCalledWith("github");
	});
});
