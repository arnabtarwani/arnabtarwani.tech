import React from 'react'
import HomeLayout from '~/layouts/HomeLayout'
import AppHomeContent from './AppHomeContent'

interface AppHome {
    chidren?: React.ReactNode
    className?: string
}

const AppHome: React.FC<AppHome> = (props) => {

    const { children, className } = props

    return (
        <>
            <HomeLayout>
                <AppHomeContent />
            </HomeLayout>
        </>
    )
}

export default AppHome
