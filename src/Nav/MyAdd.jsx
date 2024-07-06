import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Link } from "react-router-dom";

const MyAdd = () => {

    const { user } = useContext(AuthContext) || {};
    console.log(user);


    const [Spot, setSpot] = useState([]);
    console.log(Spot);
    useEffect(() => {
        fetch(`https://euro-journey.vercel.app/addspot/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setSpot(data);
            });
    }, [user.email]);



    return (
        <div>

            <div className="text-center mb-10 mt-8 lg:mt-12 p-5">
                <h1 className="text-2xl  text-sky-950 font-bold mt-2">Touch With Euro Journey</h1>
                <p className="text-black content-center ">Elevate your communication experience with our exclusive contact page, <br /> designed for seamless interaction with our discerning clientele. Connect effortlessly for <br /> inquiries, assistance, or esteemed collaboration opportunities in the realm of luxury real estate.</p>
            </div>


            <div className='px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9'>
                {Spot.map((ssopt) => (
                    <div key={ssopt._id} className="card-side bg-base-100 shadow-xl">
                        <figure><img className="h-60 w-full" src={ssopt.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{ssopt.country_Name}</h2>
                            <div className="flex justify-between">
                                <span>{ssopt.average_cost}</span>
                                <span>{ssopt.totaVisitorsPerYear}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>{ssopt.tourists_spot_name}</span>
                                <span>{ssopt.seasonality}</span>
                            </div>
                            <p>{ssopt.short_description}</p>
                            <div className="card-actions justify-end">
                                <Link className="btn btn-primary" to={'/update'}>Update</Link>
                                <button className="btn btn-primary">Deleted</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAdd;