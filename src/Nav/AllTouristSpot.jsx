import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddSpotCardDesign from "../Cared/AddSpotCardDesign";
import { Circles } from 'react-loader-spinner'


const AllTouristSpot = () => {
    const loadedspots = useLoaderData();
    const [spots, setspots] = useState(loadedspots);


    if (!spots) {
        return (<div className="justify-center">
            <Circles
                height="80"
                width="80"
                color="#0E46A3"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>);
    }

    return (
        <div className="my-6">
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

            <div className="col-span-full my-10 text-center">
                <Link className="btn bg-[#4169E1] text-white #FFD700 hover:text-[#333333]" to={'/addspot'}>Add a New Spot</Link>
            </div>
        </div>
    );
};

export default AllTouristSpot;
