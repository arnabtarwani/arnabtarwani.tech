import React from 'react'
import ProjectsHome from '~/components/Projects/ProjectsHome'

interface ProjectsProps {
    children?: React.ReactNode
}

const projects: React.FC<ProjectsProps> = (props) => {

    const { children } = props

    return (
        <>
            <ProjectsHome />
        </>
    )
}

export default projects
