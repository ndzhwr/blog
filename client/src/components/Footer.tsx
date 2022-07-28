import React from 'react'
import Logo from './Logo'
const Footer: React.FC = () => {
    return (
        <>
            <div className="bg-neutral-900  py-20 px-2">
                <div className="flex justify-between align-center py-4">
                </div>
                <hr className='opacity-20 w-64 mx-auto' />
                <div className="tn px-[10vw] pt-10 text-sm  flex flex-col md:flex-row justify-between text-white">
                    <div className='flex flex-col lg:flex-row gap-2 '>
                        <a href="#">Home</a>
                        <a href="#">Blogs</a>
                        <a href="#">Topics</a>
                        <a href="#">Contact us</a>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-2 mt-10 md:mt-0'>
                        <a href="#">Github</a>
                        <a href="#">Linkedin</a>
                        <a href="#">Website</a>
                    </div>
                </div>
            </div>
            <div className="footer bg-neutral-900">
                <footer className="text-center text-white opacity-40 text-sm " >Copyright&copy;2022. All rights reserved.</footer>
            </div>

        </>
    )
}


export default Footer