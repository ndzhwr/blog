import React from 'react'
import { LargeblogProps } from '../types'

const Largeblog: React.FC<LargeblogProps> = (data: LargeblogProps) => {
    let content_notion: string = '';
    let i: number = 0;
    while (i < 155) {
        content_notion += data.blog_content[i]
    }
    content_notion += '...'
    return (
        <div className='w-[600px]'>
            <div className=''>
            </div>
            <h1>{data.blog_title}</h1>
            <div className="owner">
                <img src={data.blog_owner_image} alt="" className='w-10 h-10 rounded-full object-cover' /> <span>Written by <a href={`/${data.blog_owner_name}`}> {data.blog_owner_name} </a></span>
            </div>
            <p>{content_notion}</p>

            <a href={`/blogs/${data.blog_id}`}></a>


        </div>
    )
}

export default Largeblog