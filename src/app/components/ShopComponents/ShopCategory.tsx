import React from 'react'
import Category from '../HomeComponents/Category'
import Image from 'next/image'
import sellItems3 from "../../../app/data/data"
import shopProducts from "../../../app/data/data"
import Link from 'next/link'
const ShopCategory = () => {
    return (
        <div className='shop-categories mx-auto my-24'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Shop by categories</h1>
                <hr className='w-14 h-1 bg-green-600' />
                <Category />
            </div>
            <div className='flex mobile:flex-col md:flex-row gap-7 mt-12'>
                <div className='shop-left mobile:w-full lg:w-[40%] pc:w-[20%] flex flex-col gap-7'>
                    <div className="shop-cart bg-[#dfebdb] p-5 rounded-md border-[#c6d1c3] border flex flex-col gap-3">
                        <h1>Cart</h1>
                        <hr className='bg-[#959b94] h-[2px]'/>
                        <div className="sell-items flex flex-col gap-8">
                            <div className="sell-item flex gap-3 items-start">
                                <div className="sell-item-all rounded-md flex justify-center items-center relative cursor-pointer">
                                    <Image src="/mango-sell.png" alt='cart' width={80} height={80} />
                                </div>
                                <div className="sell-content flex flex-col gap-1">
                                    <p>Yellow Orange</p>
                                    <p className='text-gray-600 text-sm'><span className='line-through'> <strong className='text-black'>$10.00</strong></span></p>
                                </div>
                            </div>
                            <div className="sell-item flex gap-3 items-start">
                                <div className="sell-item-all rounded-md flex justify-center items-center relative cursor-pointer">
                                    <Image src="/mix-sell.png" alt='cart' width={80} height={80} />
                                </div>
                                <div className="sell-content flex flex-col gap-1">
                                    <p>Fresh Cabbage</p>
                                    <p className='text-gray-600 text-sm'><span className='line-through'> <strong className='text-black'>$10.00</strong></span></p>
                                </div>
                            </div>
                            <hr className='bg-[#959b94] h-[2px]'/>
                            <p className='text-gray-600 text-sm'><span className=''>Subtotal: <strong className='text-black'>$20.00</strong></span></p>
                        </div>
                    </div>
                    <div className="shop-product bg-[#dfebdb] p-5 rounded-md border-[#c6d1c3] border">
                        <div className="sell-3 flex flex-col gap-12 ">
                            <div className='flex flex-col gap-2'>
                                <h2 className='lg:text-2xl md:text-lg font-bold'>Featured Product</h2>
                                <hr className='bg-[#959b94] h-[2px]'/>
                            </div>
                            <div className="sell-items flex flex-col gap-8">
                                {sellItems3.sellItems3.map((item, index) => (
                                    <div key={index} className="sell-item flex gap-3 items-start">
                                        <div className="sell-item-all rounded-md flex justify-center items-center relative cursor-pointer">
                                            <Image src={item.image} alt='cart' width={80} height={80} />
                                        </div>
                                        <div className="sell-content flex flex-col gap-1">
                                            <p>{item.name}</p>
                                            <p className='text-gray-600 text-sm'><span className='line-through'>{item.oldPrice}</span> <strong className='text-black'>{item.newPrice}</strong></p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shop-right mobile:w-full'>
                    <div className="shop-results flex justify-between bg-[#dfebdb] p-5 rounded-md border-[#c6d1c3] border">
                        <p>Showing Products 1-12 Of 199 Result</p>
                        <p>Sort by &#x25BC;</p>
                    </div>
                    <div className="shop-product-card grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pc:grid-cols-3 lg:gap-9 gap-16 mt-7">
                        {shopProducts.shopProducts.map((item) => (
                            <div key={item.id} className="product-card py-3 px-3 pb-8 flex flex-col rounded-md gap-2 items-center relative">
                                <div className="img-bgcolor rounded-md w-full items-center">
                                    <Image src={item.image} alt='veggies' width={304} height={260} />
                                </div>
                                <h1 className='text-xl font-bold'>{item.name}</h1>
                                <p className='text-gray-600 text-sm'><span className='line-through'>{item.oldPrice}</span> <strong className='text-black'>{item.newPrice}</strong></p>
                                <div className="stars flex ">
                                    {[1, 2, 3, 4, 5].map((starId) => (
                                        <Image key={starId} src="/star.png" alt='star' width={15} height={15} />
                                    ))}
                                </div>
                                <Link href="#" className="cart flex w-44  bg-[#609E45] px-7 py-3 rounded-md items-center pc:mt-20 lg:-mt-20 mobile:-mt-7  mobile2:mt-3 mobile3:mt-14 gap-2 md:-mt-4 absolute left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 cursor-pointer">
                                    <Image src="/shopping-bag.png" alt='cart' width={22} height={22} />
                                    <p className='text-white'>Add to Cart</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="shop-pagination bg-[#dfebdb] px-5 py-2 mt-12 w-[216px] ml-auto border border-[#c6d1c3] rounded-md">
                <ul className='flex justify-center '>
                    <li className='px-3 py-1 hover:bg-[#609E45] hover:text-white rounded-md cursor-pointer duration-300 '>1</li>
                    <li className='px-3 py-1 hover:bg-[#609E45] hover:text-white rounded-md cursor-pointer duration-300 '>2</li>
                    <li className='px-3 py-1 hover:bg-[#609E45] hover:text-white rounded-md cursor-pointer duration-300 '>3</li>
                    <li className='px-3 py-1 hover:bg-[#609E45] hover:text-white rounded-md cursor-pointer duration-300 '>4</li>
                    <li className='px-3 py-1 hover:bg-[#609E45] hover:text-white rounded-md cursor-pointer duration-300 '>Next</li>
                </ul>
            </div>
        </div>
    )
}

export default ShopCategory