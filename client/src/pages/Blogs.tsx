import { FC, useEffect, useState } from 'react'
import Sidenavbar from '../components/Sidenavbar'
import RecentlyAddedBlog from '../components/RecentAdded'
import BlogHightLight from '../components/Bloghighlight'
import DefaultImage from '../assets/default.png'
import CategoryButton from '../components/CategoryButton'
import axios from 'axios'
import store from '../store'
import EmptyPlace from '../components/EmptyPlace'

const Blogs: FC = () => {

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

    let state = store.getState()
    const currentCategories = state.blogs.currentCategory

    /**
     * Action for changing the current state
     * @param name  The name of the category to be set as the current category
     * @result void
     */


    return (
        <>
            <div className="flex h-screen">

                <Sidenavbar current='blogs' />
                <div className="content  w-full grid grid-cols-4 ">

                    <div className="header col-start-1 col-end-5 sm:col-end-4   px-10  pb-4 overflow-y-scroll  scrollDiv">
                        <h1 className='text-xl text-bold mb-4 font-bold mt-4'>Blogs</h1>
                        <div className="ad bg-blue-100 py-6 px-4  rounded-md">
                            <h1 className='text-xl font-bold '>Your're the next to create a blog</h1>
                            <p className="text-sm text-gray-400  ">You can also be a blogger,  and write some kinda cool blogs</p>
                            <button className='text-white bg-sky-500 rounded-md px-4 mt-4 py-2 md:scale-10'>Create a blog</button>
                        </div>
                        <div className="categories flex gap-2 mt-4 sticky top-0 z-20 py-2  bg-white overflow-x-scroll overflow-y-hidden scrollDiv ">
                            {categories && categories.map(category =>
                            (

                                <CategoryButton currentState={blogs} name={category.name} setFilteredBlogs={setFilteredBlogs} />

                            ))

                            }

                        </div>

                        <div className="blogs flex justify-between  flex-wrap ">
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
                        {
                            !blogs && (<h1>An error occured</h1>)
                        }



                    </div>
                    <div className="col-start-4 col-end-5  py-10 px-2 overflow-y-scroll scrollDiv hidden md:block" >
                        <h1 className='text-xl font-semibold'>New blogs</h1>
                        <p className='text-sm text-gray-300 mb-10 '>Recently added Blogs</p>
                        <RecentlyAddedBlog title='The reason why most American football players never die' author='NDIZIHIWE Regis' id='1234567788' />
                        <RecentlyAddedBlog title='The reason why most American football players never die' author='NDIZIHIWE Regis' id='1234567788' />
                        <RecentlyAddedBlog title='The reason why most American football players never die' author='NDIZIHIWE Regis' id='1234567788' />
                        <RecentlyAddedBlog title='The reason why most American football players never die' author='NDIZIHIWE Regis' id='1234567788' />



                    </div>

                </div>
            </div>
        </>
    )



}
export default Blogs