import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Navbar = () => {
	return (
		<header className="bg-gray-800 md:sticky top-0 z-10">
			<div className="container  mx-auto flex flex-wrap p-5 space-x-1 flex-col md:flex-row items-center">
				<a
					href=" "
					className="title-font font-medium text-white mb-4 md:mb-0"
				>
					<a href="#about" className="ml-3 text-lg">
						Shay Doron
					</a>
				</a>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 gap-2	flex flex-wrap items-center text-base justify-center">
					<a href="#projects" className="hover:text-white">
						My projects
					</a>
					<a href="#skills" className="hover:text-white">
						My Skills
					</a>
					<a href="#testimonials" className="hover:text-white">
						My Testimonials
					</a>
				</nav>
				<a
					href="#contact"
					className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
				>
					Work with Me
				</a>
				<ArrowRightIcon className="w-4 h-4 ml-1" />
			</div>
		</header>
	);
};

export default Navbar;
