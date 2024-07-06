import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from './AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { logout, user } = useContext(AuthContext);
    console.log(user);
    // const [countriesHover, setCountriesHover] = useState(false);
    // const [pages, setpages] = useState(false);

    // const handleMouseEnter = () => {
    //     setCountriesHover(true);
    // };
    // const handleMousePagesEnter = () => {
    //     setpages(true);
    // };

    // const handleMouseLeave = () => {
    //     setCountriesHover(false);
    // };
    // const handleMousePagesLeave = () => {
    //     setpages(false);
    // };

    // theme controlar
    // const [theme, setTheme] = useState('light')

    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localTheme = localStorage.getItem('theme')
    //     document.querySelector('html').setAttribute('data-theme', localTheme)
    // }, [theme])

    // update state on toggle
    // const handleTheme = (event) => {
    //     if (event.target.checked) {
    //         setTheme('dark')
    //     } else {
    //         setTheme('light')
    //     }
    // }




    return (
        <div className="z-50">
            <div className="navbar z-10 bg-[#4169E1] shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-white'} to={"/"}>Home</NavLink>
                            {/* <li className="dropdown">
                                <span tabIndex={0} className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white menu-title'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>COUNTRIES</span>
                                <ul className={`menu ${countriesHover ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/france"}>France</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/italy"}>Italy</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/spain"}>Spain</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/england"}>England</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/netherlands"}>Netherlands
                                    </NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/swizerland"}>Switzerland
                                    </NavLink></li>
                                </ul>
                            </li> */}
                            {/* <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-white'} to={"//touristspotsection"}>Countries</NavLink> */}
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-white'} to={"/alltouristspot"}>ALL TOURIST SPOT</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-white'} to={"/addspot"}>ADD SPOT</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-white'} to={`/myadd/${user?.email}`}>MY LIST</NavLink>
                            {/* <li className="dropdown">
                                <span tabIndex={0} className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white menu-title'} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>PAGES</span>
                                <ul className={`menu ${pages ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/ourteam"}>OUR TEAM</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/f&Q"}>F&Q</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/comingsoon"}>COMING SOON</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/aboutus"}>ABOUT US</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/contact"}>CONTACT</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-white'} to={"/ticket"}>Ticket</NavLink></li>

                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[#FFD700] font-bold lg:text-2xl">Euro Journey</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-7 font-semibold text-lg">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-white'}
                            to={"/"}>HOME</NavLink>
                        {/* <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <NavLink to={"/countries"} className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-white menu-title'} >COUNTRIES</NavLink>
                            <ul className={`menu ${countriesHover ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/france"}>France</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/italy"}>Italy</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/spain"}>Spain</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/england"}>England</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/netherlands"}>Netherlands
                                </NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/swizerland"}>Switzerland
                                </NavLink></li>
                            </ul>
                        </li> */}
                        {/* <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-white'} to={"/touristspotsection"}>Country</NavLink> */}
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-white'} to={"/alltouristspot"}>ALL TOURIST SPOT</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-white'} to={"/addspot"}>ADD SPOT</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-white'} to={`/myadd/${user?.email}`}>MY LIST</NavLink>
                        {/* <li className="dropdown">
                            <NavLink to={"/page"} tabIndex={0} className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-white menu-title'} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>PAGES</NavLink>
                            <ul className={`menu ${pages ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/ourteam"}>OUR TEAM</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/f&Q"}>F&Q</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/comingsoon"}>COMING SOON</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/aboutus"}>ABOUT US</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/contact"}>CONTACT</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-white'} to={"/ticket"}>Ticket</NavLink></li>

                            </ul>
                        </li> */}
                    </ul>
                </div>
                <div className="navbar-end gap-1 lg:gap-3 md:gap-3">
                   

                    <div className='flex'>

                        {
                            user ? <div>
                                <a id="clickable">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL || "https://i.postimg.cc/6QKY96CQ/download-2.jpg"} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <button className="btn btn-sm  btn-ghost">{user?.displayName || 'traveler'}</button>

                                            </li>
                                            <li>
                                                <button
                                                    onClick={logout}
                                                    className="btn btn-sm  btn-ghost">Logout</button>

                                            </li>
                                        </ul>
                                    </div>
                                </a>
                                <Tooltip anchorSelect="#clickable" clickable>
                                    <button>{user?.displayName || 'traveler'}</button>
                                </Tooltip>
                            </div>
                                :
                                <NavLink  className=" lg:font-bold bg-[#FFD700] text-[#333333] btn justify-end bottom-0 border-none hover:bg-[#FF7F50] hover:text-[#FFFFFF]" to={"/login"}>LogIn</NavLink>
                        }
                        {
                            user ? <div>
                                <NavLink  className=" lg:font-bold bg-[#FFD700] text-[#333333] hidden btn justify-end bottom-0 border-none hover:bg-[#FF7F50] hover:text-[#FFFFFF]" to={"/register"}>Register</NavLink>
                            </div> :
                                <div>
                                    <NavLink className="ml-2 visible lg:font-bold bg-[#FFD700] text-[#333333] btn justify-end bottom-0 border-none hover:bg-[#FF7F50] hover:text-[#FFFFFF]" to={"/register"}>Register</NavLink>
                                </div>
                        }

                    </div>

                </div>

            </div>

        </div >
    );
};

export default Navbar;
