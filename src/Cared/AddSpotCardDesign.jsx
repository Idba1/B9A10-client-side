import { Link } from "react-router-dom";

const AddSpotCardDesign = ({spot}) => {
    const { image, tourists_spot_name, short_description, } = spot;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src= { image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">  {tourists_spot_name} </h2>
                    <p> {short_description} </p>
                    <div className="card-actions justify-end">
                        <Link to={`/allviewdetails`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSpotCardDesign;