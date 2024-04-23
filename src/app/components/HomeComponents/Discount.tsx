import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Discount = () => {
  return (
    <div className='discount flex justify-between items-center'>
        <div className='mobile'>
            <Image src="/mobile.png" alt='mobile' width={529} height={529}/>
        </div>
        <div className='discount-content flex flex-col gap-6 items-center'>
            <p className='text-white'>Awesome Products</p>
            <h1 className='text-white text-4xl font-bold'>Get Up to 15% Off Vegetables</h1>
            <p className='text-white text-2xl'>We supply hight quality organic product</p>
            <div className="disc-btns grid grid-rows-1 md:grid-cols-2  justify-center gap-5">
                <Link href="#" className='text-green-700 font-semibold bg-white py-3 px-4 rounded-md'>Shop Now</Link>
                <Link href="#" className='text-white font-semibold py-3 px-4 rounded-md border border-white'>Contact Us</Link>
            </div>
        </div>
        <div className="bag">
            <Image src="/veg-bag.png" alt='bag' width={552} height={552}/>
        </div>
    </div>
  )
}

export default Discount