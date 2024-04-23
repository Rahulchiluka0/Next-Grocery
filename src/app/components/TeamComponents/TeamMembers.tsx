import React from 'react'
import TeamMember from "../../../app/data/data"
import Image from 'next/image'
import Link from 'next/link'
import facebook from "../../../../public/facebook.png"
import instagram from "../../../../public/instagram.png"
import linkedin from "../../../../public/linkedin.png"
import twitter from "../../../../public/twitter.png"
import circle from "../../../../public/team-circle.png"

const TeamMembers = () => {
    return (
        <div className='w-[70%] mx-auto'>
            <div className="shop-product-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-9 gap-16 mt-24 mb-24">
                {TeamMember.TeamMember.map((item) => (
                    <div key={item.id} className="product-card py-3  pb-5 flex flex-col rounded-md gap-2 items-center relative">
                        <div className=" rounded-md items-center">
                            <Image src={item.image} alt='team' width={304} height={260} />
                        </div>
                        <h1 className='text-xl font-bold'>{item.name}</h1>
                        <p className=' text-sm'>{item.designation}</p>
                        <Link href="#" className="cart flex w-44  bg-[#609E45] px-7 py-3 rounded-md items-center pc:-mt-7 lg:-mt-20 mobile:-mt-7  mobile2:mt-3 mobile3:mt-14 gap-2 md:-mt-4 absolute left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 cursor-pointer">
                            <div className='flex gap-2 md:gap-6'>
                                <ul className='flex gap-2'>
                                    <li className='fb-icon rounded-full justify-center items-center flex w-6 h-6'><Image src={facebook} alt='facebook' width={18} height={18} /></li>
                                    <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={instagram} alt='instagram' /></li>
                                    <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={linkedin} alt='linkedin' /></li>
                                    <li className='rounded-full flex justify-center items-center w-6 h-6 border border-white'><Image src={twitter} alt='twitter' /></li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="faq-contact flex items-center justify-center mb-24">
                <Image src={circle} alt='circle' className='absolute rect-img' />
                <p className='relative text-xl font-bold text-center'>Want join our team?<br />
                    Call Us on <span className='text-[#609E45] underline'>+44 123 456 7890</span> </p>
            </div>
        </div>
    )
}

export default TeamMembers