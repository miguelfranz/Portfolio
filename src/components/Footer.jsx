import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaBehance} from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-gray-900 px-4 md:px-16 lg:px-28 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h2 className='text-lg font-bold mb-4 text-white'> Fun Facts About Me </h2>
                    <p className='text-gray-400'>
                        When I'm not coding or designing, you'll probably find me on the football field, chasing sunsets at the beach, exploring nature, or listening to music; it’s my favorite way to recharge and find inspiration.
                    </p>
                </div>
                <div className=''>
                    <h2 className='text-lg font-bold mb-4 text-white'> Quick Links </h2>
                    <ul>

                        <li>  <a href="#education" className='hover:underline text-gray-400'>Education</a></li>
                        <li> <a href="#certificates" className='hover:underline text-gray-400'>Certificates</a></li>
                        <li> <a href="#skills" className='hover:underline text-gray-400'>Skills</a></li>
                        <li> <a href="projects" className='hover:underline text-gray-400'>Projects</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg font-bold mb-4 text-white'> Follow Me </h2>
                    <ul className='flex space-x-4'>

                        <li> <FaFacebookF className='text-blue-500'/>{' '} <a href="https://www.facebook.com/selfmademiggy/" className='hover:underline text-gray-400'>Facebook</a></li>
                        <li> <FaInstagram className='text-pink-500'/> <a href="https://www.instagram.com/selfmademiggy/" className='hover:underline text-gray-400'>Instagram</a></li>
                        <li> <FaLinkedin className='text-blue-900'/><a href="https://www.linkedin.com/in/carlos-miguel-francisco-01a36a324/" className='hover:underline text-gray-400'>LinkedIn</a></li>
                        <li> <FaBehance className='text-sky-500'/><a href="https://www.behance.net/dkndonuts" className='hover:underline text-gray-400'>Behance</a></li>

                    </ul>
                </div>

            </div>
            <div className='border-t border-gray-600 pt-6 text-gray-400 text-center mt-6 '>
                <p>© 2025 Code with Miggy. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer