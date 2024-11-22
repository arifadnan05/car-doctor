import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Navbar = () => {

    return (
        <div className='bg-base-100'>
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start">
                    <Link className='btn btn-ghost' href={'/'}>
                        <Image alt='logo' src='/assets/logo.svg' height={40} width={80} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className='flex space-x-6'>
                            <Link href={'/'}><li className='font-semibold hover:text-primary duration-300'>Home</li></Link>
                            <Link href={'/about'}><li className='font-semibold hover:text-primary duration-300'>About</li></Link>
                            <Link href={'/services'}><li className='font-semibold hover:text-primary duration-300'>Services</li></Link>
                            <Link href={'/blog'}><li className='font-semibold hover:text-primary duration-300'>Blog</li></Link>
                            <Link href={'/contact'}><li className='font-semibold hover:text-primary duration-300'>Contact</li></Link>
                        </div>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-8 mr-6'>
                        <span className='text-xl'><FiShoppingCart /></span>
                        <span className='text-xl'><FaMagnifyingGlass /></span>
                    </div>

                    <a className="btn btn-outline border-primary hover:bg-primary text-primary">Appointment</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
