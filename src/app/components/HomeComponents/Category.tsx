import React from 'react'
import categories from '../.././../app/data/data'
import Image from 'next/image'

const Category = () => {
    return (
        <div className="category-cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:grid-cols-2 justify-between mt-10 md:mt-14">
            {categories.categories.map((item) => (
                <div key={item.name} className="card p-6 py-9 flex flex-col gap-2 items-center relative cursor-pointer mb-6 md:mb-0">
                    <Image src={item.image} alt='vegetable' width={131} height={115} />
                    <h1 className='text-xl font-bold'>{item.name}</h1>
                    <p className='text-gray-600'>{item.count} Products</p>
                    <div className="arrow w-9 md:top-56 lg:top-56 pc:mt-3  rounded-full p-2 absolute top-60 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                        <Image src="/arrow-right.png" alt='arrow' width={24} height={24} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Category