import React from 'react'
import BlogHome from '~/components/Blog/BlogHome'

interface ProjectsProps {
    children?: React.ReactNode
}

const projects: React.FC<ProjectsProps> = (props) => {

    const { children } = props

    return (
        <>
            <BlogHome />
        </>
    )
}

export default projects
