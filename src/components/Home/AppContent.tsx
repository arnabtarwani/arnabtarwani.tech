import React from 'react'
import { PageHeader } from '~/ui/PageHeader/PageHeader'

const AppContent = () => {

    const subHeading = <>
        <span>Full Stack Developer at <a href="www.exploreshackle.com" target="_blank" className="text-gray-300 text-base font-bold hover:text-gray-200">Shackle</a></span>
    </>

    return (
        <>
            <div className="my-10">
                <PageHeader title="Arnab Tarwani" subHeading={subHeading} />
            </div>
        </>
    )
}

export default AppContent
