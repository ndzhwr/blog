import React from 'react'
import DefaultImage from '../assets/default.png'
import Largeblog from './Largeblog'
import { lorem  } from '../assets/lorem'



const Landing: React.FC = () => {
    return (
        
            <div className='grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 px-[10vw]'>

                <div className='py-40 text-gray-500'>
                    <div className='w-40 h-60  absolute bg-orange-100 backdrop-blur opacity-30  -z-10 blur-lg'></div>
                    <code className='text-sky-500'>./blogside ;</code>
                    <h1 className="font-extrabold text-4xl text-black my-[2wh]">Where cool blogs find you</h1>
                    <p className='text-sm ' >Come on find the best wordwide blogger <br />
                        And become one of them</p>
                    <p className='mt-[2vh]'>Blogside&copy; is a wordwide blogs and articles store where you can find some interesting Blogs that sounds beautiful for you </p>
                    <div className='w-full mt-[4vh]'>
                        <button className='text-white bg-sky-500 rounded-md px-4 py-2'>Explore blogs</button> <button className='text-sky-500 border border-sky-500 rounded-md px-4 py-2'>Start writing aricles</button>
                    </div>

                </div>
                <div>

                </div>

            </div>

    


    )

}

export default Landing