import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedinIn,
	faFacebook,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container px-5 mx-auto pb-5 bg-gray-900 text-center ">
				<ul className="list-none flex justify-center mt-4 p-0 text-3xl-noline font-extrabold text-accent-base">
					<li className="my-auto mx-2">
						<a
							className="px-4"
							href="https://www.linkedin.com/in/shay-doron"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
					</li>
					<li className="my-auto mx-2">
						<a
							className="px-4"
							href="https://www.facebook.com/shay.doron"
						>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
					</li>
					<li className="my-auto mx-2">
						<a className="px-4" href="https://github.com/shayd2110">
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
