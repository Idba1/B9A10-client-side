import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddSpotCardDesign from "../Cared/AddSpotCardDesign";


const AllTouristSpot = () => {
    const loadedspots = useLoaderData();
    const [spots, setspots] = useState(loadedspots);

    return (
        <div>
            <h1>spot: {loadedspots.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    spots.map(spot => <AddSpotCardDesign
                        key={spot._id}
                        spot={spot}
                        spots={spots}
                        setspots={setspots}
                    ></AddSpotCardDesign>)
                }
            </div>
            <Link className="btn" to={'/addspot'} >Add a New Spot</Link>
        </div>
    );
};

export default AllTouristSpot;