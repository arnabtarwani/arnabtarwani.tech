import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export const SocialLinks = () => {
    return (
        <>
            <div className="mt-2 flex justify-start items-center">
                <a href="https://github.com/arnabtarwani" target="_blank" className="w-10"><FaGithub size={20} /></a>
                <a href="https://linkedin.com/in/arnabtarwani" target="_blank" className="w-10"><FaLinkedin size={20} /></a>
                <a href="https://twitter.com/arnabtarwani" target="_blank" className="w-10"><FaTwitter size={20} /></a>
                <a href="https://medium.com/@arnab.tarwani" target="_blank" className="w-10"><FaMedium size={20} /></a>
                <a href="https://www.instagram.com/arnabtarwani/" target="_blank" className="w-10"><FaInstagram className="mr-4" size={20} /></a>
                <a href="mailto:arnab@tarwani.net" target="_blank" className="w-10"><HiOutlineMail size={22} /></a>
            </div>
        </>
    )
}
