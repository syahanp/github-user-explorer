import { render, screen } from "@testing-library/react";
import Avatar from "../avatar";

describe("Avatar component", () => {
	it("renders image with correct props", () => {
		const props = {
			src: "https://example.com/avatar.png",
			alt: "Aligar's Avatar",
			size: 64,
		};

		render(<Avatar {...props} />);

		const img = screen.getByTestId("test-avatar") as HTMLImageElement;

		expect(img).toBeInTheDocument();
		expect(img.src).toBe(props.src);
		expect(img.alt).toBe(props.alt);
		expect(img.style.width).toBe(`${props.size}px`);
		expect(img.style.height).toBe(`${props.size}px`);
		expect(img).toHaveClass("rounded-full object-contain");
	});
});
