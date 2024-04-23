import Image from 'next/image'
import React from 'react'
import deliveryGuy from '../../../public/delivery-guy.png'
import leaf from '../../../public/leaf.png'

interface bannerProps {
    title: string;
    heading: string;
    subheading: string;
}

const Banner = ({title, heading, subheading}: bannerProps) => {
  return (
    <>
    <div className="banner grid gap-5 md:grid-cols-3 justify-between items-center">
        <Image src={deliveryGuy} alt='delivery'/>
        <div className="banner-content flex flex-col gap-3 items-center">
            <h2 className='text-2xl font-bold'>{heading}</h2>
            <p>Home -{subheading} <span> {title}</span></p>
        </div>
        <Image src={leaf} alt='leaf' className=''/>
    </div>
    </>
)
}

export default Banner