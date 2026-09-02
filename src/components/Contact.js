import React, { useState } from "react";

const FIELD_CLASSES =
	"w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out";

function encode(data) {
	return Object.keys(data)
		.map(
			(key) =>
				encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
		)
		.join("&");
}

function validate({ name, email, message }) {
	const errors = {};
	if (!name.trim()) errors.name = "Please enter your name.";
	if (!email.trim()) {
		errors.email = "Please enter your email address.";
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
		errors.email = "Please enter a valid email address.";
	}
	if (!message.trim()) errors.message = "Please enter a message.";
	return errors;
}

function Contact() {
	const [values, setValues] = useState({ name: "", email: "", message: "" });
	const [errors, setErrors] = useState({});
	// "idle" | "submitting" | "sent" | "error"
	const [status, setStatus] = useState("idle");

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues((current) => ({ ...current, [name]: value }));
	};

	async function handleSubmit(event) {
		event.preventDefault();

		const nextErrors = validate(values);
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) {
			setStatus("idle");
			return;
		}

		setStatus("submitting");
		try {
			const response = await fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: encode({ "form-name": "contact", ...values }),
			});
			// The Netlify form handler answers 200 on the same path the SPA is
			// served from, so a 404 here means the handler is not wired up.
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			setValues({ name: "", email: "", message: "" });
			setStatus("sent");
		} catch (error) {
			setStatus("error");
		}
	}

	const isSubmitting = status === "submitting";

	return (
		<section id="contact" className="relative">
			<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
				<form
					onSubmit={handleSubmit}
					name="contact"
					noValidate
					className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
				>
					<h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
						Let's Work <strong>Together</strong>
					</h2>
					<p className="leading-relaxed mb-5">
						If you were impressed from this website and you think
						that I will make a good impact to your team, let's talk
					</p>

					<div className="relative mb-4">
						<label
							htmlFor="name"
							className="leading-7 text-sm text-gray-400"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={values.name}
							onChange={handleChange}
							required
							aria-invalid={Boolean(errors.name)}
							aria-describedby={
								errors.name ? "name-error" : undefined
							}
							className={`${FIELD_CLASSES} leading-8`}
						/>
						{errors.name && (
							<p id="name-error" className="mt-1 text-sm text-red-400">
								{errors.name}
							</p>
						)}
					</div>

					<div className="relative mb-4">
						<label
							htmlFor="email"
							className="leading-7 text-sm text-gray-400"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							required
							aria-invalid={Boolean(errors.email)}
							aria-describedby={
								errors.email ? "email-error" : undefined
							}
							className={`${FIELD_CLASSES} leading-8`}
						/>
						{errors.email && (
							<p id="email-error" className="mt-1 text-sm text-red-400">
								{errors.email}
							</p>
						)}
					</div>

					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-gray-400"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={values.message}
							onChange={handleChange}
							required
							aria-invalid={Boolean(errors.message)}
							aria-describedby={
								errors.message ? "message-error" : undefined
							}
							className={`${FIELD_CLASSES} h-32 resize-none leading-6`}
						/>
						{errors.message && (
							<p
								id="message-error"
								className="mt-1 text-sm text-red-400"
							>
								{errors.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed rounded text-lg"
					>
						{isSubmitting ? "Sending…" : "Submit"}
					</button>

					<p role="status" aria-live="polite" className="mt-3 text-sm">
						{status === "sent" && (
							<span className="text-green-400">
								Thanks — your message is on its way.
							</span>
						)}
						{status === "error" && (
							<span className="text-red-400">
								Something went wrong sending the form. You can
								reach me at{" "}
								<a
									className="underline"
									href="mailto:shayd2110@gmail.com"
								>
									shayd2110@gmail.com
								</a>{" "}
								instead.
							</span>
						)}
					</p>
				</form>
			</div>
		</section>
	);
}

export default Contact;
