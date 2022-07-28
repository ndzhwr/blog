import React from 'react'
import { blogonhomeprops, LargeblogProps } from '../types'

const SmallBlog: React.FC<blogonhomeprops> = (data: blogonhomeprops) => {
    return (
        <div className='w-[400px] sm:w-full lg:w-[360px] md:w-[200px] mb-10'>
            <img src={data.image} alt=""  className='rounded-md'/>
            <h1 className='font-bold text-md '>{data.title}</h1>
            <div className=" flex py-4 gap-2 items-center ">
                <img src={data.author.profile} alt="" className='w-6  h-6 rounded-full object-cover' /> <span className='text-sm  text-gray-300'>Written by <a href={`/${data.author.username}`} className="hover:text-gray-700"> {data.author.username} </a></span>
            </div>


        </div>
    )
}

export default SmallBlog