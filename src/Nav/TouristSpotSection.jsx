import { useLoaderData } from "react-router-dom";

const TouristSpotSection = () => {
    const touristSpot = useLoaderData();
    return (
        <div>
            <h1>spot: {touristSpot.length}</h1>
        </div>
    );
};

export default TouristSpotSection;