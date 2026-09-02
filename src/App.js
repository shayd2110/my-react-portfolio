import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
	return (
		<div className="text-gray-400 bg-gray-900 body-font">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:z-20 focus:m-3 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded"
			>
				Skip to main content
			</a>
			<Navbar />
			<main id="main">
				<About />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
