module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
				"auto-fit-300": "repeat(auto-fit, minmax(300, 1fr))",
				"auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
			},
			gridTemplateRows: {
				"auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
				"auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
