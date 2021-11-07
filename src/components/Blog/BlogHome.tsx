import React from 'react'
import HomeLayout from '~/layouts/HomeLayout'
import NavBar from '../Navigation/NavBar'


interface BlogHomeProps {
    chidren?: React.ReactNode
    className?: string
}

const BlogHome: React.FC<BlogHomeProps> = (props) => {

    const { children, className } = props

    return (
        <>
            <HomeLayout>
                
            </HomeLayout>
        </>
    )
}

export default BlogHome

