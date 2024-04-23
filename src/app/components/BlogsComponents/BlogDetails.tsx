import Image from 'next/image'
import React from 'react'
import img1 from "../../../../public/blogdetails1.png"
import img2 from "../../../../public/blogmain2.png"
import img3 from "../../../../public/blogmain3.png"
import img4 from "../../../../public/blogimg1.png"
import img5 from "../../../../public/blogimg2.png"
import img6 from "../../../../public/blogimg3.png"
import img7 from "../../../../public/blogimg4.png"
import img8 from "../../../../public/offer-sell.png"
import tick from "../../../../public/about-tick.png"
import facebook from "../../../../public/facebook.png"
import instagram from "../../../../public/instagram.png"
import linkedin from "../../../../public/linkedin.png"
import twitter from "../../../../public/twitter.png"

const BlogDetails = () => {
    return (
        <div className='w-[70%] mx-auto flex mobile:flex-col gap-5 lg:flex-row py-24'>
            <div className="blogs-left lg:w-[65%] pc:w-[75%] flex flex-col gap-5">
                <Image src={img1} alt='img' />
                <h1 className='text-4xl font-bold'>Reasons to Include Organic Fennel in Your Diet</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into is this electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrasetis this  sheets containing Lorem Ipsum passages, and more recently with Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book.</p>
                <div className="flex mobile:flex-col pc:flex-row justify-between items-center">
                    <Image src={img2} alt='img' />
                    <Image src={img3} alt='img' />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
                <h2 className='text-xl font-bold'>Any Test Style  Here</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  what is Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley is of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into is this electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrasetis this  sheets containing Lorem Ipsum passages, and more recently with Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='flex mobile:flex-col md:flex-row gap-3'>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>Emergency response time is one hour.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>We want you to pletely satisfied</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>You deserve to have your in plain English. </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>Our service philosophy  </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>Emergency response time.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>We want you to pletely satisfied</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>You deserve to have your in plain English. </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>Our service philosophy  </p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 md:gap-6 bg-[#dfebdb] px-7 py-4 rounded-md'>
                    <p className=''>Share this Article </p>
                    <ul className='flex gap-2'>
                        <li className='fb-icon rounded-full justify-center items-center flex w-6 h-6'><Image src={facebook} alt='facebook' width={18} height={18} /></li>
                        <li className='rounded-full flex justify-center items-center w-6 h-6 border border-black text-black'><Image src={instagram} alt='instagram' /></li>
                        <li className='rounded-full flex justify-center items-center w-6 h-6 border border-black'><Image src={linkedin} alt='linkedin' /></li>
                        <li className='rounded-full flex justify-center items-center w-6 h-6 border border-black'><Image src={twitter} alt='twitter' /></li>
                    </ul>
                </div>
                <h1 className='font-semibold text-xl'>0 Comments</h1>
                <form action="" className='flex flex-col gap-7 bg-[#dfebdb] rounded-md p-3 md:p-20'>
                    <div className="grid grid-cols-1 gap-7 justify-center">

                        <div className="flex flex-col gap-3">
                            <label htmlFor="firstName">Full Name</label>
                            <input type="text" placeholder='Full Name' className='text-sm border bg-transparent border-[#c6d1c3] py-5 px-4 rounded-md' />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="Phone Number">Phone Number</label>
                            <input type="number" placeholder='Phone Number' className='text-sm border bg-transparent border-[#c6d1c3] py-5 px-4 rounded-md' />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="Email">Email Address</label>
                            <input type="email" placeholder='Enter your email' className='text-sm border bg-transparent border-[#c6d1c3] py-5 px-4 rounded-md' />

                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="textarea">Write a Message ...</label>
                        <textarea name="message" id="" placeholder='Write a Message' className='text-sm border bg-transparent border-[#c6d1c3] py-5 px-4 rounded-md' />
                    </div>
                    <div>
                        <button className='py-4 px-6 rounded-md font-bold text-white bg-[#609E45]'>Submit Now</button>
                    </div>
                </form>
            </div>
            <div className="blogs-right lg:w-[35%] pc:w-[25%] flex flex-col gap-7">
                <div className="blog-category flex flex-col gap-3 bg-[#dfebdb] p-5 px-8 border-[#9ca399] rounded-md">
                    <h1 className='text-xl font-bold text-[#609E45]'>Categories</h1>
                    <hr className=' bg-gray-300 h-[2px]' />
                    <ul className='list-disc text-[#609E45] flex justify-between'>
                        <li>Grocery</li>
                        <p className='text-white bg-[#609E45] rounded-full px-2'>5</p>
                    </ul>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex justify-between'>
                            <p>Organic Vegetables</p>
                            <p className='bg-[#dfebdb] rounded-full px-2'>3</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Fresh Food</p>
                            <p className='bg-[#dfebdb] rounded-full px-2'>3</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Sea Food</p>
                            <p className='bg-[#dfebdb] rounded-full px-2'>7</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Online Store</p>
                            <p className='bg-[#dfebdb] rounded-full px-2'>2</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Fresh Fruits</p>
                            <p className='bg-[#dfebdb] rounded-full px-2'>4</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Online Shopping</p>
                            <p className='bg-[#dfebdb] rounded-full px-2'>1</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Fresh Dairy Products</p>
                            <p className='bg-[#dfebdb] rounded-full px-2'>1</p>
                        </li>
                        <li className='flex justify-between'>
                            <p>Organic</p>
                            <p className='bg-[#dfebdb] rounded-full px-2'>1</p>
                        </li>
                    </ul>
                </div>
                <div className="blog-tags  bg-[#dfebdb] p-5 px-8 border-[#9ca399] rounded-md flex flex-col gap-4">
                    <h1 className='text-xl font-bold text-[#609E45]'>Tags</h1>
                    <hr className=' bg-gray-300 h-[2px]' />
                    <div className="grid grid-rows-3">
                        <p className='px-5 py-2 hover:bg-[#609E45] hover:text-white flex rounded-md duration-300'>Grocery</p>
                        <p className='px-5 py-2 hover:bg-[#609E45] hover:text-white flex rounded-md duration-300'>Fruits</p>
                        <p className='px-5 py-2 hover:bg-[#609E45] hover:text-white flex rounded-md duration-300'>bakery</p>
                        <p className='px-5 py-2 hover:bg-[#609E45] hover:text-white flex rounded-md duration-300'>Online Shopping</p>
                        <p className='px-5 py-2 hover:bg-[#609E45] hover:text-white flex rounded-md duration-300'>Organic</p>
                        <p className='px-5 py-2 hover:bg-[#609E45] hover:text-white flex rounded-md duration-300'>Vegetables</p>
                        <p className='px-5 py-2 hover:bg-[#609E45] hover:text-white flex rounded-md duration-300'>Dairy Items</p>
                        <p className='px-5 py-2 hover:bg-[#609E45] hover:text-white flex rounded-md duration-300'>Food</p>
                    </div>
                </div>
                <div className="blog-related bg-[#dfebdb] p-5 px-8 border-[#9ca399] rounded-md flex flex-col gap-4">
                    <h1 className='text-xl font-bold text-[#609E45]'>Related Blogs</h1>
                    <hr className=' bg-gray-300 h-[2px]' />
                    <div className="flex flex-col gap-5">
                        <div className="flex  gap-5 items-center">
                            <Image src={img4} alt='img' />
                            <p className='font-medium'>Discover a new way to shop for fresh & healthy food!</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Image src={img5} alt='img' />
                            <p className='font-medium'>Healthy Snacks to Get You Through the Work Day</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Image src={img6} alt='img' />
                            <p className='font-medium'>Common Challenges Faced by Online Grocery Businesses</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <Image src={img7} alt='img' />
                            <p className='font-medium'>8 Must Have Tips for Online Grocery Shopping Right Now</p>
                        </div>
                    </div>
                </div>
                <Image src={img8} alt='img' />
            </div>
        </div>
    )
}

export default BlogDetails