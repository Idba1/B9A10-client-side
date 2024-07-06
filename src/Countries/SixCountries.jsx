import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const SixCountries = () => {
    const stories = [
        /**
         *  https://i.ibb.co/B3qptPx/england1.jpg
            https://i.ibb.co/M8yX0D1/France3.jpg
            https://i.ibb.co/gV7GJXx/France4.jpg
            https://i.ibb.co/5hmxSPt/France8.jpg
            https://i.ibb.co/9mX58PZ/Italy11.jpg
            https://i.ibb.co/rs9HGkc/netherland1.jpg
            https://i.ibb.co/xzzFh1V/netherland5.jpg
            https://i.ibb.co/8DCzStf/Spain5.jpg
            https://i.ibb.co/VJqXY1Z/Switzerland4.webp
            https://i.ibb.co/vm2PBD5/Switzerland5.jpg
            https://i.ibb.co/XDYYfdf/Switzerland9.jpg
         */

        {
            id: 1,
            imageUrl: ' https://i.ibb.co/B3qptPx/england1.jpg',
            name: 'England',
        },
        {
            id: 2,
            imageUrl: 'https://i.ibb.co/M8yX0D1/France3.jpg',
            name: 'France',
        },
        {
            id: 3,
            imageUrl: 'https://i.ibb.co/gV7GJXx/France4.jpg',
            name: 'France',
        },
        {
            id: 4,
            imageUrl: 'https://i.ibb.co/5hmxSPt/France8.jpg',
            name: 'France',
        },
        {
            id: 5,
            imageUrl: 'https://i.ibb.co/9mX58PZ/Italy11.jpg',
            name: 'Italy',
        },
        {
            id: 6,
            imageUrl: 'https://i.ibb.co/rs9HGkc/netherland1.jpg',
            name: 'Netherland',
        },
        {
            id: 7,
            imageUrl: 'https://i.ibb.co/VJqXY1Z/Switzerland4.webp',
            name: 'Switzerland',
        },
        {
            id: 8,
            imageUrl: 'https://i.ibb.co/8DCzStf/Spain5.jpg',
            name: 'Spain',
        },
        {
            id: 9,
            imageUrl: 'https://i.ibb.co/XDYYfdf/Switzerland9.jpg',
            name: 'Switzerland',
        },
        {
            id: 10,
            imageUrl: 'https://i.ibb.co/vm2PBD5/Switzerland5.jpg',
            name: 'Switzerland',
        },
    ];

    const containerRef = useRef(null);

    const scrollCards = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 2;
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(scrollCards, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='my-10 md:my-14 lg:my-20'>
            <div className="">
                <h2 className="text-2xl text-center font-semibold sm:text-4xl text-[#0077B5]">Let's Go With Euro Journey</h2>
                <p className="mt-4 text-center mb-8 dark:text-sky-950"> Explore some of the world's most renowned <br /> tourist attractions and breathtaking natural sites. <br /></p>
            </div>
            <div className="overflow-hidden relative">
                <div className="flex" ref={containerRef} style={{ minHeight: '100%', whiteSpace: 'nowrap', overflowX: 'hidden' }}>
                    {stories.map((story) => (
                        <motion.div
                            key={story.id}
                            className="inline-block w-full max-w-sm mx-auto my-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: 'inline-block', margin: '0 10px' }}
                        >
                            <motion.div
                                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                                style={{ backgroundImage: `url(${story.imageUrl})` }}
                            ></motion.div>

                            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-purple-800">
                                <h3 className="py-2 font-bold tracking-wide text-center text-purple-800 uppercase dark:text-white">{story.name}</h3>
                                <p className="px-3 py-2 text-center text-white dark:text-white">{` Let's Go With Euro Journey`}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SixCountries;