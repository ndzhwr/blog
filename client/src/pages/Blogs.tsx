import { FC } from 'react'
import Sidenavbar from '../components/Sidenavbar'
import RecentlyAddedBlog from '../components/RecentAdded'
import BlogHightLight from '../components/Bloghighlight'
import DefaultImage from '../assets/default.png'

const Blogs: FC = () => {
    window.alert("Hello Wolrd")
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
                            <button className='bg-blue-100 py-2 px-4   rounded-full  text-blue-500'>All</button>
                            <button className='bg-gray-100 text-gray-500 rounded-full capitalize  px-4 '>programming</button>
                            <button className='bg-gray-100 text-gray-500 rounded-full  capitalize   px-4 '>Management</button>
                            <button className='bg-gray-100 text-gray-500 rounded-full   capitalize  px-4 '>Architecture</button>
                            <button className='bg-gray-100 text-gray-500 rounded-full  capitalize  px-4 '>Music </button>

                           
                        </div>
                        <div className="blogs flex justify-between  flex-wrap ">
                            <BlogHightLight id='4567u8iuy7' category='programming' image={DefaultImage} title="The way that ndizihiwe regis became a successor" publishedAt='2022-09-08' author='Ndizihiwe regis'/>
                            <BlogHightLight id='4567u8iuy7' category='programming' image={DefaultImage} title="The way that ndizihiwe regis became a successor" publishedAt='2022-09-08' author='Ndizihiwe regis'/>
                            <BlogHightLight id='4567u8iuy7' category='programming' image={DefaultImage} title="The way that ndizihiwe regis became a successor" publishedAt='2022-09-08' author='Ndizihiwe regis'/>
                           
                        </div>
                       

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