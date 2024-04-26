import Slider from "../Components/Slider";
import AboutUs from "../Pages/AboutUs";
import ComingSoon from "../Pages/ComingSoon";
import Contact from "../Pages/Contact";
import OurTeam from "../Pages/OurTeam";
import Queastion from "../Pages/Queastion";
import Ticket from "../Pages/Ticket";

const Page = () => {
    return (
        <div>
            <Slider></Slider>
            <Queastion></Queastion>
            <ComingSoon></ComingSoon>            
            <Contact></Contact>
            <Ticket></Ticket>
            <OurTeam></OurTeam>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Page;