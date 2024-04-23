import React from 'react'
import Banner from '../components/Banner'
import Image from 'next/image'
import img from "../../../public/Thankyou.png"

const page = () => {
    return (
        <>
            <Banner title='Thank You' heading='Thank You Page' subheading='' />
            <div className=' thankyou flex flex-col  gap-5 items-center py-24 mobile:px-7 text-center'>
                <Image src={img} alt='ty' />
                <h1 className='text-2xl font-semibold'>We Have Received Your Payment Successfully. </h1>
                <p>It is a long established fact that a reader will be distracted b <br />
                    the readable content of a page when looking at its layout.</p>
                <button className='px-6 py-3 text-white rounded-md'>Continue Shopping</button>
            </div>
        </>
    )
}

export default page