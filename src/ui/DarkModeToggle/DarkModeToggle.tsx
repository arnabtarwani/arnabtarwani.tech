import React from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

interface DarkModeToggleProps {
    darkMode: boolean
    updateTheme: Function
}


export const DarkModeToggle: React.FC<DarkModeToggleProps> = (props) => {

    const { darkMode = true, updateTheme } = props

    const toggleDarkMode = () => {
        localStorage.setItem('darkMode', (!darkMode).toString())
        updateTheme(!darkMode)
    }

    return (
        <>
            <button onClick={() => toggleDarkMode()} className="flex focus:outline-none dark:focus:outline-none focus:ring-gray-500 focus:ring-0 dark:focus:ring-1  dark:focus:ring-gray-600 justify-end items-center rounded bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-300 cursor-pointer p-2">
                {darkMode ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
            </button>
        </>
    )
}
