// `live` is null when the deployment is gone. Heroku shut down its free tier in
// Nov 2022 and Dark Sky's API closed in Mar 2023, so those demos cannot come back
// as-is — the cards link to the source instead of a 404.
export const projects = [
	{
		title: "Movie Search",
		subtitle: "React App",
		description:
			"Search and save movies from a search box, fetching data from the OMDb API.",
		image: "./gifs/movie-app(2).gif",
		imageAlt:
			"Screen recording of the Movie Search app: typing a title into the search box and saving a result.",
		live: "https://shay-doron-movie-app.netlify.app/",
		github: "https://github.com/shayd2110/movie-app",
	},
	{
		title: "Weather Website",
		subtitle: "React and Node",
		description:
			"Degree final project, built with four teammates. Fetched forecasts from the Dark Sky API.",
		image: "./gifs/weather-web-short.gif",
		imageAlt:
			"Screen recording of the weather website showing a location search and its forecast.",
		live: null,
		github: "https://github.com/shayd2110/weatherFinalProject",
	},
	{
		title: "Memes Generator",
		subtitle: "React and Firebase",
		description:
			"Meme generator built around the React component lifecycle, using the imgflip API.",
		image: "./gifs/meme-gen (2).gif",
		imageAlt:
			"Screen recording of the meme generator: picking a template and adding caption text.",
		live: null,
		github: "https://github.com/shayd2110/react-meme-gen",
	},
	{
		title: "Weather App",
		subtitle: "Android",
		description: "Native Android weather app built with two fragments.",
		image: "./gifs/weather-android.gif",
		imageAlt:
			"Screen recording of the Android weather app switching between its two fragments.",
		live: null,
		github: "https://github.com/shayd2110/Weather-Android-App",
	},
	{
		title: "4 in a Row",
		subtitle: "C# WPF game",
		description:
			"Two-player Connect Four with a host and a client communicating over a service.",
		image: "./gifs/4-in-row-cut-speed.gif",
		imageAlt:
			"Screen recording of a Connect Four match between two players.",
		live: null,
		github: "https://github.com/shayd2110/ConnectFour_c_sharp_final_proj",
	},
	{
		title: "Snake Game",
		subtitle: "C game",
		description: "Terminal Snake game written in C.",
		image: "./gifs/snake.gif",
		imageAlt: "Screen recording of the terminal Snake game being played.",
		live: null,
		github: "https://github.com/shayd2110/Snake-Game",
	},
];
