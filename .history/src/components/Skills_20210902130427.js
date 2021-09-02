import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../skills-data";

function Skills() {
	return (
		<section id="skills">
			<div className="container px-5 mx-auto"></div>
            <div className = "text-center mb-20">
                <ChipIcon className = "w-10 inline-block mb-4"/>
                <h1 className = "sm:text-4xl text-3xl font-medium title-font -text-white mb-4">
                    Skiils &amp; Technologies
                </h1>
                <p className = "text-base leading-relaxed xl:w-"></p>
            </div>
		</section>
	);
}

export default Skills;
