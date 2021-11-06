import React, { useState } from 'react'
import { ActiveLink } from '~/ui/ActiveLink/ActiveLink'
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"


interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {

    const [darkMode, setDarkMode] = useState(false)

    return (
        <>
            <div className="flex justify-between items-center w-full">
                <div className="flex justify-start items-center">
                    <ActiveLink className="mr-3" link="/">
                        Home
                    </ActiveLink>
                    <ActiveLink className="mr-3" link="/projects">
                        Projects
                    </ActiveLink>
                    <ActiveLink className="mr-3" link="/blog">
                        Blog
                    </ActiveLink>
                </div>
                <div className="flex justify-end items-center rounded bg-gray-600 p-2">
                    {darkMode ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
                </div>
            </div>
        </>
    )
}



export default NavBar
