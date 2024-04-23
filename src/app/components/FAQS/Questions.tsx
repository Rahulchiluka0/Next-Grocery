"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import rect from "../../../../public/faq-rect.png"
import Link from 'next/link';
interface quesProps {
    index: number;
}

const Questions = () => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const handleClick = ({ index }: quesProps) => {
        const isActive = activeIndexes.includes(index);
        if (isActive) {
            setActiveIndexes(activeIndexes.filter((item) => item !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    return (
        <div className="questions mx-auto py-24 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                <div className="flex flex-col">
                    <div className="flex flex-col gap-11 mb-10">
                        <h1 className='text-xl font-bold py-3'>Pre-Sale Questions</h1>
                        <div className="flex flex-col gap-5">
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(0) ? 'active' : ''}`} onClick={() => handleClick({ index: 0 })}>
                                    How do I Claim a Free Coupon?
                                        <svg className="-mr-1 h-5 w-5 text-black " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                   
                                </p>
                                {activeIndexes.includes(0) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(1) ? 'active' : ''}`} onClick={() => handleClick({ index: 1 })}>
                                    How do I Make a regular Table Booking?

                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(1) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(2) ? 'active' : ''}`} onClick={() => handleClick({ index: 2 })}>
                                    How can I be certain my booking's been received?                        <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(2) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(3) ? 'active' : ''}`} onClick={() => handleClick({ index: 3 })}>
                                    What happens if I'm running late?                        <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(3) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(4) ? 'active' : ''}`} onClick={() => handleClick({ index: 4 })}>
                                    Why do you need my email address?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(4) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-11 mb-10">
                        <h1 className='text-xl font-bold py-3'>Pricing Questions</h1>
                        <div className="flex flex-col gap-5">
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(5) ? 'active' : ''}`} onClick={() => handleClick({ index: 5 })}>
                                    How do I Claim a Free Coupon?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(5) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(6) ? 'active' : ''}`} onClick={() => handleClick({ index: 6 })}>
                                    How do I Make a regular Table Booking?

                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(6) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(7) ? 'active' : ''}`} onClick={() => handleClick({ index: 7 })}>
                                    How can I be certain my booking's been received?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(7) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(8) ? 'active' : ''}`} onClick={() => handleClick({ index: 8 })}>
                                    What happens if I'm running late?                        <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(8) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(9) ? 'active' : ''}`} onClick={() => handleClick({ index: 9 })}>
                                    Why do you need my email address?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(9) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-11 mb-10">
                        <h1 className='text-xl font-bold py-3'>Delivery Questions</h1>
                        <div className="flex flex-col gap-5">
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(10) ? 'active' : ''}`} onClick={() => handleClick({ index: 10 })}>
                                    How do I Claim a Free Coupon?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(10) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(11) ? 'active' : ''}`} onClick={() => handleClick({ index: 11 })}>
                                    How do I Make a regular Table Booking?

                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(11) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(12) ? 'active' : ''}`} onClick={() => handleClick({ index: 12 })}>
                                    How can I be certain my booking's been received?                        <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(12) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(13) ? 'active' : ''}`} onClick={() => handleClick({ index: 13 })}>
                                    What happens if I'm running late?                        <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(13) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(14) ? 'active' : ''}`} onClick={() => handleClick({ index: 14 })}>
                                    Why do you need my email address?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(14) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-11 mb-10">
                        <h1 className='text-xl font-bold py-3'>My Account Questions</h1>
                        <div className="flex flex-col gap-5">
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(15) ? 'active' : ''}`} onClick={() => handleClick({ index: 15 })}>
                                    How do I Claim a Free Coupon?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(15) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(16) ? 'active' : ''}`} onClick={() => handleClick({ index: 16 })}>
                                    How do I Make a regular Table Booking?

                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(16) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(17) ? 'active' : ''}`} onClick={() => handleClick({ index: 17 })}>
                                    How can I be certain my booking's been received?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(17) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(18) ? 'active' : ''}`} onClick={() => handleClick({ index: 18 })}>
                                    What happens if I'm running late?                        <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(18) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                            <div className="question flex flex-col">
                                <p className={` border-orange-200 p-5 border rounded-md flex w-full justify-between items-center ${activeIndexes.includes(19) ? 'active' : ''}`} onClick={() => handleClick({ index: 19 })}>
                                    Why do you need my email address?
                                    <svg className="-mr-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </p>
                                {activeIndexes.includes(19) && (
                                    <p className='ans shadow p-5'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-contact flex items-center justify-center">
                <Image src={rect} alt='rect' className='absolute rect-img'/>
                <p className='relative'>Don’t find your answer? <span className='text-xl font-bold '><Link href="/ContactUs"> Contact us --{'>'}</Link></span></p>
            </div>
        </div>
    );
};

export default Questions;
