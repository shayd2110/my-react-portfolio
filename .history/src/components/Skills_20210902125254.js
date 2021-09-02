import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../skills-data";

function Skills() {
	return (
		<section id="skills">
			<div className="container px-5 mx-auto"></div>
            <div className = "text-center mb-20">
                <ChipIcon />
            </div>
		</section>
	);
}

export default Skills;
