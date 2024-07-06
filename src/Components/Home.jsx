import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TouristSpotSectionCardDesign from "../Cared/TouristSpotSectionCardDesign";
import TouristSpotSctionStatic from "../Pages/TouristSpotSctionStatic";

const Home = () => {
    const touristSpot = useLoaderData();
    const [spots, setspots] = useState(touristSpot);
    return (
        <div>
            <Slider></Slider>
            <TouristSpotSctionStatic></TouristSpotSctionStatic>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        spots?.map(spot => <TouristSpotSectionCardDesign
                            key={spot._id}
                            spot={spot}
                            spots={spots}
                            setspots={setspots}
                        ></TouristSpotSectionCardDesign>)
                    }
                </div> 
            <Contact></Contact>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;