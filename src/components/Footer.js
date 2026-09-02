import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedinIn,
	faFacebook,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
	{
		icon: faLinkedinIn,
		label: "Shay Doron on LinkedIn",
		href: "https://www.linkedin.com/in/shay-doron",
	},
	{
		icon: faFacebook,
		label: "Shay Doron on Facebook",
		href: "https://www.facebook.com/shay.doron",
	},
	{
		icon: faGithub,
		label: "Shay Doron on GitHub",
		href: "https://github.com/shayd2110",
	},
];

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container px-5 mx-auto pb-5 bg-gray-900 text-center">
				<ul className="list-none flex justify-center mt-4 p-0 text-3xl-noline font-extrabold text-accent-base">
					{socials.map((social) => (
						<li key={social.href} className="my-auto mx-2">
							<a
								className="px-4 hover:text-white focus:ring-2 focus:ring-accent-base rounded"
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${social.label} (opens in a new tab)`}
							>
								<FontAwesomeIcon
									icon={social.icon}
									aria-hidden="true"
								/>
							</a>
						</li>
					))}
				</ul>
				<p className="mt-4 text-sm text-gray-500">
					&copy; {new Date().getFullYear()} Shay Doron
				</p>
			</div>
		</footer>
	);
};

export default Footer;
