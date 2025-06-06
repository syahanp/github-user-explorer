import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../ui/button";
import { vi } from "vitest";

describe("Button Component", () => {
	test("renders button with text", () => {
		render(<Button>Click me</Button>);
		const buttonElement = screen.getByRole("button", { name: /click me/i });
		expect(buttonElement).toBeInTheDocument();
	});

	test("calls onClick handler when clicked", async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();

		render(<Button onClick={handleClick}>Click me</Button>);
		const buttonElement = screen.getByRole("button", { name: /click me/i });

		await user.click(buttonElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test("applies custom className", () => {
		render(<Button className="custom-class">Button</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveClass("custom-class");
	});

	test("is disabled when disabled prop is true", () => {
		render(<Button disabled>Disabled Button</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeDisabled();
	});
});
