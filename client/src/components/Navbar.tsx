
import React from "react";
import Button from '@mui/material/Button'
import Logo from "./Logo";
import { Link } from 'react-router-dom'
const Navbar: React.FC = () => {
    return (
        <>
            < nav className="flex items-center justify-between px-[10vw] lg:px-[10vw]  md:px-[5vw]  sms:px-[2vw] h-16 sticky top-0 bg-white bg-opacity-100 md:bg-opacity-50 backdrop-blur-md">
                <Logo /><div className="as flex items-center gap-6 text-sm text-gray-500">
                    <Link to="/" className="lg:block md:block sm:block msm:hidden ">Home</Link>
                    <Link to="/blogs" className=" sm:block msm:hidden">Stories</Link>
                    <Link to="/contact" className=" sm:block msm:hidden">Contact</Link>
                    <div className="w-px h-6 bg-black bg-opacity-70  md:block msm:hidden"></div>
                    <Link to="" className="/login">Login</Link>
                    <div className="sm:block msm:hidden">
                    <button className='text-white bg-sky-500 rounded-md px-4 py-2 md:scale-10 msm:scal'>Sign up</button>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar