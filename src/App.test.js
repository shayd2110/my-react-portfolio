import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("uses the owner's name as the single page heading", () => {
		render(<App />);
		expect(
			screen.getByRole("heading", { level: 1, name: /shay doron/i })
		).toBeInTheDocument();
	});

	// Regression guard: the contact fields were previously wrapped in <lable>,
	// which left all three inputs without an accessible name.
	it.each(["Name", "Email", "Message"])(
		"gives the %s field an accessible label",
		(field) => {
			render(<App />);
			expect(
				screen.getByLabelText(new RegExp(`^${field}$`, "i"))
			).toBeInTheDocument();
		}
	);

	it("exposes every project's source link", () => {
		render(<App />);
		const githubLinks = screen
			.getAllByRole("link")
			.filter((link) => /repository for/i.test(link.textContent));
		expect(githubLinks.length).toBeGreaterThan(0);
	});
});
