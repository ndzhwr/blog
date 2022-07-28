
import React from "react";
import Button from '@mui/material/Button'
import Footer from './Footer'
import Logo from "./Logo";
const Navbar: React.FC = () => {
    return (
        <>
            < nav className="flex items-center justify-between px-[10vw] lg:px-[10vw]  md:px-[5vw]  sms:px-[2vw] h-16 sticky top-0 bg-white bg-opacity-100 md:bg-opacity-50 backdrop-blur-md">
                <Logo /><div className="as flex items-center gap-6 text-sm text-gray-500">
                    <a href="#" className="lg:block md:block sm:block msm:hidden">Home</a>
                    <a href="#" className=" sm:block msm:hidden">Blogs</a>
                    <a href="#" className=" sm:block msm:hidden">FAQs</a>
                    <div className="w-px h-6 bg-black bg-opacity-70  md:block msm:hidden"></div>
                    <a href="#" className="">Login</a>
                    <div className="sm:block msm:hidden">
                        <Button variant="contained" color="primary" disableElevation className="lowercase ">Sign up</Button>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar