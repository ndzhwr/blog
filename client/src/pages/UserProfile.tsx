import React, { useState, useEffect } from 'react'
import Sidenavbar from '../components/Sidenavbar'
import BlogHightLight from '../components/Bloghighlight'
import EmptyPlace from '../components/EmptyPlace'
import axios from 'axios'
import DefaultImage from '../assets/default.png'

const UserProfile: React.FC = () => {

    const [blogs, setBlogs] = useState<any[]>([])
    const [categories, setCategories] = useState<any[]>([])
    const [filteredBlogs, setFilteredBlogs] = useState<any[]>([])
    useEffect(() => {
        const fetcher = async () => {
            const blogs = await axios.get('http://localhost:7777/blogs')
            setBlogs(blogs.data)
            setFilteredBlogs(blogs.data)
            const categories = await axios.get('http://localhost:7777/categories')
            setCategories(categories.data)
        }
        fetcher()
    }, [])


    return (
        <div className="flex h-screen w-screen">

            <Sidenavbar current='profile' />

            <div className="content  w-full px-[22kk,vw]  ">
                    <div className='mx-auto  h-20 w-20 mt-4  rounded-full  bg-gray-100' />
                    <h1 className='font-bold text-center '  >Username </h1>
                    <p className='text-center text-sm text-[#c4c4c4]'>Self motivated software developer</p>
                    <hr className='mt-4' />
                    <div className="blogs">
                        <div className="blogs flex justify-between  flex-wrap pt-4 ">
                            {filteredBlogs.length != 0 && filteredBlogs.map(blog => (
                                <div key={blog.id}>
                                    <BlogHightLight id={blog.id} category={blog.category} image={DefaultImage} title={blog.title} publishedAt={blog.publishedAt} author={blog.author} new={blog.new} />
                                </div>
                            ))
                            }
                            {
                                filteredBlogs.length == 0 && <EmptyPlace />
                            }
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default UserProfile