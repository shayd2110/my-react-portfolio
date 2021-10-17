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
					<li className="my-auto mx-2 hidden">
						<a
							href="https://www.hitwebcounter.com"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="https://hitwebcounter.com/counter/counter.php?page=7883275&style=0003&nbdigits=1&type=page&initCount=0"
								title="Free Counter"
								Alt="web counter"
								border="0"
							/>
						</a>
					</li>
										<li className="my-auto mx-2 hidden">
<a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=7883278&style=0006&nbdigits=1&type=ip&initCount=0" title="Free Counter" Alt="web counter"   border="0" /></a>                                    
                                    
                                        
                                          
                            
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
