import { FC } from 'react'
import { Link } from 'react-router-dom'
import { BlogHightlightProps } from '../types/props/BloghightLight.props'

const BlogHightLight: FC<BlogHightlightProps> = (data: BlogHightlightProps) => {
    return (
        <div className='w-full lg:w-[300px]  overflow-hidden py-2 rounded-sm'>
                <Link to={`/blogs/${data.id}`}  className="w-fit">
                <div className='relative'>
                    <img src={data.image} alt="" className='w-full h-40 object-cover  rounded-md ' />
                    <Link to={`/blogs/${data.category}`} className="absolute bg-white bg-opacity-30 text-white px-4 py-2 rounded-full backdrop-blur-md text-[14px]  bottom-1 right-1 ">#{data.category}</Link>
                </div>
                <h1 className='text-sm  font-semibold text-gray-600 mb-2'>{data.title}</h1>
                <span className='text-sm text-gray-200 '>{data.author}</span><span className='text-sm text-gray-200 float-right'>{data.publishedAt}</span>


        </Link>
            </div>
    )

}

export default BlogHightLight