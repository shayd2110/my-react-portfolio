/* eslint-disable */
import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../‏‏skills-data";

function Skills() {
	var _skills = skills.sort((a, b) => a.image.localeCompare(b.image));
	return (
		<section id="skills">
			<div className="container px-5 mx-auto py-2">
				<div className="text-center mb-20">
					<ChipIcon className="w-10 inline-block mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font -text-white mb-4">
						Skills &amp; Technologies
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
						Skills gained both from degree and by self-learning from
						around the web
					</p>
				</div>
				<div className="flex flex-wrap  lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					{_skills.map((skill) => (
						<div key={skill} className="p-2 sm:w-1/2 w-full">
							<div className="bg-gray-800 rounderd flex p-4 h-full items-center">
								<BadgeCheckIcon className="text-gray-400 w-6 h-6 flex-shrink-0 mr-4" />
								<span className="title-font font-medium text-white">
									{skill.title}
								</span>
								<i
									className={`pl-1 text-accent-base text-4xl ml-auto  ${skill.image}`}
								></i>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
