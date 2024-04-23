import Image from 'next/image'
import React from 'react'
import img from "../../../public/comingsoon.png"
import logo from "../../../public/troologo.png"
const page = () => {
    return (
        <div className='coming-soon'>
            <div className="coming-content flex mobile:flex-col md:flex-row items-center justify-between mx-auto py-24">
                <div className="coming-left flex flex-col items-start gap-6">
                    <Image src={logo} alt='logo' />
                    <p className='comingbtn text-white rounded-md px-5 py-1'>Coming Soon</p>
                    <h1 className='text-4xl font-bold'>All Good Things Come to <br /> Those who Wait...</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random <br /> text. It has roots in a piece of classical Latin literature from 45 <br /> BC Lorem Ipsum.</p>
                    <h6 className='text-sm'>Notify Me </h6>
                    <div className="form flex gap-7 items-center">
                        <input type='email' placeholder='Enter your email' className='border bg-transparent text-sm px-4 py-4 ' />
                        <div>
                            <p className='text-white font-bold p-4 rounded-md'>Submit</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-5">
                        <div className="contact-card py-2 rounded-md flex items-center gap-4">
                            <Image src="/contact-call.png" alt='call' width={49} height={49} />
                            <div className="flex flex-col">
                                <p className='text-black'>Call Us on</p>
                                <h4 className='text-lg text-black font-bold'>+44 123 456 7890</h4>
                            </div>
                        </div>
                        <div className="contact-card py-2 rounded-md flex items-center gap-4">
                            <Image src="/contact-mail.png" alt="mail" width={49} height={49} className='text-green-600' />
                            <div className="flex flex-col">
                                <p className='text-black'>Email Us</p>
                                <h4 className='text-lg text-black font-bold'>contact@troothemes.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 md:gap-6'>
                        <p className='text-black hidden md:block'>Follow Us On ------- </p>
                        <ul className='flex gap-2'>
                            <li className='fb-icon rounded-full justify-center items-center flex w-6 h-6'><Image src="/facebook.png" alt='facebook' width={18} height={18} /></li>
                            <li className='rounded-full flex justify-center items-center w-6 h-6 border border-black'><Image src="/black-instagram.png" alt='instagram' width={18} height={18} /></li>
                            <li className='rounded-full flex justify-center items-center w-6 h-6 border border-black'><Image src="/black-linkedin.png" alt='linkedin' width={19} height={19} /></li>
                            <li className='rounded-full flex justify-center items-center w-6 h-6 border border-black'><Image src="/black-twitter.png" alt='twitter' width={19} height={19} /></li>
                        </ul>
                    </div>
                </div>
                <div className="coming-right">
                    <Image src={img} alt='img' />
                </div>
            </div>

        </div>
    )
}

export default page