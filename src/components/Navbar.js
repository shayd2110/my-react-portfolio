import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import classNames from "classnames";

const Navbar = () => {
	const [isShrunk, setShrunk] = useState(false);
	useEffect(() => {
		const onScroll = () => {
			setShrunk((isShrunk) => {
				if (
					!isShrunk &&
					(document.body.scrollTop > 20 ||
						document.documentElement.scrollTop > 20)
				) {
					return true;
				}

				if (
					isShrunk &&
					document.body.scrollTop < 4 &&
					document.documentElement.scrollTop < 4
				) {
					return false;
				}

				return isShrunk;
			});
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const containerClasses = [];
	if (isShrunk) {
		containerClasses.push(
			"container mx-auto flex flex-row  p-5 justify-center   items-center"
		);
	} else {
		containerClasses.push(
			"container mx-auto flex flex-wrap p-5  justify-center  flex-col md:flex-row items-center"
		);
	}
	return (
		<header
			className={classNames(
				"bg-gray-800 sticky  bg-opacity-80 border-b border-transparent transition  duration-500 dark:bg-black dark:text-white top-0 z-10",
				{
					"border-gray-200  dark:border-gray-800 backdrop-blur     ":
						isShrunk,
				}
			)}
		>
			<div className={containerClasses.join(" ")}>
				<a href=" " className="title-font font-medium text-white  ">
					<a
						href="#about"
						className=" mr-1 md:mr-2 sm:mr-2 sm:ml-0 md:ml-0 text-lg "
					>
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
					{/* <a href="#testimonials" className="hover:text-white">
						My Testimonials
					</a> */}
				</nav>
				<a
					href="#contact"
					className="inline-flex items-stretch  border-0 py-1 px-3 place-self- focus:outline-none hover:bg-gray-700 rounded text-base  md:mt-0"
				>
					Work with Me
					<ArrowRightIcon className="w-4 h-4 ml-1 self-center" />
				</a>
			</div>
		</header>
	);
};

export default Navbar;
