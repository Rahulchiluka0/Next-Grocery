import Image from 'next/image'
import React from 'react'
import truck from "../../../../public/truck.png"
import natural from "../../../../public/natural.png"
import returns from "../../../../public/return.png"
import wallet from "../../../../public/wallet.png"

const Facilities = () => {
    return (
        <div className="facilities my-24 grid md:grid-cols-2 lg:grid-cols-4 justify-between mx-auto">
            <div className="item-1 flex items-center mb-8 md:mb-0">
                <div className="icon-img bg-white rounded-full p-3 -mr-7">
                    <Image src={truck} alt='truck' className='' />
                </div>
                <div className="content px-10 py-3 flex flex-col rounded-md -z-10">
                    <p className='text-lg font-bold'>
                        Free Shipping.
                    </p>
                    <p>No one rejects, dislikes.</p>
                </div>
            </div>
            <div className="item-1 flex items-center mb-8 md:mb-0">
                <div className="icon-img bg-white rounded-full p-3 -mr-7">
                    <Image src={natural} alt='natural' className='' />
                </div>
                <div className="content px-10 py-3 flex flex-col rounded-md -z-10">
                    <p className='text-lg font-bold'>
                        100% Natural
                    </p>
                    <p>No one rejects, dislikes.</p>
                </div>
            </div>
            <div className="item-1 flex items-center mb-8 md:mb-0">
                <div className="icon-img bg-white rounded-full p-3 -mr-7">
                    <Image src={returns} alt='return' className='' />
                </div>
                <div className="content px-10 py-3 flex flex-col rounded-md -z-10">
                    <p className='text-lg font-bold'>
                        Easy Free Returns
                    </p>
                    <p>No one rejects, dislikes.</p>
                </div>
            </div>
            <div className="item-1 flex items-center mb-8 md:mb-0">
                <div className="icon-img bg-white rounded-full p-3 -mr-7">
                    <Image src={wallet} alt='wallet' className='' />
                </div>
                <div className="content px-10 py-3 flex flex-col rounded-md -z-10">
                    <p className='text-lg font-bold'>
                        100% Payment Secure
                    </p>
                    <p>No one rejects, dislikes.</p>
                </div>
            </div>
        </div>
    )
}

export default Facilities
