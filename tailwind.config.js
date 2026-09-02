module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // the site has a single dark theme; no `dark:` classes are used
	theme: {
		extend: {
			colors: {
				accent: {
					base: "#1685e0",
				},
			},
			fontSize: {
				"3xl-noline": "3rem",
			},
			gridTemplateColumns: {
				"auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
				"auto-fit-300": "repeat(auto-fit, minmax(300px, 1fr))",
				"auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
			},
			gridTemplateRows: {
				"auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
				"auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
			},
		},
	},
	variants: {
		// The "skip to main content" link is visually hidden until focused, so the
		// utilities that lay it out need a focus variant. Tailwind 2 only ships
		// focus variants for colours and rings by default.
		extend: {
			position: ["focus"],
			inset: ["focus"],
			zIndex: ["focus"],
			margin: ["focus"],
			padding: ["focus"],
			borderRadius: ["focus"],
		},
	},
	plugins: [],
};
