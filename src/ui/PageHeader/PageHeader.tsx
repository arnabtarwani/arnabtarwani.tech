import clsx from 'clsx'
import React from 'react'

interface PageHeaderProps {
    title?: React.ReactNode
    subHeading?: React.ReactNode
    className?: string
    styleHeading?: string
    styleSubHeading?: string
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {

    const { title, subHeading, className, styleHeading, styleSubHeading } = props

    return (
        <>
            <div className={clsx("flex flex-col justify-start items-start", className)}>
                <span className={clsx("text-4xl font-bold", styleHeading)}>{title}</span>
                <span className={clsx("mt-1 text-base font-normal", styleSubHeading)}>{subHeading}</span>
            </div>
        </>
    )
}
