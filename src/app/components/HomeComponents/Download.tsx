import Image from 'next/image'
import React from 'react'
import sellItems1 from "../../data/data"
import sellItems2 from "../../data/data"
import sellItems3 from "../../data/data"
import appicons from "../../../../public/appicons.png"
import downloadMobile from "../../../../public/download-mobile.png"
import cartSell from "../../../../public/cart-sell.png"
import star from "../../../../public/star.png"

const Download = () => {
    return (
        <div className='relative'>
            <div className='download flex flex-col p-5 items-center md:flex-row justify-center md:justify-around z-50 absolute inset-x-0 rounded-3xl -top-64'>
                <div className="down-left flex flex-col gap-8 text-center md:text-left md:w-1/2">
                    <h1 className='text-2xl md:text-4xl font-medium text-white'>Shopping for vegetables & <br />
                        fruit is easier with <br />
                        <span className='font-black'>TRoo Grocery App</span></h1>
                    <p className='text-xl md:text-2xl text-white'>Available on Both Android and iOS</p>
                    <Image src={appicons} alt='icons' />
                </div>
                <div className="down-right mt-8 md:mt-0">
                    <Image src={downloadMobile} alt='mobile' />
                </div>
            </div>
            <div className="sells pt-80 mobile2:pt-96 md:pt-60 relative mt-96 pb-24">
                <div className="sells-content pt-16 mobile2:pt-5 md:pt-20 grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:grid-cols-4 justify-between mx-auto max-w-7xl px-4">
                    <div className="sell-1 flex flex-col gap-12 ">
                        <div className='flex flex-col gap-2'>
                            <h2 className='lg:text-2xl md:text-lg font-bold'>Top Sells</h2>
                            <hr className='w-12 bg-orange-600 h-1' />
                        </div>
                        <div className="sell-items flex flex-col gap-8">
                            {sellItems1.sellItems1.map((item, index) => (
                                <div key={index} className="sell-item flex gap-3 items-start">
                                    <div className="sell-item-all rounded-md flex justify-center items-center relative cursor-pointer">
                                        <Image src={item.image} alt='cart' width={80} height={80} />
                                        <div className="cart-img w-14 rounded-full p-2 absolute left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                                            <Image src={cartSell} alt='arrow' className='w-9 h-9 ' />
                                        </div>
                                    </div>
                                    <div className="sell-content flex flex-col gap-1">
                                        <p>{item.name}</p>
                                        <p className='text-gray-600 text-sm'><span className='line-through'>{item.oldPrice}</span> <strong className='text-black'>{item.newPrice}</strong></p>
                                        <div className="stars flex ">
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <h6 className='text-lg cursor-pointer'>View All Products</h6>
                        </div>
                    </div>
                    <div className="sell-2 flex flex-col gap-12 ">
                        <div className='flex flex-col gap-2'>
                            <h2 className='lg:text-2xl md:text-lg font-bold'>Recently Added</h2>
                            <hr className='w-12 bg-orange-600 h-1' />
                        </div>
                        <div className="sell-items flex flex-col gap-8">
                            {sellItems2.sellItems2.map((item, index) => (
                                <div key={index} className="sell-item flex gap-3 items-start">
                                    <div className="sell-item-all rounded-md flex justify-center items-center relative cursor-pointer">
                                        <Image src={item.image} alt='cart' width={80} height={80} />
                                        <div className="cart-img w-14 rounded-full p-2 absolute left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                                            <Image src={cartSell} alt='arrow' className='w-9 h-9 ' />
                                        </div>
                                    </div>
                                    <div className="sell-content flex flex-col gap-1">
                                        <p>{item.name}</p>
                                        <p className='text-gray-600 text-sm'><span className='line-through'>{item.oldPrice}</span> <strong className='text-black'>{item.newPrice}</strong></p>
                                        <div className="stars flex ">
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <h6 className='text-lg cursor-pointer'>View All Products</h6>
                        </div>
                    </div>
                    <div className="sell-3 flex flex-col gap-12 ">
                        <div className='flex flex-col gap-2'>
                            <h2 className='lg:text-2xl md:text-lg font-bold'>Top Rated</h2>
                            <hr className='w-12 bg-orange-600 h-1' />
                        </div>
                        <div className="sell-items flex flex-col gap-8">
                            {sellItems3.sellItems3.map((item, index) => (
                                <div key={index} className="sell-item flex gap-3 items-start">
                                    <div className="sell-item-all rounded-md flex justify-center items-center relative cursor-pointer">
                                        <Image src={item.image} alt='cart' width={80} height={80} />
                                        <div className="cart-img w-14 rounded-full p-2 absolute left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                                            <Image src={cartSell} alt='arrow' className='w-9 h-9 ' />
                                        </div>
                                    </div>
                                    <div className="sell-content flex flex-col gap-1">
                                        <p>{item.name}</p>
                                        <p className='text-gray-600 text-sm'><span className='line-through'>{item.oldPrice}</span> <strong className='text-black'>{item.newPrice}</strong></p>
                                        <div className="stars flex ">
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                            <Image src={star} alt='star' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <h6 className='text-lg cursor-pointer'>View All Products</h6>
                        </div>
                    </div>
                    <div className="sell-4 hidden md:block lg:hidden pc:block">
                        <Image src="/offer-sell.png" alt='offer' width={310} height={566} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download
