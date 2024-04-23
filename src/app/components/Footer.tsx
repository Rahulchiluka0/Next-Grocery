import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import facebook from "../../../public/facebook.png"
import instagram from "../../../public/instagram.png"
import linkedin from "../../../public/linkedin.png"
import twitter from "../../../public/twitter.png"
import line from "../../../public/line.png"
import callFooter from "../../../public/call-footer.png"
import mailFooter from "../../../public/mail-footer.png"
import whiteLine from "../../../public/white-line.png"
import LogoFooter from "../../../public/Logo-footer.png"
import whitehrline from "../../../public/white-hr-line.png"
import payment from "../../../public/payment.png"

const Footer = () => {
    return (
        <>
        <div className="footer-up">
            <div className="footer-up-content gap-5 flex flex-col items-center mx-auto py-8 md:py-10">
                <h1 className='text-2xl md:text-4xl font-bold text-center'>Subscribe to newsletter</h1>
                <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy tex</p>
                <div className="form flex flex-col md:flex-row gap-5 items-center">
                    <input type='text' placeholder='Your Name' className='border bg-transparent text-sm px-4 py-3 md:py-4 w-full md:w-auto' />
                    <input type='email' placeholder='Enter your email' className='border bg-transparent text-sm px-4 py-3 md:py-4 w-full md:w-auto' />
                    <div>
                        <p className='text-white font-bold p-3 md:p-4 rounded-md'>Subscribe Now</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <div className="footer-top mx-auto flex flex-col md:flex-row items-center justify-between pt-6 md:pt-11">
                <div className="contact-right flex flex-col md:grid-row lg:flex-row md:gap-3 gap-5">
                    <div className="call flex items-center gap-4">
                        <Image src={callFooter} alt='call'  />
                        <div className="call-text">
                            <p className='text-white'>Call Us on</p>
                            <h4 className='text-lg text-white font-semibold'>+44 123 456 7890</h4>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Image src={line} alt='line'  />
                    </div>
                    <div className="mail flex items-center gap-4">
                        <Image src={mailFooter} alt="mail"  />
                        <div className="email-text">
                            <p className='text-white'>Email Us</p>
                            <h4 className='text-base text-white font-semibold'>contact@troothemes.com</h4>
                        </div>
                    </div>
                </div>
                <Image src={whiteLine} alt='line' className="hidden md:block" />
                <div className='flex gap-2 md:gap-6'>
                    <p className='text-white hidden md:block'>Follow Us On ------- </p>
                    <ul className='flex gap-2'>
                        <li className='fb-icon rounded-full justify-center items-center flex w-6 h-6'><Image src={facebook} alt='facebook'  /></li>
                        <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={instagram} alt='instagram'  /></li>
                        <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={linkedin} alt='linkedin'  /></li>
                        <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={twitter} alt='twitter'  /></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom mx-auto">
                <hr className='bg-white opacity-20 mt-8 mb-8' />
                <div className="footer-bottom-content grid md:flex-row lg:grid-cols-2 justify-between gap-5 md:gap-10 ">
                    <div className="footer-left flex flex-col w-full md:w-80 gap-3">
                        <Image src={LogoFooter} alt='logo'  />
                        <p className='text-white text-sm md:text-base font-normal'>Lorem Ipsum is simply  it is dummy rummy dummy text of the since it is printing and typesetting’s the and it industry's standard dummy text ever since the 150.</p>
                        <p className='text-white mt-2'>Address</p>
                        <h3 className='text-white -mt-2 text-sm md:text-xl font-bold'>4516 School Street, Danbury, CT, Canada, 458068</h3>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5  '>
                        <div className="footer-right flex flex-col gap-3">
                            <h2 className='text-sm md:text-2xl text-white font-bold'>Navigation</h2>
                            <Image src={whitehrline} alt='line'  />
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Homepage</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">About Us</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Our Products</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Our Testimonial</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Our Blogs </Link>
                        </div>
                        <div className="footer-right flex flex-col gap-3">
                            <h2 className='text-sm md:text-2xl text-white font-bold'>Customer Support</h2>
                            <Image src={whitehrline} alt='line'  />
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Order</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Track Your Order</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Help & Support</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Shipping & Delivery</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Contact Us </Link>
                        </div>
                        <div className="footer-right flex flex-col gap-3">
                            <h2 className='text-sm md:text-2xl text-white font-bold'>Categories</h2>
                            <Image src={whitehrline} alt='line'  />
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Fresh Vegetable</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Fresh Fruits</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Fresh Beverage</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Fresh Bakery Items</Link>
                            <Link href="#" className="text-white text-sm md:text-base font-normal">Natural Drinks </Link>
                        </div>
                    </div>
                </div>
                <hr className='bg-white opacity-20 mt-8 mb-4' />
                <div className="footer-copyright flex flex-col md:flex-row justify-between">
                    <p className='text-white text-sm md:text-base'>Copyright © 2023. Themes. All rights reserved.
                    </p>
                    <Image src={payment} alt='payment'  />
                    <span className='block md:inline'> Privacy Policy  /  Terms & Conditions</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;
