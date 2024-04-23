import Image from 'next/image'
import React from 'react'
import shop1 from "../../../../public/shop-1.png"
import shop2 from "../../../../public/shop-2.png"
import shop3 from "../../../../public/shop-3.png"
import Link from 'next/link'
const ShopCart = () => {
    return (
        <div className='shopcart'>
            <div className="shopcart-content w-[65%] mx-auto flex flex-col gap-12 py-24">
                <div className="shopcart-top flex mobile:flex-col md:flex-row justify-between px-14 py-8 relative bg-[#dfebdb] border border-[#c6d1c3] rounded-md " >
                    <div className="flex flex-col justify-center items-center z-10">
                        <Image src={shop1} alt='shop' />
                        <p className='font-bold'>Shop Page</p>
                    </div>
                    <div className="flex flex-col justify-center items-center z-10">
                        <Image src={shop2} alt='shop' />
                        <p className='font-bold'>My Cart</p>
                    </div>
                    <div className="flex flex-col justify-center items-center z-10">
                        <Image src={shop3} alt='shop' />
                        <p className='font-bold'>Checkout</p>
                    </div>
                    <hr className='absolute h-[2px] w-[85%] hidden md:block bg-gray-300 left-24 top-16 z-0' />
                </div>
                <div className="shopcart-down flex justify-center gap-14">
                    <div className="flex flex-col">
                        <div className="shopcart-left border border-[#c6d1c3] rounded-md mb-7 bg-[#dfebdb] px-7 py-4 flex flex-col gap-5">
                            <div className="shopcart-headings flex justify-between">
                                <p className='font-bold text-lg'>Product Name</p>
                                <div className="flex gap-16">
                                    <p className='font-bold text-lg'>Price</p>
                                    <p className='font-bold text-lg'>Quantity</p>
                                    <p className='font-bold text-lg'>Subtotal</p>
                                </div>
                            </div>
                            <hr className=' bg-gray-300 h-[2px]' />
                            <div className="shopcart-item flex items-center gap-28">
                                <div className="flex items-center gap-10">
                                    <p>&#10060;</p>
                                    <div className="bg-[#dfebdb] border border-[#c6d1c3] rounded-md flex justify-center items-center relative cursor-pointer">
                                        <Image src="/mango-sell.png" alt='cart' width={80} height={80} />
                                    </div>
                                    <p>Fresh Organic Mango</p>
                                </div>
                                <div className="flex items-center gap-20">
                                    <p>$20.00</p>
                                    <select name="Qty" id="Qty" className='bg-transparent border border-[#c6d1c3] rounded-md py-3 px-3'>
                                        <option value="01">1 KG</option>
                                        <option value="02">2 KG</option>
                                        <option value="03">3 KG</option>
                                        <option value="04">4 KG</option>
                                        <option value="05">5 KG</option>
                                        <option value="06">6 KG</option>
                                        <option value="07">7 KG</option>
                                        <option value="08">8 KG</option>
                                    </select>
                                    <p>$20.00</p>
                                </div>
                            </div>
                            <hr className=' bg-gray-300 h-[2px]' />
                            <div className="shopcart-item flex items-center justify-between">
                                <div className="flex items-center gap-10">
                                    <p>&#10060;</p>
                                    <div className="bg-[#dfebdb] border border-[#c6d1c3] rounded-md flex justify-center items-center relative cursor-pointer">
                                        <Image src="/cabbage.png" alt='cart' width={80} height={80} />
                                    </div>
                                    <p>Fresh Organic Cabbage</p>
                                </div>
                                <div className="flex items-center gap-20">
                                    <p>$40.00</p>
                                    <select name="Qty" id="Qty" className='bg-transparent border border-[#c6d1c3] rounded-md py-3 px-3'>
                                        <option value="01">1 KG</option>
                                        <option value="02">2 KG</option>
                                        <option value="03">3 KG</option>
                                        <option value="04">4 KG</option>
                                        <option value="05">5 KG</option>
                                        <option value="06">6 KG</option>
                                        <option value="07">7 KG</option>
                                        <option value="08">8 KG</option>
                                    </select>
                                    <p>$40.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-7 items-center">
                            <input type='text' placeholder='Coupon Code' className='border border-[#c6d1c3] rounded-md px-4 py-4' />
                            <Link href="#"><p className='text-white bg-[#609E45] rounded-md font-bold px-6 py-4'>Apply Now</p></Link></div>
                    </div>
                    <div className="shopcart-right bg-[#dfebdb] border border-[#c6d1c3] rounded-md p-6 flex flex-col gap-5">
                        <p className='text-lg font-bold'>Cart totals</p>
                        <hr className=' bg-gray-300 h-[2px]' />
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>$60.00</p>
                        </div>
                        <div className="bg-white p-5 rounded-md">
                            <p className='font-bold'>Shipping</p>
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <p>Flat rate</p>
                                    <p>$60.00</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Shipping to</p>
                                    <p>Mumbai</p>
                                </div>
                                <div className="flex gap-24">
                                    <p>Shipping Charge</p>
                                    <p>$10.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p>Grand Total</p>
                            <p>$70.00</p>
                        </div>
                        <button className='text-white bg-[#609E45] rounded-md py-3'>Proceed to checkout</button>
                        <button className='text-white bg-black rounded-md py-3'>Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCart