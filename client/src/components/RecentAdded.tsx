import React from 'react'
import { Link } from 'react-router-dom'
import { RecentlyAdded } from '../types'



const RecentlyAddedBlog : React.FC<RecentlyAdded> = (data: RecentlyAdded) => {
    return (
        <Link to={`/blogs/${data.id}`}>
            <div className=' px-1 py-2 rounded-sm hover:shadow-md duration-100'>
                <h1 className='text-sm  font-semibold text-gray-600 mb-2'>{data.title}</h1>
                <span className='text-[10px] text-gray-400 '>{data.author}</span>
            </div>
        </Link>
    )
}

export default RecentlyAddedBlog