import { useLoaderData } from "react-router-dom";


const AddSpotCard = () => {
    const loadedspots = useLoaderData();

    return (
        <div>
            <h1>spot: {loadedspots.length}</h1>
        </div>
    );
};

export default AddSpotCard;