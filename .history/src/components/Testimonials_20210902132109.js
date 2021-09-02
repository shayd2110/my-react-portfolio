import React from 'react'
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../testimonials-data";

function Testimonials() {
    return (
        <section id = "testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className=" w-10 inline-block mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                Client Testimonials
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testimonial)=>(testimonial))}
                </div>
            </div>
            
        </section>
    )
}

export default Testimonials
