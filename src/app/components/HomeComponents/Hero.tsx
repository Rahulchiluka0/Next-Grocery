import Image from 'next/image'
import Link from 'next/link'
import H1 from '../../../../public/home-hero.png'
import leaf from '../../../../public/leaf.png'
import deliveryGuy from '../../../../public/delivery-guy.png'

const Hero = () => {
  return (
    <div className='homepage pt-5'>
      <div className="flex flex-col md:flex-col lg:flex-row justify-between">
        <div className="images flex flex-col justify-between">
          <Image src={leaf} alt='leaf' className='mx-20 mt-20' />
          <Image src={deliveryGuy} alt='leaf' className='' />
        </div>
        <div className="home-content mx-auto flex flex-col gap-5 justify-center lg:w-1/3 ">
          <p className='text-white w-48 rounded-md h-7 text-center'>We are more than faster</p>
          <h1 className='text-2xl pc:text-6xl lg:text-2xl font-bold w-full'>The right store with  The right Price</h1>
          <h6 className='text-base md:text-xl lg:text-xl w-full'>Lorem ipsum dolor sit amen, consectetur adipescent alit, sed do eiusmod tempor incident ut labored et dolore magna aliquant. Et ejecta's quiz.</h6>
          <h5 className='font-medium text-white w-28 p-3 text-center rounded-md'><Link href="#">Shop Now</Link></h5>
          {/* <Image src={leaf} alt='leaf' className='flex mx-96 -rotate-90' /> */}
        </div>
        <div className="hero-img relative">
          <Image src={H1} alt='hero' />
          <Image src={leaf} alt='leaf' className='rotate-90 absolute top-10 right-20 md:hidden' />
        </div>
      </div>
    </div>
  )
}

export default Hero
