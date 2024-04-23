import Image from 'next/image'
import React from 'react'
import triangle from '../../../../public/about-triangle.png'
import line from '../../../../public/about-line.png'
const Launches = () => {
    return (
        <div className='launch'>
            <div className="launch-content flex flex-col items-center py-24">
                <div className='white-bg bg-white flex items-center justify-center p-8 '>
                    <h1 className='text-xl font-bold text-center'>
                        Launched our product on <br />
                        28 Nov 2013
                    </h1>
                </div>
                <Image src={triangle} alt='tri' className="m-auto " />
                <p className="launch-btn px-2 rounded-md text-white mt-9">Launch</p>
                <Image src={line} alt='line' className="m-auto mt-9 relative" />
                <div className="flex flex-col gap-20 ml-20 absolute pt-60">

                    <div className="left-launch flex pc:gap-20 lg:gap-9 items-center ">
                        {/* <Image src={line} alt='line' className="m-auto mt-9 " /> */}
                        <div className="flex items-center">
                            <div className='white-bg bg-white flex flex-col items-end  justify-center p-8  '>
                                <hr />
                                <h1 className='text-xl font-bold text-center'>
                                    Started Our Online Store
                                </h1>
                                <p className='text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply <br /> random text. It has roots in a piece.</p>
                            </div>
                            <Image src={triangle} alt='tri' className="-rotate-90 -ml-2" />
                        </div>

                        <div className="circle"></div>
                        <h1 className='orange-text text-xl font-bold'>20 November,2013</h1>
                    </div>
                    <div className="right-launch1 flex pc:gap-20 lg:gap-9 items-center  ">
                        {/* <Image src={line} alt='line' className="m-auto mt-9 " /> */}
                        <h2 className='orange-text text-xl font-bold'>05 December,2015</h2>

                        <div className="circle"></div>

                        <div className="flex items-center">
                            <Image src={triangle} alt='tri' className="rotate-90 -mr-2" />
                            <div className='white-bg bg-white flex flex-col items-start  justify-center p-8  '>
                                <hr />
                                <h1 className='text-xl font-bold text-center'>
                                    Hired 20 employee
                                </h1>
                                <p className='text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply <br /> random text. It has roots in a piece.</p>
                            </div>
                        </div>
                    </div>
                    <div className="left-launch flex pc:gap-20 lg:gap-9 items-center ">
                        {/* <Image src={line} alt='line' className="m-auto mt-9 " /> */}
                        <div className="flex items-center">
                            <div className='white-bg bg-white flex flex-col items-end  justify-center p-8  '>
                                <hr />
                                <h1 className='text-xl font-bold text-center'>
                                    Lounched 25+ more Products
                                </h1>
                                <p className='text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply <br /> random text. It has roots in a piece.</p>
                            </div>
                            <Image src={triangle} alt='tri' className="-rotate-90 -ml-2" />
                        </div>

                        <div className="circle"></div>
                        <h1 className='orange-text text-xl font-bold'>07 June,2016</h1>
                    </div>
                    <div className="right-launch2 flex pc:gap-20 lg:gap-9 items-center ">
                        {/* <Image src={line} alt='line' className="m-auto mt-9 " /> */}
                        <h2 className='orange-text text-xl font-bold'>13 August ,2020</h2>

                        <div className="circle"></div>

                        <div className="flex items-center">
                            <Image src={triangle} alt='tri' className="rotate-90 -mr-2" />
                            <div className='white-bg bg-white flex flex-col items-start  justify-center p-8  '>
                                <hr />
                                <h1 className='text-xl font-bold text-center'>
                                    Open Second Store in NYC
                                </h1>
                                <p className='text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply <br /> random text. It has roots in a piece.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='now-btn text-white px-3 rounded-md mt-8'>
                    Now
                </p>

            </div>
        </div>
    )
}

export default Launches