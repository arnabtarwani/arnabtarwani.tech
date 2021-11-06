import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'

interface ActiveLinkProps {
    children: React.ReactNode;
    link: string;
    className?: string;
    tooltipText?: string;
}

export const ActiveLink = React.forwardRef<HTMLAnchorElement, ActiveLinkProps>((props, ref) => {

    const { children, link, className, tooltipText } = props

    const router = useRouter()

    const handleClick = (e: any) => {
        e.preventDefault()
        router.push(link)
    }

    return (
        <>
            <div className="flex flex-col group justify-between">
                <a href={link} onClick={handleClick} className={clsx("flex items-center justify-center px-2.5 py-1.5 rounded dark:hover:text-gray-100 dark:hover:bg-gray-600 hover:bg-gray-600", router.asPath === link ? 'bg-gray-600 dark:bg-gray-600 text-gray-100' : 'bg-transparent', className)}>
                    {children}
                </a>
                {/* {tooltipText && <div className="absolute left-0 items-center hidden ml-14 mt-3 group-hover:flex z-50">
                    <div className="w-3 h-3 -mr-2 rotate-45 bg-gray-700"></div>
                    <span className="relative z-10 w-full text-xs text-center leading-none text-white whitespace-no-wrap bg-gray-800 rounded border border-gray-700 shadow-lg">{tooltipText}</span>
                </div>} */}
            </div>
        </>
    )
})