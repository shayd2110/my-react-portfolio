import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../projects-data";

function Projects() {
	return (
		<section id="projects" className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40 "></div>
			<div className="flex flex-col w-full mb-20">
				<CodeIcon className="mx-auto inline-block w-10 mb-4" />
				<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white"> Apps I've Built</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base></p>
			</div>
		</section>
	);
}

export default Projects;
