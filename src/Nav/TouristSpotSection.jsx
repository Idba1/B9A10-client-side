import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristSpotSectionCardDesign from "../Cared/TouristSpotSectionCardDesign";

const TouristSpotSection = () => {
    const touristSpot = useLoaderData();
     const [spots, setspots] = useState(touristSpot);
    return (
        <div>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    spots.map(spot => <TouristSpotSectionCardDesign
                        key={spot._id}
                        spot={spot}
                        spots={spots}
                        setspots={setspots}
                    ></TouristSpotSectionCardDesign>)
                }
            </div>
        </div>
    );
};

export default TouristSpotSection;