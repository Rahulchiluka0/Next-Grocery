import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import products from "../../data/data"

interface ProductsProps {
    title: string;
    bgcolor: string;
}

const Products = ({ title, bgcolor }: ProductsProps) => {
    return (
        <div className='products mx-auto py-24' style={{ 'backgroundColor': bgcolor }}>
            <div className="product-content flex flex-col gap-5 items-center">
                <p className='text-white rounded-md text-center w-44 py-1'>Awesome Products</p>
                <h2 className='text-4xl font-bold'>{title}</h2>
                <div className="products-category flex mt-9 gap-4 flex-wrap justify-center">
                    <h5 className='font-medium text-black w-36 p-3 text-center rounded-md '>All Products</h5>
                    <h5 className='font-medium text-black w-36 p-3 text-center rounded-md '>Best Sellers</h5>
                    <h5 className='font-medium text-black w-36 p-3 text-center rounded-md '>New Arrivals</h5>
                    <h5 className='font-medium text-black w-36 p-3 text-center rounded-md '>Top Rated</h5>
                </div>
            </div>
            <div className="product-cards m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-9 gap-16 mt-20">
                {products.products.map((item) => (
                    <div key={item.id} className="product-card py-3 px-3 pb-8 flex flex-col rounded-md gap-2 items-center relative">
                        <div className="img-bgcolor rounded-md w-full  items-center">
                            <Image src={item.image} alt='veggies' width={304} height={260} />
                        </div>
                        <h1 className='text-xl font-bold'>{item.name}</h1>
                        <p className='text-gray-600 text-sm'><span className='line-through'>{item.oldPrice}</span> <strong className='text-black'>{item.newPrice}</strong></p>
                        <div className="stars flex ">
                            {[1, 2, 3, 4, 5].map((starId) => (
                                <Image key={starId} src="/star.png" alt='star' width={15} height={15} />
                            ))}
                        </div>
                        <Link href="#" className="cart flex w-44  bg-orange-600 px-7 py-3 rounded-md items-center pc:mt-16 lg:-mt-20 mobile:-mt-7  mobile2:mt-3 mobile3:mt-14 gap-2 md:-mt-4 absolute left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 cursor-pointer">
                            <Image src="/shopping-bag.png" alt='cart' width={22} height={22} />
                            <p className='text-white'>Add to Cart</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
