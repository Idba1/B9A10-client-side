import { Link } from "react-router-dom";

const AddSpotCardDesign = ({spot}) => {
    const {_id, image, tourists_spot_name, totaVisitorsPerYear, short_description, } = spot;

    return (
        <div>
            <div className="card h-full w-full card-side bg-base-100 shadow-xl">
                <figure><img src= {image} alt="Movie" className="h-24 w-24" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[#4169E1]">  {tourists_spot_name} <span className="text-black text-sm ml-7">Visitors: {totaVisitorsPerYear}</span></h2>
                    <p className="text-[#888888]"> {short_description} </p>
                    <div className="card-actions justify-end">
                        <Link to={`/allviewdetails/${_id}`} className="btn bg-[#FFD700] text-[#333333]  #FFD700 hover:text-[#333333]">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSpotCardDesign;