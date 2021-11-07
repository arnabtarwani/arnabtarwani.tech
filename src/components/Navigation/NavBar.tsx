import React, { useState } from 'react'
import { ActiveLink } from '~/ui/ActiveLink/ActiveLink'
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi"
import { DarkModeToggle } from '~/ui/DarkModeToggle/DarkModeToggle'


interface NavBarProps {
    darkMode: boolean
    updateTheme: Function
}

const NavBar: React.FC<NavBarProps> = (props) => {

    const { darkMode, updateTheme } = props

    console.log(darkMode);
    

    return (
        <>
            <div className="flex justify-between items-center">
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
                <DarkModeToggle darkMode={darkMode} updateTheme={updateTheme} />
            </div>
        </>
    )
}



export default NavBar
