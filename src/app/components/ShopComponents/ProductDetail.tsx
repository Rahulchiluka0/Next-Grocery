import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tick from "../../../../public/about-tick.png"
import ProductDetails from "../../../app/data/data"

const ProductDetail = () => {
    return (
        <div className="productDetail-main md:w-[80%] mx-auto">
            <div className='productDetail mx-auto flex mobile:flex-col md:flex-row  gap-8 justify-center py-24'>
                <div className="productDetail-left items-center flex flex-col gap-7">
                    <div className="big-image">
                        <Image src="/orange.png" alt='orange' width={392} height={353} className='bg-[#dfebdb] border border-[#c6d1c3] rounded-md' />
                    </div>
                    <div className="small-images flex">
                        <Image src="/orange.png" alt='orange' width={80} height={71} className=' bg-[#dfebdb] border border-[#c6d1c3] rounded-md' />
                        <Image src="/orange.png" alt='orange' width={80} height={71} className=' bg-[#dfebdb] border border-[#c6d1c3] rounded-md rotate-180' />
                        <Image src="/orange.png" alt='orange' width={80} height={71} className=' bg-[#dfebdb] border border-[#c6d1c3] rounded-md' />
                        <Image src="/orange.png" alt='orange' width={80} height={71} className=' bg-[#dfebdb] border border-[#c6d1c3] rounded-md rotate-180' />
                    </div>
                </div>
                <div className="productDetail-right bg-[#dfebdb] p-9 flex flex-col gap-4 border border-[#c6d1c3] rounded-md">
                    <div className="product-text flex justify-between">
                        <p>Availability: <strong className='text-[#609E45]'>In Stock</strong></p>
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                <Image src="/star.png" alt='star' width={15} height={15} />
                                <Image src="/star.png" alt='star' width={15} height={15} />
                                <Image src="/star.png" alt='star' width={15} height={15} />
                                <Image src="/star.png" alt='star' width={15} height={15} />
                                <Image src="/star.png" alt='star' width={15} height={15} />
                            </div>
                            <p>( 10 Review )</p>
                        </div>
                    </div>
                    <h1 className='text-2xl font-bold'>Fresh Yellow Orange </h1>
                    <h1><span className='line-through'> $10.00</span> <strong>$08.00</strong></h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration<br />  in some form, by injected humour, words which don't look even slightlybelievable.There are many.</p>
                    <hr className='bg-[#959b94] h-[2px]' />
                    <form className='flex gap-8 mobile:flex-col md:flex-row'>
                        <div className="flex flex-col">
                            <label htmlFor="Qty">QTY:</label>
                            <select name="Qty" id="Qty" className='bg-transparent border border-[#c6d1c3] rounded-md py-3 px-3'>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Size">Size:</label>
                            <select name="Size" id="Size" className='bg-transparent border border-[#c6d1c3] rounded-md py-3 px-3'>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="Extra Large">Extra Large</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Weight">Weight:</label>
                            <select name="Weight" id="Weight" className='bg-transparent border border-[#c6d1c3] rounded-md py-3 px-3'>
                                <option value="1 Kg">1 Kg</option>
                                <option value="2 Kg">2 Kg</option>
                                <option value="3 Kg">3 Kg</option>
                                <option value="4 Kg">4 Kg</option>
                            </select>
                        </div>
                    </form>
                    <hr className='bg-[#959b94] h-[2px]' />
                    <Link href="#" className="flex w-44  bg-[#609E45] px-7 py-3 rounded-md items-center gap-2 cursor-pointer">
                        <Image src="/shopping-bag.png" alt='cart' width={22} height={22} />
                        <p className='text-white'>Add to Cart</p>
                    </Link>
                    <div className="">
                        <p>SKU: <span className='text-[#EF682E] font-bold'>D2300-2</span></p>
                        <p>CATEGORIES: <span className='text-[#EF682E] font-bold'>CLOTHING, DEAL OF WEEK, WOMEN</span></p>
                        <p>TAGS: Hot, <span className='text-[#EF682E] font-bold'>Trend</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 mb-24">
                <div className="flex gap-8">
                    <p className='hover:border-b-[#609E45] hover:border-b-2 hover:text-[#609E45]'>Description</p>
                    <p className='hover:border-b-[#609E45] hover:border-b-2 hover:text-[#609E45]'>Review (1)</p>
                    <p className='hover:border-b-[#609E45] hover:border-b-2 hover:text-[#609E45]'>Additional information</p>
                </div>
                <div className=" bg-[#dfebdb] p-8 border border-[#c6d1c3] rounded-md flex flex-col gap-2">
                    <p>Lower temperature washes and delicate spin cycles are gentler on garment, helping to maintain the color, shape and structure of the fabric. At the same
                        time it reduces energy consumption that is used in care processes. are gentler on garment, helping to maintain the color.</p>
                    <p className='font-semibold text-[#609E45]'>Benefits</p>
                    <div className='flex mobile:flex-col md:flex-row gap-7'>
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
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold'>Related Product</h1>
                <hr className='w-14 h-1 bg-green-600' />
            </div>
            <div className="shop-product-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-9 gap-16 mt-7 mb-24">
                {ProductDetails.ProductDetails.map((item) => (
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductDetail
