import Image from 'next/image'
import React from 'react'
import logoImages from "../../data/data"
import Link from 'next/link'

const Blogs = () => {
    return (
        <div className='blog'>
            <div className="blog-top mx-auto pt-20 flex flex-col gap-10 items-center">
                <h6 className='rounded-md px-2 text-white'>Latest News & Blogs</h6>
                <h1 className='text-4xl font-bold text-center'>Most Popular News <br /> & Top Blogs</h1>
                <div className="blog-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="blog-card border rounded-md flex flex-col p-2 gap-5 w-full">
                        <div className='blog-img relative'>
                            <Image src="/blog1.png" alt='img1' width={389} height={273} cursor-pointer />
                            <div className="arrow w-9 mobile2:-mt-16 mobile:-mt-16  rounded-full p-2 absolute top-32 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                                <Image src="/arrow-right.png" alt='arrow' width={24} height={24} />
                            </div>
                        </div>
                        <p className='text-xl font-bold'>Reasons to Include Organic Fennel
                            in Your Diet</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit nad amet, consectetur
                            adipiscing elit.</p>
                        <div className='flex justify-center'>
                            <hr className='bg-gray-400 w-80 ' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src="/user-icon.png" alt='user' width={20} height={20} />
                            <p>Johnson doe</p>
                            <hr className='w-1 bg-gray-400 h-4' />
                            <Image src="/clock-icon.png" alt='clock' width={20} height={20} />
                            <p>08 Jan, 2023</p>
                        </div>
                    </div>
                    <div className="blog-card border rounded-md flex flex-col p-2 gap-5">
                        <div className='blog-img relative'>
                            <Image src="/blog2.png" alt='img1' width={389} height={273} cursor-pointer />
                            <div className="arrow w-9 mobile2:-mt-16 mobile:-mt-16 rounded-full p-2 absolute top-32 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                                <Image src="/arrow-right.png" alt='arrow' width={24} height={24} />
                            </div>
                        </div>
                        <p className='text-xl font-bold'>Healthy Snacks to Get You Through
                            the Work Day</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit nad amet, consectetur
                            adipiscing elit.</p>
                        <div className='flex justify-center'>
                            <hr className='bg-gray-400 w-80 ' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src="/user-icon.png" alt='user' width={20} height={20} />
                            <p>Johnson doe</p>
                            <hr className='w-1 bg-gray-400 h-4' />
                            <Image src="/clock-icon.png" alt='clock' width={20} height={20} />
                            <p>08 Jan, 2023</p>
                        </div>
                    </div>
                    <div className="blog-card border rounded-md flex flex-col p-2 gap-5">
                        <div className='blog-img relative'>
                            <Image src="/blog3.png" alt='img1' width={389} height={273} cursor-pointer />
                            <div className="arrow w-9 mobile2:-mt-16 mobile:-mt-16 rounded-full p-2 absolute top-32 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                                <Image src="/arrow-right.png" alt='arrow' width={24} height={24} />
                            </div>
                        </div>
                        <p className='text-xl font-bold'>Discover a new way to shop for
                            fresh & healthy food!</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit nad amet, consectetur
                            adipiscing elit.</p>
                        <div className='flex justify-center'>
                            <hr className='bg-gray-400 w-80 ' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src="/user-icon.png" alt='user' width={20} height={20} />
                            <p>Johnson doe</p>
                            <hr className='w-1 bg-gray-400 h-4' />
                            <Image src="/clock-icon.png" alt='clock' width={20} height={20} />
                            <p>08 Jan, 2023</p>
                        </div>
                    </div>
                </div>
                <Link href="/Blogs"><p className='view-blogs font-bold p-3 rounded-md'>View All Blogs</p></Link>
            </div>
            <div className="blog-down pb-24 mx-auto mt-28 grid grid-cols-1 gap-10 lg:grid-cols-2 justify-between items-center">
                <div className="blog-left flex flex-col justify-center gap-5 text-center md:text-left ">
                    <h6 className='rounded-md px-2 text-white w-40'>Our Trusted Partner</h6>
                    <h1 className='text-4xl font-bold'>We have 523+ more trusted partner</h1>
                    <p>There are many variations of passages of Lorem <br />Ipsum available, but the majority.</p>
                    <p className='partner text-white font-semibold p-3 rounded-md w-44 text-center'>Become a Partner</p>
                </div>
                <div className="blog-right">
                    <div className="m-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                        {logoImages.logoImages.map((item, index) => (
                            <Image key={index} src={item} alt='logo' width={170} height={75} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs