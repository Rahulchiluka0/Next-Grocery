import Image from 'next/image'
import React from 'react'
import img from "../../../public/loginimg.png"
import Link from 'next/link'
const page = () => {
    return (
        <div className='login'>
            <div className=" logincontent flex mobile:flex-col lg:flex-row items-center justify-between mx-auto bg-white">
                <Image src={img} alt='img' />
                <div className='flex flex-col gap-4 w-full px-14'>
                    <h1 className='text-2xl font-bold'>Welcome back</h1>
                    <p>A whole new online shopping journey start right here.</p>
                    <hr className='w-12 h-1' />
                    <form className='loginform flex flex-col gap-4 bg-white'>
                        <div className="loginmail flex flex-col gap-3">
                            <label htmlFor="Email Address">Email Address</label>
                            <input className='px-4 py-5 rounded-md' type="email" placeholder='Email Address' />
                        </div>
                        <div className="loginpass flex flex-col gap-3">
                            <label htmlFor="Password">Password</label>
                            <input className='px-4 py-5 rounded-md' type="text" placeholder='Password' />
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="Remamber me">Remember me</label>
                            </div>
                            <Link href="#">Forgot password</Link>
                        </div>
                    </form>
                    <button className='text-white py-3 rounded-md font-semibold'>Login Now</button>
                </div>
            </div>
        </div>
    )
}

export default page