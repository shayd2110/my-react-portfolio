import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../projects-data";

function Projects() {
	return (
		<section
			id="projects"
			className="text-gray-400 bg-gray-900 body-font mx-auto"
		>
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div className="flex flex-col w-full mb-20">
					<CodeIcon className="mx-auto inline-block w-10 mb-4" aria-hidden="true" />
					<h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						Apps I've Built
					</h2>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Projects I've built during my degree and projects I've
						built by self-learning
					</p>
				</div>
				<ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 mb-20 text-left">
					{projects.map((project) => (
						<li
							key={project.github}
							className="flex flex-col bg-gray-800 rounded overflow-hidden border border-gray-700"
						>
							<img
								className="w-full h-48 object-cover"
								src={project.image}
								alt={project.imageAlt}
								loading="lazy"
							/>
							<div className="flex flex-col flex-grow p-6">
								<p className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
									{project.subtitle}
								</p>
								<h3 className="title-font text-lg font-medium text-white mb-3">
									{project.title}
								</h3>
								<p className="leading-relaxed flex-grow">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-3 mt-6">
									{project.live && (
										<a
											className="bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white font-bold py-2 px-4 rounded"
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
										>
											Live demo
											<span className="sr-only">
												{" "}
												for {project.title} (opens in a
												new tab)
											</span>
										</a>
									)}
									<a
										className="border border-gray-500 hover:border-gray-300 hover:text-white focus:ring-2 focus:ring-gray-300 font-bold py-2 px-4 rounded"
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
										<span className="sr-only">
											{" "}
											repository for {project.title}{" "}
											(opens in a new tab)
										</span>
									</a>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Projects;
