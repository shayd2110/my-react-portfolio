import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../projects-data";

function Projects() {
	return (
		<section
			id="projects"
			className="text-gray-400 bg-gray-900 body-font mx-auto"
		>
			<div className="container  px-5 py-10 mx-auto  text-center lg:px-40 overflow-scroll ">
				<div className="flex flex-col w-full mb-20 ">
					<CodeIcon className="mx-auto inline-block w-10 mb-4 " />
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						Apps I've Built
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Explicabo facilis repellat ab cupiditate alias
						vero aliquid obcaecati quisquam fuga dolore
					</p>
				</div>
				<div className="flex flex-wrap -mx-4 overflow-hidden mb-20">
					{projects.map((project) => (
						<a
							href={project.link}
							key={project.image}
							className="my-4 px-4 w-full overflow-hidden lg:w-1/4 xl:w-1/4 "
						>
							<div className="flex relative">
								<img
									className="absolute   w-full h-full object-cover "
									src={project.image}
									alt="gallery"
								/>
								<div className="px-8 z-10 py-10 relative w-full h-full   overlow-hidden border-4 border-gray-100 bg-gray-900 opacity-0 hover:opacity-100">
									<h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
										{project.subtitle}
									</h2>
									<h1 className="title-font text-lg font-medium text-white mb-3">
										{project.title}
									</h1>
									<p className="leading-relaxed">
										{project.description}
									</p>
									<a
										className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded"
										href={project.github_link}
										target="_blank"
										rel="noreferrer"
									>
										GitHub link
									</a>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
