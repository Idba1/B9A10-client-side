import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [countriesHover, setCountriesHover] = useState(false);
    const [pages, setpages] = useState(false);

    const handleMouseEnter = () => {
        setCountriesHover(true);
    };
    const handleMousePagesEnter = () => {
        setpages(true);
    };

    const handleMouseLeave = () => {
        setCountriesHover(false);
    };
    const handleMousePagesLeave = () => {
        setpages(false);
    };

    return (
        <div className="z-50">
            <div className="navbar z-10 bg-base-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/"}>Home</NavLink>
                            <li className="dropdown">
                                <span tabIndex={0} className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F] menu-title'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>COUNTRIES</span>
                                <ul className={`menu ${countriesHover ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury1"}>France</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury2"}>Italy</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury3"}>Spain</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury4"}>England</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury5"}>Netherlands
                                    </NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury5"}>Switzerland
                                    </NavLink></li>
                                </ul>
                            </li>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/alltouristspot"}>ALL TOURIST SPOT</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/addspot"}>ADD SPOT</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/myadd"}>MY ADD</NavLink>
                            <li className="dropdown">
                                <span tabIndex={0} className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F] menu-title'} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>PAGES</span>
                                <ul className={`menu ${pages ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/ourteam"}>OUR TEAM</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/f&Q"}>F&Q</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/comingsoon"}>COMING SOON</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/aboutus"}>ABOUT US</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/contact"}>CONTACT</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/pagenotfound"}>404 PAGES</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[#0E46A3] font-bold lg:text-2xl">Euro Journey</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-7 font-semibold text-lg">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'}
                            to={"/"}>HOME</NavLink>
                        <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <span className="menu-title text-black">COUNTRIES</span>
                            <ul className={`menu ${countriesHover ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury1"}>France</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury2"}>Italy</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury3"}>Spain</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury4"}>England</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury5"}>Netherlands
                                </NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/luxury5"}>Switzerland
                                </NavLink></li>
                            </ul>
                        </li>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/alltouristspot"}>ALL TOURIST SPOT</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/addspot"}>ADD SPOT</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/myadd"}>MY ADD</NavLink>
                        <li className="dropdown">
                            <span tabIndex={0} className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : 'text-[#004A7F] menu-title'} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>PAGES</span>
                            <ul className={`menu ${pages ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/ourteam"}>OUR TEAM</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/f&Q"}>F&Q</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/comingsoon"}>COMING SOON</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/aboutus"}>ABOUT US</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/contact"}>CONTACT</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : 'text-[#004A7F]'} to={"/pagenotfound"}>404 PAGES</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-1 lg:gap-3 md:gap-3">
                    <NavLink className="btn text-white  lg:font-bold bg-[#0E46A3]" to={"/register"}>Register</NavLink>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
