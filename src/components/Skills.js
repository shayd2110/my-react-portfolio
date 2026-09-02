import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../skills-data";
import { firstBy } from "thenby";

// Sorted once at module scope: `skills.sort()` mutates the imported array, so
// doing it inside the component made every render mutate shared module state.
const sortedSkills = [...skills].sort(
	firstBy("category").thenBy("image").thenBy("title")
);

function Skills() {
	return (
		<section id="skills">
			<div className="container px-5 mx-auto py-2">
				<div className="text-center mb-20">
					<ChipIcon className="w-10 inline-block mb-4" aria-hidden="true" />
					<h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
						Skills &amp; Technologies
					</h2>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
						Skills gained both from degree and by self-learning from
						around the web
					</p>
				</div>
				<ul className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 list-none p-0">
					{sortedSkills.map((skill) => (
						<li key={skill.title} className="p-2 sm:w-1/2 w-full">
							<div className="bg-gray-800 rounded flex p-4 h-full items-center">
								<BadgeCheckIcon
									className="text-gray-400 w-6 h-6 flex-shrink-0 mr-4"
									aria-hidden="true"
								/>
								<span className="title-font font-medium text-white">
									{skill.title}
								</span>
								<i
									className={`pl-1 text-accent-base text-4xl ml-auto ${skill.image}`}
									aria-hidden="true"
								></i>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Skills;
