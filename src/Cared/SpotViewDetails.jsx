import { Link } from "react-router-dom";

const SpotViewDetails = () => {
    return (
        <div>
            <div className="lg:w-3/4 w-full mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
                    </div>
                    <a rel="noopener noreferrer" href="#">See All</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src="https://i.postimg.cc/L5r15rp4/Sagrada-Familia.jpg" alt="" className="block object-cover object-center w-3/4 mx-auto rounded-md h-96 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>6 min ago</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">The Timeless Wonder of Sagrada Família: A Testament to Artistry and Faith</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600">In the heart of Barcelona stands an architectural masterpiece that transcends time and imagination — the Sagrada Família. This awe-inspiring basilica, designed by the visionary architect Antoni Gaudí, is a symbol of Catalonia's cultural identity and a testament to human ingenuity, creativity, and unwavering faith. <br /> <br />

                            Construction of the Sagrada Família began in 1882, and to this day, it remains a work in progress. Gaudí dedicated the latter part of his life to this monumental project, infusing it with his distinctive style that seamlessly blends nature-inspired motifs, intricate ornamentation, and innovative structural techniques. His vision for the Sagrada Família was not merely to create a building but to craft a spiritual experience that would elevate the souls of all who enter its sacred space. <br /> <br />

                            At first glance, the basilica's exterior is a mesmerizing display of sculpted stone facades adorned with sculptural elements depicting scenes from the Bible, saints, and symbolic figures. Each facade tells a story, inviting visitors to contemplate the mysteries of faith and the beauty of divine creation. The Nativity Facade, adorned with intricate carvings of flora and fauna, celebrates the birth of Jesus Christ and the joy of new life. The Passion Facade, characterized by its stark, angular forms, depicts the suffering and sacrifice of Christ, offering a poignant reminder of the human condition. <br /> <br />

                            As one steps inside the Sagrada Família, the sensory experience becomes even more profound. Sunlight filters through the kaleidoscopic stained glass windows, casting a spectrum of colors that dance across the stone surfaces. The interior, with its forest-like columns reaching upward like towering trees, evokes a sense of reverence and wonder. Gaudí's use of light and space creates an ethereal atmosphere, inviting contemplation and introspection. <br /> <br />

                            One of the most striking features of the Sagrada Família is its organic form, inspired by the shapes and structures found in nature. Gaudí believed that nature was the greatest source of inspiration, and he sought to emulate its beauty and harmony in his designs. The basilica's soaring towers, reminiscent of tree branches stretching toward the sky, symbolize the aspiration for spiritual elevation and enlightenment.

                        </p>
                    </div>
                </div>
                <Link to={"/alltouristspot"} className="btn btn-primary text-center mt-8 items-center">View All</Link>

            </div>
        </div>
    );
};

export default SpotViewDetails;