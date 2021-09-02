import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../projects-data";

function Projects() {
	return (
		<section id="projects" className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40 "></div>
			<div className="flex flex-col w-full mb-20">
				<CodeIcon className="mx-auto inline-block w-10 mb-4" />
			</div>
		</section>
	);
}

export default Projects;
