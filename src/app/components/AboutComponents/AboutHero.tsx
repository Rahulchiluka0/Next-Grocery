import Image from 'next/image'
import React from 'react'
import aboutimg from '../../../../public/about-img.png'
import line from '../../../../public/green-v-line.png'
import tick from '../../../../public/about-tick.png'
import cust from '../../../../public/test-2.png'
const AboutHero = () => {
    return (
        <>
            <div className="about flex flex-col lg:flex-row justify-center gap-14 items-center mx-auto">
                <Image src={aboutimg} alt='img' />
                <div className="about-content flex flex-col gap-8 justify-center">
                    <h1 className='text-5xl font-bold'>We believe in pure and
                        organic quality Products</h1>
                    <div className="flex  items-center gap-6">
                        <Image src={line} alt='line' />
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam inta nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.</p>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <h1 className='text-xl font-bold'>Organic Products</h1>
                            <p className='text-gray-500'>There are many variations passages Lorem Ipsum available, but we are the majority have suffered alteration.</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className='text-xl font-bold'>50+ Delivery Partener</h1>
                            <p className='text-gray-500'>There are many variations passages Lorem Ipsum available, but we are the majority have suffered alteration.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>Emergency response time is one hour or less guaranteed.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>Until the eleifend elit is a lot of great facilities.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Image src={tick} alt='img' />
                            <p>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <Image src={cust} alt='img' className='cust-img rounded-full' />
                        <div className="about-user">
                            <h2 className='text-xl font-bold'>Adam Andreson</h2>
                            <p>CEO and Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero