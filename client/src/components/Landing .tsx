import React from 'react'
import DefaultImage from '../assets/default.png'
import { lorem } from '../assets/lorem'
import Blogonhome from './Blogonhome'
import SmallBlog from './SmallBlog'


const Landing: React.FC = () => {
    return (
        <>
            <div className='grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 msm:grid-cols-1  md:px-[5vw] msm:px-[2vw] bg-blue-50   lg:px-[10vw]  '>

                <div className='py-40 text-gray-500 msm:w-full'>
                    <div className='w-40 h-60  absolute bg-orange-100 backdrop-blur opacity-30  -z-10 blur-lg'></div>
                    <code className='text-sky-500'>./blogside ;</code>
                    <h1 className="font-extrabold text-4xl text-black my-[2wh]">Where cool blogs find you</h1>
                    <p className='text-sm ' >Come on find the best wordwide blogger <br />
                        And become one of them</p>
                    <p className='mt-[2vh]'>Blogside&copy; is a wordwide blogs and articles store where you can find some interesting Blogs that sounds beautiful for you </p>
                    <div className='w-full mt-[4vh]'>
                        <button className='text-white bg-sky-500 rounded-md px-4 py-2 md:scale-10 msm:scal'>Explore blogs</button> <button className='text-sky-500 border border-sky-500 rounded-md px-4 py-2'>Start writing aricles</button>
                    </div>

                </div>
                <div>
                    <Blogonhome publishedAt='2022-06-07' blog_tags={['money', 'coding']} blog_id='asd45' blog_content={lorem} blog_title="Lorem ipsum dolor sit amet" blog_image={DefaultImage} blog_owner_image={DefaultImage} blog_owner_name="Dolor sit" />
                    {/* <Largeblog /> */}
                    {/* <Largeblog publishedAt='2022-06-07' blog_tags={['money' , 'coding']} blog_id='asd45' blog_content={lorem} blog_title="Lorem ipsum dolor sit amet" blog_image={DefaultImage} blog_owner_image={DefaultImage} blog_owner_name="Dolor sit" /> */}

                </div>
            </div>
            <div className="recent px-[10vw] mt-10">
                <div>
                    <div>
                        <h1 className=' text-xl font-bold bg-white w-fit pr-6'>Best blogs</h1>
                        <hr className='border border-gray-300 -mt-4 -z-20 relative'/>
                    </div>
                    <p className='text-sm text-gray-400 mt-4'>Some blogs that were liked by many peope <a href="#" className='text-red-500 text-right float-right'>view all</a></p>
                    <div className="flex justify-between flex-wrap mt-10 ">
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice" author={{ username: "rexisn", profile: DefaultImage }} />
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice" author={{ username: "rexisn", profile: DefaultImage }} />
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice" author={{ username: "rexisn", profile: DefaultImage }} />

                    </div>
                </div>
            </div>
            <div className="about grid grid-cols-2 md:grid-cols-2  sm:grid-cols-1 sms:grid-cols-1  px-[10vw] md:px-[10vw] sms:px-[2vw] ">
                <div className="text py-[30vh]">
                    <h1 className='text-xl font-bold bg-white w-fit pr-6 '>Subscribe to your favourite topic</h1>
                    <p className='text-sm text-gray-400'>All people are not interested in the same things, did you know that? 
                        That's the reason why here you can inform us what your like so that we'll notify you about your interests only
                    </p>
                </div>
                <div>
                    <img src="#" alt="" className='w-screen' />
                </div>

            </div>


        </>


    )

}

export default Landing