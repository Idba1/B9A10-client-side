
const ComingSoon = () => {
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                            <p className="text-xs dark:text-gray-600">By
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-800">
                            <p>Insert the actual text content here...</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:my-20 my-10">
                <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                    <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                        <div className="flex flex-col space-y-4 text-center lg:text-left">
                            <h1 className="lg:text-5xl text-3xl font-bold leading-none">News Letter</h1>
                            <p className="lg:text-lg text-base">Subscribe to our newsletter for exclusive updates and insights on luxury real estate. Stay connected and inspired with the latest trends and opportunities delivered straight to your inbox.</p>
                        </div>
                        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                            <div className="flex flex-row">
                                <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                                <button type="button" className="self-center font-bold px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75  hover:dark:border-sky-950 hover:dark:bg-sky-100 hover:dark:text-sky-950 dark:text-gray-50 focus:dark:ring-sky-200 dark:ring-sky-950 dark:bg-sky-800">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ComingSoon;