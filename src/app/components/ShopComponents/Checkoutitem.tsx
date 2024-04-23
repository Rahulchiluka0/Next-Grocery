import React from 'react'
import shop1 from "../../../../public/shop-1.png"
import shop2 from "../../../../public/shop-2.png"
import shop3 from "../../../../public/shop-3.png"
import Image from 'next/image'

const Checkoutitem = () => {
    return (
        <div className='Checkoutitem '>
            <div className="Checkoutitem-content w-[65%] mx-auto py-24">
                <div className="shopcart-top flex mobile:flex-col md:flex-row justify-between px-14 py-8 mb-12 relative bg-[#dfebdb] border border-[#c6d1c3] rounded-md">
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
                    <hr className='absolute hidden md:block h-[2px] w-[85%] bg-gray-300 left-24 top-16 z-0' />
                </div>

                <div className="checkout-down flex mobile:flex-col md:flex-row gap-7">
                    <div className="checkout-left mobile:w-full md:w-[85%] bg-[#dfebdb] border border-[#c6d1c3] rounded-md p-5 flex flex-col gap-4">
                        <h1 className='text-xl font-semibold'>Billing details</h1>
                        <hr className=' bg-gray-300 h-[2px]' />
                        <div>
                            <form action="" className=' mx-auto flex flex-col gap-7'>
                                <div className="grid mobile:grid-cols-1 lg:grid-cols-2 gap-7 justify-center">
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" placeholder='First Name' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" placeholder='Last Name' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="firstName">Country / Region</label>
                                        <input type="text" placeholder='Country / Region' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="lastName">Street address</label>
                                        <input type="text" placeholder='Street address' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="Town / City">Town / City</label>
                                        <input type="text" placeholder='Town / City' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="Email">State</label>
                                        <input type="text" placeholder='State' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />

                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="Phone Number">ZIP Code</label>
                                        <input type="number" placeholder='ZIP Code' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label htmlFor="Email">Company Name (optional)</label>
                                        <input type="text" placeholder='Company Name (optional)' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />

                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="textarea">Order notes (optional)</label>
                                    <textarea name="message" id="" placeholder='Order notes' className='text-sm border border-[#c1c9bf] py-5 px-4 rounded-md bg-transparent' />
                                </div>
                                <div className='flex gap-2'>
                                    <input type='checkbox' />
                                    <p>Ship to a different address?</p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="checkout-right lg:w-[35%]">

                        <div className="shopcart-right bg-[#dfebdb] border border-[#c6d1c3] rounded-md p-6 flex flex-col gap-5">
                            <p className='text-lg font-bold'>Your order</p>
                            <p className='font-semibold'>Product</p>
                            <div className="flex justify-between">
                                <p>Fresh Mango - 2 KG× 1</p>
                                <p>$20.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Organic Vabbage 5 KG× 1</p>
                                <p>$40.00</p>
                            </div>
                            <hr className=' bg-gray-300 h-[2px]' />
                            <div className="flex justify-between">
                                <p>Subtotal</p>
                                <p>$498.00</p>
                            </div>
                            <div className="bg-white p-5 rounded-md">
                                <p className='font-bold'>Shipping</p>
                                <div className="flex flex-col">
                                    <div className="flex justify-between">
                                        <p>Flat rate</p>
                                        <p>$498.00</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Shipping to</p>
                                        <p>Mumbai</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Shipping Charge</p>
                                        <p>$10.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <p>Grand Total</p>
                                <p>$508.00</p>
                            </div>
                            <div className="flex gap-2">
                                <input type='radio' />
                                <p className='font-semibold'>Direct bank transfer</p>
                            </div>
                            <div className="flex gap-2">
                                <input type='radio' />
                                <div className="flex flex-col">
                                    <p className='font-semibold'>Check payments</p>
                                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <input type='radio' />
                                <p className='font-semibold'>Cash on delivery</p>
                            </div>
                            <button className='text-white bg-[#609E45] rounded-md py-3'>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkoutitem