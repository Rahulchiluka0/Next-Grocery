"use client"
import Image from 'next/image'
import React from 'react'

import logoImages from "../../data/data"
const Downloads = () => {
    return (
        <>
            <div className='download flex justify-around items-center rounded-3xl'>
                <div className="down-left flex flex-col gap-8">
                    <h1 className='text-4xl font-medium text-white'>Shopping for vegetables & <br />
                        fruit is easier with <br />
                        <span className='font-black'>TRoo Grocery App</span></h1>
                    <p className='text-2xl text-white'>Available on Both Android and ios</p>
                    <Image src="/appicons.png" alt='icons' width={271} height={43} />
                </div>
                <div className="down-right">
                    <Image src="/download-mobile.png" alt='mobile' width={382} height={384} />
                </div>
            </div>
            <div className="blog-down pb-24 mx-auto mt-28 flex justify-between">
                <div className="blog-left flex flex-col justify-center gap-5">
                    <h6 className='rounded-md px-2 text-white w-40'>Our Trusted Partner</h6>
                    <h1 className='text-4xl font-bold'>We have 523+ more <br />trusted partner</h1>
                    <p>There are many variations of passages of Lorem <br />Ipsum available, but the majority.</p>
                    <p className='partner text-white font-semibold p-3 rounded-md w-44 text-center'>Become a Partner</p>
                </div>
                <div className="blog-right">
                    <div className=" m-auto grid grid-cols-4 gap-12">
                        {logoImages.logoImages.map((item)=>(
                            <Image src={item} alt='logo' width={170} height={75} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Downloads