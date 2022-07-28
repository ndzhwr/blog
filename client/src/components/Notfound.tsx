import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Notfound: React.FC = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <div className='text-center text-sm text-gray-500 mt-[30vh]'>
                <h1 className='text-black text-6xl  font-bold  text-center'>:(</h1>
                <p text-center>Aww! Page not found.</p>
                <p >The url was not found. This may be because the url <br /> which doesn't exist or because of server error.</p> <br />
                <Link to="/" className='text-blue-500 '>Back to homepage </Link >
            </div>
        </div>

    )
}


export default Notfound