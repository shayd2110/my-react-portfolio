import React from "react";

function About() {
	return (
		<section id="about">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Hi, I'm <strong>Shay Doron</strong>
						<br className="hidden lg:inline-block" />
						I'm a Softwear & Fullstack dev and I love to build
						amazing apps
					</h1>
					<p className="mb-8 leading-relaxed">
						I'm a computer science graduate. Team Player with a
						sound mind contributes to a good atmosphere in the team
						and the progression of tasks. I'm very responsible and
						committed to the mission; I excel at self-learning and
						enjoy enriching myself with extensive knowledge and
						expanding my horizons.
					</p>
					<div className="flex-auto flex space-x-3">
						<a
							href="#contact"
							className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
						>
							Work with me
						</a>

						<a
							href="#projects"
							className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
						>
							See my Work
						</a>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded-full"
						alt="hero"
						src="./shayDoron01.jpg"
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
