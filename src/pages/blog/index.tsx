import React from 'react'
import BlogHome from '~/components/Blog/BlogHome'

interface BlogProps {
    children?: React.ReactNode
}

const blog: React.FC<BlogProps> = (props) => {

    const { children } = props

    return (
        <>
            <BlogHome />
        </>
    )
}

export default blog
