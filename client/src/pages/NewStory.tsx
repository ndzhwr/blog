import React, { useEffect } from 'react'
import Sidenavbar from '../components/Sidenavbar'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import { NewBlogSubTopicType } from '../types'

const NewBlog: React.FC = () => {
    const [content, setContent] = React.useState('')
    const [blogTitle, setBlogTitle] = React.useState('')
    const [blogDescription, setBlogDescription] = React.useState('')
    const [blogCategory, setBlogCategory] = React.useState('')
    const [blogImage, setblogImage] = React.useState<File>()
    const [categories, setCategories] = React.useState<any[]>([])
    
    async function fetchCategories() {
        const res = await axios.get('http://localhost:7777/categories')
        const CategoriesWithoutAll: any[] = res.data.filter((category: { name: string }) => category.name !== 'All')
        setCategories([CategoriesWithoutAll, ...CategoriesWithoutAll])
    }
    useEffect(() => {
        fetchCategories()
        console.log(blogImage)
    }, [blogImage])



    return (
        <div className="flex h-screen">

            <Sidenavbar current='new' />

            <div className="content  w-full grid grid-cols-4 ">

                <div className="header col-start-1 border col-end-3 py-10  px-10  pb-4 overflow-y-scroll  scrollDiv bg-sky-100">
                    <form id='createBlogForm'>
                        <input type="file" placeholder='Blog description picture' onChange={(e) => e.target.files && e.target.files.length != 0 && setblogImage(e.target.files[0])} />
                        <div className="flex items-center">

                            <input type="text" className=' border-gray-300 border px-4 py-2  w-full mb-2 text-sm rounded-md ' placeholder='Blog title' name='blog_title' onChange={(e) => setBlogTitle(e.target.value)} />
                            <select className=' px-4    border text-sm  border-gray-300 rounded-md mb-2 py-2' placeholder='Select a category' name='blog_category' onChange={(e) => setBlogCategory(e.target.value)}>
                                {categories.map(category => (
                                    <option key={category.name} value={category.name} className='px-4 py-2 border '>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <textarea name="blog_description" className='w-full no-resize border border-gray-300 h-[100px] px-4 py-2 text-sm rounded-md ' placeholder='Blog description' onChange={(e) => setBlogDescription(e.target.value)} />
                        <textarea name='blog-content' className='w-full no-resize border border-gray-300 h-[500px] px-4 py-2 text-sm rounded-md ' placeholder='Blog content / markdown only' onChange={(e) => setContent(e.target.value)} />
                        <button className='text-sm w-full bg-sky-500 py-2 text-white rounded-md'>Create blog</button>
                    </form>

                </div>
                <div className="col-start-3 border col-end-5  py-10 px-4 overflow-y-scroll scrollDiv hidden md:block" >
                    {/* <h1 className='font-bold text-center'>Live preview</h1> */}
                    {blogTitle.trim().length == 0 && blogDescription.trim().length == 0 && content.trim().length == 0 && (
                        <div className='mt-60 opacity-70'>
                            <div className="w-8 h-8 bg-gray-700 mx-auto rounded-tr-xl   rounded-tl-xl rounded-br-xl "></div>
                            <h1 className='font-bold text-center   text-gray-700'>Live preview</h1>
                            <p className=" text-center text-sm text-[#c4c4c4]">Preview how your blog will be looking</p>
                        </div>
                    )}
                    <div id="previewer">
                        <img src={''} />
                        <h1 className='font-bold text-xl mb-2'>{blogTitle}</h1>
                        <p className=' text-right text-[#c4c4c4]'>{blogCategory}</p>
                        <p className=' text-sm text-[#c4c4c4] mb-4'>{blogDescription}</p>
                        <div className="text-md font-regular">

                            <ReactMarkdown>

                                {content}
                            </ReactMarkdown>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default NewBlog