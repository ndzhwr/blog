import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHouse, faPenSquare, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'

type currentpageprops = {
    current: "home" | "blogs" | "new" | "profile"
}

const Sidenavbar: React.FC<currentpageprops> = (data: currentpageprops) => {

    return (
        <div className="currentPage h-screen sticky  top-0 border  px-4 flex justify-between items-center bg-white">
            <div className="links flex flex-col gap-4 ">
                  <Link to="/" className='scale-125' title='Home' ><FontAwesomeIcon icon={faHouse}   color={data.current == "home" ? "dodgerblue" : "#c4c4c4"} className=''  /></Link >
                  <Link to='/blogs' className=' scale-125' title='Blogs' > <FontAwesomeIcon icon={faNewspaper } color={data.current == "blogs" ? "dodgerblue" : "#c4c4c4"} /> </Link>
                  <Link to="/new"  className=' scale-125'  title='New Blog'><FontAwesomeIcon icon={faPenSquare} color={data.current == "new" ? "dodgerblue" : "#c4c4c4"} /> </Link>
                  <Link to="/profile"  className=' scale-125' title='Profile'><FontAwesomeIcon icon={faUser}  color={data.current == "profile" ? "dodgerblue" : "#c4c4c4"} /> </Link>
            </div > 
        </div >

    )
}

export default Sidenavbar 