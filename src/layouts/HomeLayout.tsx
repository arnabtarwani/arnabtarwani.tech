import React, { useEffect, useState } from 'react'
import NavBar from '~/components/Navigation/NavBar'

interface HomeProps {
    children?: React.ReactNode
}

const HomeLayout: React.FC<HomeProps> = (props) => {
    const { children } = props

    const [darkMode, setDarkMode] = useState<boolean>(true)

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode')

        if (!isDarkMode) {
            localStorage.setItem('darkMode', (!darkMode).toString())
        } else {
            setDarkMode(isDarkMode === 'true')
            document.documentElement.className = isDarkMode === 'true' ? 'dark' : ''
        }
    })

    const updateTheme = (isDarkMode: boolean) => {
        document.documentElement.className = isDarkMode ? 'dark' : ''
        setDarkMode(isDarkMode)
    }

    return (
        <>
            <div className="flex justify-start px-10 py-10 mx-auto bg-gray-50 dark:bg-gray-900 items-start h-screen w-128 overflow-auto">
                <div className="h-full w-full">
                    <NavBar darkMode={darkMode} updateTheme={updateTheme} />
                    <main className="">{children}</main>
                </div>
            </div>
        </>
    )
}

export default HomeLayout
