
import { Typewriter } from 'react-simple-typewriter';

const Slider = () => {
    return (
        <div>
            <style>
                {`
                .text-wrapper {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold; 
                }
                `}
            </style>
            <div className="carousel w-full relative">
                <div id="item1" className="carousel-item w-full relative">
                    <div className="text-wrapper">
                        <Typewriter
                            words={['Hello Everyone.', 'Welcome To Euro Journey']}
                            typeSpeed={80}
                            loop={Infinity}
                        />
                    </div>
                    <img src="banner2.jpg" className="w-full" alt="Banner 2" />
                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <div className="text-wrapper">
                        <Typewriter
                            words={['Hello Everyone.', 'Welcome To Euro Journey']}
                            typeSpeed={80}
                            loop={Infinity}
                        />
                    </div>
                    <img src="banner6.jpg" className="w-full" alt="Banner 6" />
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <div className="text-wrapper">
                        <Typewriter
                            words={['Hello Everyone.', 'Welcome To Euro Journey']}
                            typeSpeed={80}
                            loop={Infinity}
                        />
                    </div>
                    <img src="banner3.jpg" className="w-full" alt="Banner 3" />
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <div className="text-wrapper">
                        <Typewriter
                            words={['Hello Everyone.', 'Welcome To Euro Journey']}
                            typeSpeed={80}
                            loop={Infinity}
                        />
                    </div>
                    <img src="banner4.jpg" className="w-full" alt="Banner 4" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;
