"use client"
import Image from 'next/image'
import React from 'react'
import img from "../../public/404.png"
import Link from 'next/link'

const Custom404 = () => {
  return (<>
    <div className='not-found flex flex-col gap-4 items-center py-24 px-5 text-center'>
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p className='text-2xl'>The page you looking for is dosen’t exit.</p>
      <Image src={img} alt='img' />
      <p className='text-2xl'>The page you look for does not exist or another error occured
        pls kindly refresh or retun to <Link href="/Homepage"><span className='font-bold'>home page.</span></Link></p>
        <div className="buttons flex gap-5">
          <Link href="/Homepage"><p className='homebtn font-bold rounded-md text-white py-4 px-4'>Go to Homepage</p></Link>
          <Link href="/FAQ"><p className='helpbtn font-bold rounded-md py-4 px-7'>Help Center</p></Link>
        </div>
    </div>
  </>
  )
}

export default Custom404