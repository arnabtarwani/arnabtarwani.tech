import React, { useState } from 'react'

interface HomeProps {
    children?: React.ReactNode
}

const HomeLayout: React.FC<HomeProps> = (props) => {

    const [darkMode, setDarkMode] = useState(false)

    const { children } = props

    return (
        <>
            <div className="flex justify-start px-100 py-10 items-start h-screen w-screen">
                <main className="h-full w-full">{children}</main>
            </div>
        </>
    )
}

export default HomeLayout
