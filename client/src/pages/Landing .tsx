import React from 'react'
import DefaultImage from '../assets/default.png'
import Navbar from '../components/Navbar'
import { lorem } from '../assets/lorem'
import Blogonhome from '../components/Blogonhome'
import Footer from '../components/Footer'
import SmallBlog from '../components/SmallBlog'
import store from '../store'


const Landing: React.FC = () => {
    const changeName = () => {
        return {
            type: 'CHANGE_NAME',
            payload: {
                name: 'John Doe'
            }
        }
    }
    // const [title, setTitle] = React.useState('Welcome to my blog')

    // const unsubscribe = store.subscribe(() => {
    //     const title = store.getState().regis.name
    //     setTitle(title)
    //     console.log('State after dispatch: ', store.getState())
    // }
    // )
    return (
        <>
            <Navbar />
            <div className='grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 msm:grid-cols-1  md:px-[5vw] msm:px-[2vw] bg-blue-50   lg:px-[10vw]  '>

                <div className='py-20 lg:py-40  text-gray-500 msm:w-full'>
                    <div className='w-40 h-60  absolute bg-orange-100 backdrop-blur opacity-30  -z-10 blur-lg'></div>
                    <code className='text-sky-500 indent-4'>./blogside ;</code>
                    {/* <h1 className="font-extrabold text-4xl text-black my-[2wh] text-center lg:text-left">Where cool blogs find you</h1> */}
                    <h1 className="font-extrabold text-4xl text-black my-[2wh] text-center lg:text-left">{ store.getState().regis.name}</h1>
                    <p className='text-center md:text-left ' >Come on find the best wordwide blogger <br />
                        And become one of them</p>
                    <p className='mt-[2vh] text-center md:text-left'>Blogside&copy; is a wordwide blogs and articles store where you can find some interesting Blogs that sounds beautiful for you </p>
                    <div className='w-full mt-[4vh]'>
                        <button onClick={() => store.dispatch(changeName())} className='text-white bg-sky-500 rounded-md px-4 py-2 md:scale-10 msm:scal'>Explore blogs</button> <button className='text-sky-500 border border-sky-500 rounded-md px-4 py-2'>Start writing aricles</button>
                    </div>

                </div>
                <div className='hidden  lg:block'>
                    <Blogonhome publishedAt='2022-06-07' blog_tags={['money', 'coding']} blog_id='asd45' blog_content={lorem} blog_title="Lorem ipsum dolor sit amet" blog_image={DefaultImage} blog_owner_image={DefaultImage} blog_owner_name="Dolor sit" />

                </div>
            </div>
            <div className="recent px-[10vw] mt-6">
                <div>
                    <div>
                        <h1 className=' text-xl font-bold bg-white w-fit pr-6'>Best blogs</h1>
                        <hr className=' border-gray-100 -mt-4 -z-20 relative' />
                    </div>
                    <p className='text-sm text-gray-400 mt-4'>Some blogs that were liked by many peope <a href="#" className='text-red-500 text-right float-right'>view all</a></p>
                    <div className="flex justify-between flex-wrap mt-10 ">
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice using an american sauce pan and  rwandan mixer" author={{ username: "rexisn", profile: DefaultImage }} />
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice  using an american sauce pan and  rwandan mixer" author={{ username: "rexisn", profile: DefaultImage }} />
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice  using an american sauce pan and  rwandan mixer" author={{ username: "rexisn", profile: DefaultImage }} />
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice  using an american sauce pan and  rwandan mixer" author={{ username: "rexisn", profile: DefaultImage }} />
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice  using an american sauce pan and  rwandan mixer" author={{ username: "rexisn", profile: DefaultImage }} />
                        <SmallBlog image={DefaultImage} title="How to cook tanzanian rice  using an american sauce pan and  rwandan mixer" author={{ username: "rexisn", profile: DefaultImage }} />

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 msm:grid-cols-1  px-[10vw] md:px-[10vw] sms:px-[2vw] ">
                <div className="text py-[30vh]">
                    <h1 className='text-4xl font-bold bg-white w-fit pr-6 text-center'>You're interested, we notify</h1>
                    <p className='text-sm text-gray-400 my-6 text-center lg:text-left '>All people are not interested in the same things, did you know that?
                        That's the reason why here you can inform us what your like so that we'll notify you about your interests only
                    </p>
                    <div className='w-fit lg:mx-1 mx-auto'>

                        <button className='text-sky-500 border border-sky-500 rounded-md px-4 py-2'>Explore topics</button>
                    </div>
                </div>
                <div>
                    <img src="#" alt="" className='w-screen' />
                </div>

            </div>
            <div className="grid grid-cols-2 2xl:grid-cols-2 md:grid-cols-2 msm:grid-cols-1  px-[10vw] md:px-[10vw] sms:px-[2vw] bg-blue-100 py-[10vh]">
                <div className=' py-[5vh]'>
                    <h1 className='text-xl font-bold  w-fit pr-6 text-center'>Contact us</h1>
                    <p className='text-sm text-gray-400 my-6 text-center lg:text-left '>
                        If you have a problem, wanna ask something or needing some kinda information, contact us by filling in the following form. Our support team will be ready to help you.
                        For development information, see the developer contact at the footer.
                    </p>

                </div>
                <div className="form">
                    <label htmlFor="fullname">Full name</label>
                    <input type="text" className='w-full px-4 py-2 mb-2 text-sm rounded-md' placeholder='John Doe' /> <br />
                    <label htmlFor="fullname">Email address</label>
                    <input type="text" className='w-full px-4 py-2 mb-2 text-sm rounded-md ' placeholder='johndoe@gmail.com' /> <br />
                    <label htmlFor="fullname">Message</label>
                    <textarea className='w-full no-resize h-[100px] px-4 py-2 text-sm rounded-md ' placeholder='Jot your message down here' />
                </div>

            </div>
            <Footer />


        </>


    )

}

export default Landing