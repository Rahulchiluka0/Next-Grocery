import Image from 'next/image'
import React from 'react'
import categories from "../../data/data"
import Category from './Category'

const Categories = () => {
    return (
        <div className='category'>
            <div className="category-content mx-auto pb-28">
                <div className="category-top flex flex-col md:flex-row justify-between ">
                    <div className="left-text flex flex-col gap-5 mt-10 md:mt-28">
                        <p className='text-white rounded-md text-center w-36 py-1'>Hot Categories</p>
                        <h2 className='text-4xl font-bold'>Browse Our Categories</h2>
                    </div>
                    <div className="right-text mt-10 md:mt-28">
                        <p className='w-full md:w-96'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                </div>
                <Category/>
            </div>
        </div>
    )
}

export default Categories
