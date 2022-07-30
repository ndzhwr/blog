import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHouse, faPenSquare, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'

type currentpageprops = {
    current: "home" | "blogs" | "new" | "profile"
}

const Sidenavbar: React.FC<currentpageprops> = (data: currentpageprops) => {

    return (
        <div className="currentPage h-screen w-[60px] border  px-2 flex justify-between items-center bg-white">
            <div className="links flex flex-col gap-4 ">
                  <Link to="/" className='opacity-25 scale-125' title='Home' ><FontAwesomeIcon icon={faHouse}  color="gray" className=''  /></Link >
                  <Link to='/blogs' className='opacity-100 scale-125' title='Blogs' > <FontAwesomeIcon icon={faNewspaper } color="dodgerblue" /> </Link>
                  <Link to=""  className='opacity-25 scale-125'  title='New Blog'><FontAwesomeIcon icon={faPenSquare} color="gray" /> </Link>
                  <Link to=""  className='opacity-25 scale-125' title='Profile'><FontAwesomeIcon icon={faUser} color="gray" /> </Link>
            </div > 
        </div >

    )
}

export default Sidenavbar 