import React from 'react'

function Contact() {
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
                    style ={{filter: "opacity(0.7)"}}
                    src = "<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.084157930356!2d35.15801347591856!3d32.603940601058845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDM2JzEzLjkiTiAzNcKwMDknMzEuOCJF!5e0!3m2!1sen!2sil!4v1630579864601!5m2!1sen!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>"
                    />
                </div>
            </div>
            
        </section>
    )
}

export default Contact
