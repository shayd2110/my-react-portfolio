import React, { useState } from 'react';

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

    function encode(data){
        rf
    }
	return (
		<section id="contact" className="relative">
			<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
					<iframe
						width="100%"
						height="100%"
						title="map"
						className="absolute inset-0"
						frameBorder={0}
						marginHeight={0}
						marginWidth={0}
						style={{ filter: "opacity(0.7)" }}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.084157930356!2d35.15801347591856!3d32.603940601058845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM2JzEzLjkiTiAzNcKwMDknMzEuOCJF!5e0!3m2!1sen!2sil!4v1630579864601!5m2!1sen!2sil"
					/>
					<div className="bg-gray-900 relative flex flex-warp py-6 rounded shadow-mb">
						<div className="lg:w-1/2 px-6">
							<h2 className="title-font font-semibold text-white tracking-widest text-xs">
								ADDRESS
							</h2>
							<p className="mt-1">
								Harchava 219 <br />
								Midrakh Oz
							</p>
						</div>
						<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-white tracking-widest text-xs">
								EMAIL
							</h2>
							<a
								className="text-indigo-400 leading-relaxed"
								href="mailto:shayd2110@gmail.com"
							>
								shayd2110@gmail.com
							</a>
							<h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
								PHONE
							</h2>
							<p className="leading-relaxed">+972 54 667-6278 </p>
						</div>
					</div>
				</div>
				<form
					netfily
					name="contact"
					className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
				>
					<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
						Let's Work <strong>Together</strong>
					</h2>
					<p className="leading-relaxed mb-5">
						If you were impressed from this website and you think
						that I will make a good impact to your team, let's talk
					</p>
					<div className="relative mb-4">
						<lable
							htmlFor="name"
							className="leading-7 text-sm text-gray-400"
						>
							Name
						</lable>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<lable
							htmlFor="email"
							className="leading-7 text-sm text-gray-400"
						>
							Email
						</lable>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<lable
							htmlFor="message"
							className="leading-7 text-sm text-gray-400"
						>
							Message
						</lable>
						<textarea
							id="message"
							name="message"
							className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
