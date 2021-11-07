import React from 'react'
import ComingSoon from '~/layouts/ComingSoon'
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
            <ComingSoon />
        </>
    )
}

export default BlogHome

