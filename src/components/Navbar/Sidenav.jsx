import React from 'react'
import { PiFilmReelFill } from "react-icons/pi";
import { BiSolidTv } from "react-icons/bi";
import { RiFireFill } from "react-icons/ri";
import { HiMiniHome } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { PiFilmSlateFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { FaTheaterMasks } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


const Sidenav = () => {
    const navLinks = [
        {
            label: "Home",
            path: "/",
            icon: HiMiniHome
        },
        {
            label: "Search",
            path: "/search",
            icon: IoSearch
        },
        {
            label: "Movies",
            path: "/movies",
            icon: PiFilmSlateFill
        },
        {
            label: "TV Shows",
            path: "/shows",
            icon: BiSolidTv
        },
        {
            label: "Trending",
            path: "/movies/trending",
            icon: RiFireFill
        },
        {
            label: "Popular",
            path: "/movies/popular",
            icon: BsStars
        },
        {
            label: "Genres",
            path: "/movies/genres",
            icon: FaTheaterMasks
        },
        {
            label: "Peoples",
            path: "/peoples",
            icon: MdGroups2
        }
    ]
    return (
        <section className='w-[18%] h-screen flex flex-col px-[2rem] pt-[1rem] border-r border-zinc-800' id='side-nav-section'>
            <div className="logo flex items-center font-[Montserrat, sans-serif] font-[500] text-[1.5rem] uppercase tracking-[-0.5px]"><PiFilmReelFill className='text-[1.9rem] text-[#6300e4]' />Filmvix</div>
            <div className="navigations mt-[8vh] tracking-normal text-[1.2rem] font-[400] text-zinc-400">
                <nav className='side-main-nav flex flex-col border-b border-[#535357] pb-[5vh] mb-[3vh]'>
                    {
                        navLinks.map(({ label, path, icon: Icon }) => (
                            <NavLink key={`${label}navlink`} to={path} className='side-navlinks flex items-center gap-1.5 py-[1.5vh]'>
                                <Icon className='text-[1.2rem]' />
                                {label}
                            </NavLink>
                        ))
                    }
                </nav>
                <nav className="user-nav">
                    <NavLink to="/user" className="user-nav-link side-navlinks flex items-center gap-1.5"> <FaUserCircle /> My Space</NavLink>
                </nav>
            </div>
        </section>
    )
}

export default Sidenav