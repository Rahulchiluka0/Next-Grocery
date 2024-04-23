import React from 'react'
import Banner from '../components/Banner'
import Image from 'next/image'
import blogs from "../../app/data/data"
import Link from 'next/link'
const page = () => {
    return (
        <div>
            <Banner title='Our Blogs' heading='Read our news and blogs' subheading=''/>
            <div className="blogs mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 my-16">
                {blogs.blogs.map((item) => (
                    <div className="blog-card border rounded-md flex flex-col  p-2 gap-5">
                        <Link href="/Blogs/BlogDetails">
                            <div className='blog-img relative'>
                                <Image src={item.image} alt='img1' width={389} height={273} cursor-pointer />
                                <div className="arrow w-9  rounded-full p-2 absolute top-32 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                                    <Image src="/arrow-right.png" alt='arrow' width={24} height={24} />
                                </div>
                            </div>
                        </Link>
                        <p className='text-xl font-bold'>{item.name}</p>
                        <p className='text-gray-500'>Lorem ipsum dolor sit nad amet, consectetur
                            adipiscing elit.</p>
                        <div className='flex justify-center'>
                            <hr className='bg-gray-400 w-80 ' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src="/user-icon.png" alt='user' width={20} height={20} />
                            <p className='text-gray-500'>Johnson doe</p>
                            <hr className='w-1 bg-gray-400 h-4' />
                            <Image src="/clock-icon.png" alt='clock' width={20} height={20} />
                            <p className='text-gray-500'>08 Jan, 2023</p>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default page