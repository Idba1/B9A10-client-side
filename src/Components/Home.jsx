import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TouristSpotSectionCardDesign from "../Cared/TouristSpotSectionCardDesign";
import TouristSpotSctionStatic from "../Pages/TouristSpotSctionStatic";
import SixCountries from "../Countries/SixCountries";

const Home = () => {
    const touristSpot = useLoaderData();
    const [spots, setspots] = useState(touristSpot);
    return (
        <div>
            <Slider></Slider>
            <TouristSpotSctionStatic></TouristSpotSctionStatic>
            <div className='px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    spots?.map(spot => <TouristSpotSectionCardDesign
                        key={spot._id}
                        spot={spot}
                        spots={spots}
                        setspots={setspots}
                    ></TouristSpotSectionCardDesign>)
                }
            </div>
            <SixCountries></SixCountries>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;