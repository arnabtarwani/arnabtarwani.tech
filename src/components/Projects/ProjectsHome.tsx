import React from 'react'
import HomeLayout from '~/layouts/HomeLayout'
import NavBar from '../Navigation/NavBar'


interface ProjectsHomeProps {
    chidren?: React.ReactNode
    className?: string
}

const ProjectsHome: React.FC<ProjectsHomeProps> = (props) => {

    const { children, className } = props

    return (
        <>
            <HomeLayout>

            </HomeLayout>
        </>
    )
}

export default ProjectsHome

