
import TouristSpotSection from "../Nav/TouristSpotSection";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TouristSpotSection></TouristSpotSection>
            <Contact></Contact>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;