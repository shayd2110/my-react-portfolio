import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../skills-data";

function Skills() {
	return (
		<section id="skills">
			<div className="container px-5 mx-auto"></div>
			<div className="text-center mb-20">
				<ChipIcon className="w-10 inline-block mb-4" />
				<h1 className="sm:text-4xl text-3xl font-medium title-font -text-white mb-4">
					Skiils &amp; Technologies
				</h1>
				<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Nisi sit ipsa delectus eum quo voluptas aspernatur
					accusantium distinctio possimus est.
				</p>
			</div>
            <div className = "bg-gray-800 rounded flex p-4 h-full items-center "></div>
		</section>
	);
}

export default Skills;
