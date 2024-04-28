import { Link } from "react-router-dom";

const SpotViewDetails = () => {
    return (
        <div>
            <h1>View Details</h1>
            <Link to={"/alltouristspot"} className="btn btn-primary">View All</Link>
        </div>
    );
};

export default SpotViewDetails;