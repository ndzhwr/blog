
import React from "react";
import Button from '@mui/material/Button'
const Navbar: React.FC = () => {
    return (
        <>
            < nav className="flex items-center justify-between px-[010vw] h-16">
                <h1 className="font-extrabold text-xl"><span className="bg-sky-600 text-white p-2 rounded-lg">Blog</span>Side<span className="text-sky-500 font-bold text-4xl">.</span></h1>
                <div className="as flex items-center gap-6 text-sm text-gray-500">
                    <a href="#" className="">Home</a>
                    <a href="#" className="">Blogs</a>
                    <a href="#" className="">FAQs</a>
                    <div className="w-px h-6 bg-black bg-opacity-70"></div>
                    <a href="#" className="">Login</a>
                    <Button variant="contained" color="primary" disableElevation className="lowercase">Sign up</Button>
                </div>
            </nav>
        </>
    )
}


export default Navbar