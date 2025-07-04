import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const TouristSpotSectionCardDesign = ({spot}) => {
    const { _id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, email, name } = spot;
    return (
        <div  data-aos="zoom-in" data-aos-duration="1200"  className="my-5">
            <div className="h-full card-side bg-gray-50 shadow-xl container max-w-xl p-6 mx-auto">
                <figure><img  src= { image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 data-aos="fade-left" data-aos-duration="300" className="card-title text-[#4169E1] font-bold">  {tourists_spot_name} </h2>
                    <p> {short_description} </p>
                    <p><span>{location},</span> {country_Name} </p>
                    <div className="card-actions justify-end bottom-0">
                        <Link to={`/details/${_id}`} className="bg-[#FFD700] text-[#333333] btn justify-end bottom-0 border-none hover:bg-[#FF7F50] hover:text-[#FFFFFF]">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotSectionCardDesign;