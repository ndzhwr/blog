import React from 'react'
import Sidenavbar from '../components/Sidenavbar'
import ReactMarkdown from 'react-markdown'
import { NewBlogSubTopicType } from '../types'

const NewBlog: React.FC = () => {
    const [content, setContent] = React.useState('')
    const [blogTitle, setBlogTitle] = React.useState('')
    const [blogDescription, setBlogDescription] = React.useState('')
    const [subtopics, setSubtopics] = React.useState<NewBlogSubTopicType[]>([])

    return (
        <div className="flex h-screen">

            <Sidenavbar current='new' />

            <div className="content  w-full grid grid-cols-4 ">

                <div className="header col-start-1 border col-end-3 py-10  px-10  pb-4 overflow-y-scroll  scrollDiv bg-sky-100">
                    <input type="file" placeholder='Blog description picture' />
                    <div className="flex items-center">

                    <input type="text" className=' border-gray-300 border px-4 py-2  w-full mb-2 text-sm rounded-md ' placeholder='Blog title' onChange={(e) => setBlogTitle(e.target.value)} />
                    <select name="category" className=' px-4    border text-sm  border-gray-400 rounded-md mb-2 py-2' placeholder='Select a category'>
                        <option value="fullname" className='px-4 py-2 border '>Blog Category</option>
                    </select>
                    </div>
                    <textarea className='w-full no-resize border border-gray-300 h-[100px] px-4 py-2 text-sm rounded-md ' placeholder='Blog description' onChange={(e) => setBlogDescription(e.target.value)} />
                    <textarea className='w-full no-resize border border-gray-300 h-[500px] px-4 py-2 text-sm rounded-md ' placeholder='Blog content / markdown only' onChange={(e) => setContent(e.target.value)} />
<button className='text-sm w-full bg-sky-500 py-2 text-white rounded-md'>Create blog</button>

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
                        <h1 className='font-bold text-xl mb-2'>{blogTitle}</h1>
                        <p className=' text-md text-[#c4c4c4] mb-4'>{blogDescription}</p>
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