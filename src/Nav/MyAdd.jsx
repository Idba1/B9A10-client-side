import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Link } from "react-router-dom";

const MyAdd = () => {

	const { user } = useContext(AuthContext) || {};
    console.log(user);


    const [Spot, setSpot] = useState([]);
    // console.log(user);
    useEffect(() => {
      fetch(`https://euro-journey.vercel.app/myadd/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setSpot(data);
        });
    }, [user]);



    return (
        <div>

            <div className="text-center mb-10 mt-8 lg:mt-12 p-5">
                <h1 className="text-2xl  text-sky-950 font-bold mt-2">Touch With Euro Journey</h1>
                <p className="text-black content-center ">Elevate your communication experience with our exclusive contact page, <br /> designed for seamless interaction with our discerning clientele. Connect effortlessly for <br /> inquiries, assistance, or esteemed collaboration opportunities in the realm of luxury real estate.</p>
            </div>


            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <Link className="btn btn-primary" to={'/update'}>Update</Link>
                        <button className="btn btn-primary">Deleted</button>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default MyAdd;