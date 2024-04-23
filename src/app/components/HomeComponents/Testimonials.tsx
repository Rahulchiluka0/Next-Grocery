import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import quote from "../../../../public/quote.png"
import test1 from "../../../../public/test-1.png"
import test2 from "../../../../public/test-2.png"
import test3 from "../../../../public/test-3.png"

const Testimonials = () => {
    return (
        <div className='testimonial flex flex-col items-center'>
            <div className="testimonial-content pt-24 flex flex-col  md:flex-row justify-between mx-auto">
                <div className="left-test flex flex-col gap-5 items-start md:w-1/2">
                    <p className='text-white text-center rounded-md w-36 px-3 py-1'>Our Testimonial</p>
                    <h1 className='text-4xl font-bold w-full md:w-3/4 text-center md:text-left'>Our customers love what we do.</h1>
                </div>
                <div className="right-test w-full md:w-1/2 mt-8 md:mt-0">
                    <p className='text-center md:text-left'>There are many variations of passages of Lorem available, but majority have suffered in some and form, by injected humor, or randomized words.</p>
                </div>
            </div>
            <div className="testimonial-cards mt-16 md:mt-32 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-7 mx-auto">
                <div className="test-card p-3 flex flex-col gap-7 items-center rounded-xl">
                    <div className="quote-img bg-black rounded-full w-14 h-14 flex justify-center items-center">
                        <Image src={quote} alt='quote' />
                    </div>
                    <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
                    <div className='items-center flex flex-col gap-2'>
                        <Image src={test1} alt='img1' className='rounded-full' />
                        <h4 className='text-xl font-bold'>Vilma Hawkins</h4>
                        <p>Customer</p>
                    </div>
                </div>
                <div className="test-card p-3 flex flex-col gap-7 items-center rounded-xl">
                    <div className="quote-img bg-black rounded-full w-14 h-14 flex justify-center items-center">
                        <Image src={quote} alt='quote' />
                    </div>
                    <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
                    <div className='items-center flex flex-col gap-2'>
                        <Image src={test2} alt='img2' className='rounded-full' />
                        <h4 className='text-xl font-bold'>Tonny Hensley</h4>
                        <p>Customer</p>
                    </div>
                </div>
                <div className="test-card p-3 flex flex-col gap-7 items-center rounded-xl">
                    <div className="quote-img bg-black rounded-full w-14 h-14 flex justify-center items-center">
                        <Image src={quote} alt='quote' />
                    </div>
                    <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
                    <div className='items-center flex flex-col gap-2'>
                        <Image src={test3} alt='img3' className='rounded-full' />
                        <h4 className='text-xl font-bold'>Victoria Roach</h4>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <Link href="/Testimonials"><p className='testimonials-more-btn flex p-3 rounded-md font-bold mb-16'>View More..</p></Link>
        </div>
    )
}

export default Testimonials
