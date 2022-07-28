import React from 'react'
import { LargeblogProps } from '../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blogonhome: React.FC<LargeblogProps> = (data: LargeblogProps) => {
    let content_notion: string = '';
    let i: number = 0;
    while (i < 500) {
        content_notion += data.blog_content[i]
        i++
    }
    // w-[600px] lg:w-[600px]  md:w-[200px] sm:w-[300px]
    content_notion += '.....'
    return (
        <div className=' sm:w-full lg:w-[600px]'>
            <img src={data.blog_image} alt="" className='' />
            <div className="texts  px-6 py-2">

                <h1 className='font-bold  text-xl mt-2'>{data.blog_title}</h1>
                <FontAwesomeIcon icon="coffee" size="sm" color='white'/>
                <div className=" flex py-4 gap-2 items-center ">
                    <img src={data.blog_owner_image} alt="" className='w-6  h-6 rounded-full object-cover' /> <span className='text-sm  text-gray-300'>Written by <a href={`/${data.blog_owner_name}`} className="hover:text-gray-700"> {data.blog_owner_name} </a></span>
                </div>
                <p className='text-sm text-gray-500'>{content_notion}</p>

                <p  className="text-right text-red-500 text-sm"><a href={`/blogs/${data.blog_id}`} >Read more</a> </p>
            </div>
        </div>
    )
}


export default Blogonhome