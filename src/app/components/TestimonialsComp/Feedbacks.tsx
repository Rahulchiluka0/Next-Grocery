import Image from 'next/image'
import React from 'react'
import testimonials from "../../data/data"
const Feedbacks = () => {
    return (
        <div className="testimonial-cards mt-16 md:mt-32 mb-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-between gap-7 mx-auto">

            {testimonials.testimonials.map((item) => (
                <div className="test-card p-3 flex flex-col gap-7 items-center rounded-xl">
                    <div className="quote-img bg-black rounded-full w-14 h-14 flex justify-center mt-5 items-center">
                        <Image src="/quote.png" alt='quote' width={35} height={21} />
                    </div>
                    <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
                    <div className='items-center flex flex-col gap-2'>
                        <Image src={item.image} alt='img1' width={81} height={81} className='rounded-full' />
                        <h4 className='text-xl font-bold'>{item.name}</h4>
                        <p>Customer</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Feedbacks