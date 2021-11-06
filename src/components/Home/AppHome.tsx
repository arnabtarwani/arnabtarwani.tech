import React, { Children } from 'react'
import HomeLayout from '~/layouts/HomeLayout'
import NavBar from '../Navigation/NavBar'
import AppContent from './AppContent'

interface AppHome {
    chidren?: React.ReactNode
    className?: string
}

const AppHome: React.FC<AppHome> = (props) => {

    const { children, className } = props

    return (
        <>
            <HomeLayout>
                <NavBar />
                <AppContent />
            </HomeLayout>
        </>
    )
}

export default AppHome
