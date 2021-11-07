import React from 'react'
import { PageHeader } from '~/ui/PageHeader/PageHeader'
import { SocialLinks } from './SocialLinks/SocialLinks'
import HeaderImage from '../../../public/static/images/arnabtarwani.png'
import Image from 'next/image'

const AppHomeContent = () => {

    const subHeading = <>
        <span>Full Stack Developer (Data Platform) at <a href="https://www.exploreshackle.com" target="_blank" className="text-gray-700 dark:text-gray-100 text-base font-bold hover:text-gray-500 dark:hover:text-gray-200">Shackle</a></span>
    </>

    return (
        <>
            <div className="flex justify-center items-start my-10 max-w-full">
                <div className="flex flex-col justify-start mr-10">
                    <div className="flex flex-col justify-start items-start text-center">
                        <PageHeader title="Arnab Tarwani" subHeading={subHeading} />
                    </div>
                    <div className="my-4 text-base">
                        Currently helping build data science teams at a B2B start-up in hotel tech, backed by Frontline Ventures.
                    </div>
                    <div className="mt-5">Catch me somewhere else:</div>
                    <SocialLinks />
                </div>
                <div className="mt-4 flex justify-center m-auto rounded-full items-center">
                    <Image src={HeaderImage} width={150} height={150} className="rounded-full" />
                </div>
            </div>

        </>
    )
}

export default AppHomeContent
