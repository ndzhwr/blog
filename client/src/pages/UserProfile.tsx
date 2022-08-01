import React from 'react'
import Sidenavbar from '../components/Sidenavbar'

const UserProfile: React.FC = () => {
    const [content, setContent] = React.useState('')
    const [blogTitle, setBlogTitle] = React.useState('')
    const [blogDescription, setBlogDescription] = React.useState('')

    return (
        <div className="flex h-screen">

            <Sidenavbar current='profile' />

            <div className="content  w-full grid grid-cols-4 ">

                <div className="header col-start-1 border col-end-3 py-10  px-10  pb-4 overflow-y-scroll  scrollDiv bg-sky-100">

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
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserProfile