
const Contact = () => {
    return (
        <div className="mb-14">

            {/* <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
                <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.postimg.cc/GhdLPy0Q/download-6.jpg" alt="Image 1" />
                <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.postimg.cc/wMc686NL/images-1.jpg" alt="Image 2" />
                <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.postimg.cc/XYDn01rH/download-4.jpg" alt="Image 3" />
                <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.postimg.cc/J4x1pzMW/download-5.jpg" alt="Image 4" />
                <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.postimg.cc/mZMky4Pb/download-7.jpg" alt="Image 5" />
            </div> */}

            

            <div className="text-center mb-10 mt-8 lg:mt-12 p-5">
                <h1 className="text-2xl  text-[#4169E1] font-bold mt-2">Touch With Euro Journey</h1>
                <p className="text-[#888888] content-center ">Elevate your communication experience with our exclusive contact page, <br /> designed for seamless interaction with our discerning clientele.</p>
            </div>

            <section className="py-6 dark:bg-gray-50 dark:text-gray-900">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl text-[#FFD700] font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Italy address, 9999 City</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>contact@eurojourney.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Full name</span>
                            <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-yellow-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email address</span>
                            <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-yellow-600 dark:bg-gray-100" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-yellow-600 dark:bg-gray-100"></textarea>
                        </label>
                        <button type="button" className="self-center px-8 py-3 text-lg rounded hover:cursor-zoom-in lg:font-bold bg-[#FFD700] text-[#333333] btn justify-end bottom-0 border-none hover:bg-[#FF7F50] hover:text-[#FFFFFF]" >Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;