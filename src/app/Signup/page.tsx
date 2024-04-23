import Image from 'next/image'
import React from 'react'
import img from "../../../public/signupbg.png"
import Link from 'next/link'
const page = () => {
    return (
        <div className='login'>
            <div className=" logincontent flex mobile:flex-col lg:flex-row items-center justify-between  mx-auto bg-white">
                <Image src={img} alt='img' />
                <div className='flex flex-col gap-4 w-full px-14'>
                    <h1 className='text-2xl font-bold'>Welcome to TRoo Grocery</h1>
                    <p>Create your account by filling the form below</p>
                    <hr className='w-12 h-1' />
                    <form className='loginform flex flex-col gap-4 bg-white '>
                        <div className="loginmail flex flex-col gap-3">
                            <label htmlFor="fullname">Full Name</label>
                            <input className='px-4 py-5 rounded-md' type="text" placeholder='Full Name' />
                        </div>
                        <div className="loginmail flex flex-col gap-3">
                            <label htmlFor="Email Address">Email</label>
                            <input className='px-4 py-5 rounded-md' type="email" placeholder='Email' />
                        </div>
                        <div className="loginpass flex flex-col gap-3">
                            <label htmlFor="Password">Password</label>
                            <input className='px-4 py-5 rounded-md' type="text" placeholder='Password' />
                        </div>
                        <div className="loginpass flex flex-col gap-3">
                            <label htmlFor="Confirm Password">Confirm Password</label>
                            <input className='px-4 py-5 rounded-md' type="text" placeholder='Confirm Password' />
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="iAgree">I agree to the terms and conditions</label>
                            </div>
                        </div>
                    </form>
                    <button className='text-white py-3 rounded-md font-semibold'>Sign Up Now</button>
                </div>
            </div>
        </div>
    )
}

export default page