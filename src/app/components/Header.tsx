import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import facebook from "../../../public/facebook.png"
import instagram from "../../../public/instagram.png"
import linkedin from "../../../public/linkedin.png"
import twitter from "../../../public/twitter.png"
import Logo from "../../../public/Logo.png"
import call from "../../../public/Call.png"
import email from "../../../public/email.png"
import line from "../../../public/line.png"
import FavoriteIcon from "../../../public/Favorite-Icon.png"
import ShoppingCart from "../../../public/Shopping-Cart.png"

const Header = () => {
    return (
        <div className="header-top">
            <header className='header w-full p-3'>
                <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
                    <div className="flex flex-col md:flex-row  md:gap-6 items-center ">
                        <p className='text-white'>Welcome to the best TRoo Organic Grocery Store</p>
                        <p className='text-white hidden md:block'><strong>50%</strong> Clearance Sale</p>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <p className='text-white hidden md:block'>Follow Us On ------- </p>
                        <ul className='flex gap-2'>
                            <li className='fb-icon rounded-full justify-center items-center flex w-6 h-6'><Image src={facebook} alt='facebook' width={18} height={18} /></li>
                            <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={instagram} alt='instagram' /></li>
                            <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={linkedin} alt='linkedin'  /></li>
                            <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={twitter} alt='twitter'  /></li>
                        </ul>
                    </div>
                </div>
            </header>
            <section className='w-11/12 mx-auto flex flex-col gap-3 lg:flex-row lg: md:flex-col justify-between items-center mt-3 mb-3 md:mb-7'>
                <div className='flex justify-center md:justify-start'>
                    <div>
                        <Image src={Logo} alt='Logo' />
                    </div>
                </div>
                <div className="search-bar border mx-auto md:mx-8 flex items-center pr-1 px-5 gap-5 md:gap-40 lg:gap-0 pc:gap-28">
                    <input type='text' placeholder='Search Your Products' className='border-none bg-transparent text-sm px-4 py-2 md:py-4 w-full md:w-auto lg:px-1' />
                    <button className='w-20 h-10 rounded-md text-white'>
                        Search
                    </button>
                </div>
                <div className="contact-right grid md:grid-cols-2 lg:gap-1 gap-5 ">
                    <div className="call flex items-center gap-4">
                        <Image src={call} alt='call'  />
                        <div className="call-text">
                            <p className='text-lg font-semibold lg:text-sm'>Call Us on</p>
                            <h4 className='text-lg font-semibold lg:text-sm'>+44 123 456 7890</h4>
                        </div>
                    </div>
                    {/* <div>
                        <Image src={line} alt='line'  />
                    </div> */}
                    <div className="mail flex items-center gap-4">
                        <Image src={email} alt="mail" />
                        <div className="email-text">
                            <p className='text-lg font-semibold lg:text-sm'>Email Us</p>
                            <h4 className='text-lg font-semibold lg:text-sm'>info@troothemes.com</h4>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='w-11/12 mx-auto' />
            <section className='navbar w-11/12 mt-3 mx-auto flex flex-col gap-3  items-center  lg:flex-row justify-between pb-4'>
                <ul className='flex flex-col md:flex-row gap-5 md:gap-12 items-center'>
                    <Link href="/Homepage"><li>Home</li></Link>
                    <Link href="/About"><li>About Us</li></Link>
                    <Link href="/Shop"><li>Shop</li></Link>
                    <Link href="#"><li>Products</li></Link>
                    <Link href="#"><li>Pages</li></Link>
                    <Link href="/Blogs"><li>Blogs</li></Link>
                    <Link href="/ContactUs"><li>Contact Us</li></Link>
                </ul>
                <div className="nav-right flex gap-4 items-center ">
                    <Link href="#"><p>My Account</p></Link>
                    <Link href="#"><Image src={FavoriteIcon} alt='heart' /></Link>
                    <Link href="#"><Image src={ShoppingCart} alt='Shopping-Cart' /></Link>
                </div>
            </section>
        </div>
    )
}

export default Header;
