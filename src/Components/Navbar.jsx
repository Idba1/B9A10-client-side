import { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { AuthContext } from './AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {

    const { logout, user } = useContext(AuthContext);
    console.log(user);
    // const [countriesHover, setCountriesHover] = useState(false);
    const [pages, setpages] = useState(false);

    // const handleMouseEnter = () => {
    //     setCountriesHover(true);
    // };
    const handleMousePagesEnter = () => {
        setpages(true);
    };

    // const handleMouseLeave = () => {
    //     setCountriesHover(false);
    // };
    const handleMousePagesLeave = () => {
        setpages(false);
    };

    // theme controlar
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    // update state on toggle
    const handleTheme = (event) => {
        if (event.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }




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
                                isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/"}>Home</NavLink>
                            {/* <li className="dropdown">
                                <span tabIndex={0} className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white menu-title'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>COUNTRIES</span>
                                <ul className={`menu ${countriesHover ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/france"}>France</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/italy"}>Italy</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/spain"}>Spain</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/england"}>England</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/netherlands"}>Netherlands
                                    </NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/swizerland"}>Switzerland
                                    </NavLink></li>
                                </ul>
                            </li> */}
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/alltouristspot"}>ALL TOURIST SPOT</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/addspot"}>ADD SPOT</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={`/myadd/${user?.email}l`}>MY LIST</NavLink>
                            <li className="dropdown">
                                <span tabIndex={0} className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white menu-title'} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>PAGES</span>
                                <ul className={`menu ${pages ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/ourteam"}>OUR TEAM</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/f&Q"}>F&Q</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/comingsoon"}>COMING SOON</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/aboutus"}>ABOUT US</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/contact"}>CONTACT</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>
                                        isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/ticket"}>Ticket</NavLink></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-[#0E46A3] font-bold lg:text-2xl dark:text-sky-400">Euro Journey</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-7 font-semibold text-lg">
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'}
                            to={"/"}>HOME</NavLink>
                        {/* <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <NavLink to={"/countries"} className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white menu-title'} >COUNTRIES</NavLink>
                            <ul className={`menu ${countriesHover ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/france"}>France</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/italy"}>Italy</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/spain"}>Spain</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/england"}>England</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/netherlands"}>Netherlands
                                </NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/swizerland"}>Switzerland
                                </NavLink></li>
                            </ul>
                        </li> */}
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/alltouristspot"}>ALL TOURIST SPOT</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/addspot"}>ADD SPOT</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={`/myadd/${user?.email}l`}>MY LIST</NavLink>
                        <li className="dropdown">
                            <NavLink to={"/page"} tabIndex={0} className={({ isActive }) =>
                                isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white menu-title'} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>PAGES</NavLink>
                            <ul className={`menu ${pages ? 'block' : 'hidden'} absolute top-full left-0 mt-2 bg-base-100 rounded shadow-lg w-52`} onMouseEnter={handleMousePagesEnter} onMouseLeave={handleMousePagesLeave}>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/ourteam"}>OUR TEAM</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/f&Q"}>F&Q</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/comingsoon"}>COMING SOON</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/aboutus"}>ABOUT US</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/contact"}>CONTACT</NavLink></li>
                                <li><NavLink className={({ isActive }) =>
                                    isActive ? 'text-[#FFD700]' : theme === 'light' ? 'text-[#004A7F]' : 'text-white'} to={"/ticket"}>Ticket</NavLink></li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-1 lg:gap-3 md:gap-3">
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" onChange={handleTheme} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>

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
                                <NavLink className="btn text-white  lg:font-bold bg-[#0E46A3]" to={"/login"}>LogIn</NavLink>
                        }
                        {
                            user ? <div>
                                <NavLink className="btn hidden text-white  lg:font-bold bg-[#0E46A3]" to={"/register"}>Register</NavLink>
                            </div> :
                                <div>
                                    <NavLink className="btn text-white visible lg:font-bold bg-[#0E46A3]" to={"/register"}>Register</NavLink>
                                </div>
                        }

                    </div>

                </div>

            </div>

        </div >
    );
};

export default Navbar;
