import Image from 'next/image'
import React from 'react'

const ContactDetails = () => {
    return (
        <>
            <div className='contact-details mx-auto py-24'>
                <div className="contact-r grid mobile:grid-cols-1 lg:grid-cols-2 pc:grid-cols-3 justify-between gap-5">
                    <div className="contact-cards py-6 px-5 rounded-md flex items-center gap-4 w-full">
                        <Image src="/contact-call.png" alt='call' width={49} height={49} />
                        <div className="flex flex-col">
                            <p className='text-black'>Call Us on</p>
                            <h4 className='mobile:text-sm md:text-lg text-black font-bold'>+44 123 456 7890</h4>
                            <h4 className='mobile:text-sm md:text-lg text-black font-bold'>+44 987 654 3210</h4>
                        </div>
                    </div>
                    <div className="contact-cards py-6 px-5 rounded-md flex items-center gap-4 w-full">
                        <Image src="/contact-mail.png" alt="mail" width={49} height={49} className='text-green-600' />
                        <div className="flex flex-col">
                            <p className='text-black'>Email Us</p>
                            <h4 className='mobile:text-sm md:text-lg text-black font-bold'>contact@trootheme s.com</h4>
                            <h4 className='mobile:text-sm md:text-lg text-black font-bold'>info@trootheme s.com</h4>
                        </div>
                    </div>
                    <div className="contact-cards py-6 px-5 rounded-md flex items-center gap-4 w-full">
                        <Image src="/contact-map.png" alt="mail" width={49} height={49} className='text-green-600' />
                        <div className="flex flex-col">
                            <p className='text-black'>Our Location</p>
                            <h4 className='mobile:text-sm md:text-lg text-black font-bold'>4516 School Street, Danbury,
                                CT, Canada, 458068</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-bg py-24 flex flex-col gap-7">
                <div className="contact-content mobile:flex-col lg:flex-row  mx-auto justify-between items-center">
                    <div className="left-test flex items-start flex-col gap-5">
                        <p className='text-white text-center rounded-md  px-3 py-1'>Leave A Message</p>
                        <h1 className='text-4xl font-bold'>Don’t hasitate to contact us <br />
                            if you need more help</h1>
                    </div>
                    <div className="right-test flex ">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy abd text ever since. <br /> dummy text.</p>
                    </div>
                </div>
                <form action="" className='contact-form mx-auto flex flex-col gap-7 mobile:p-5 md:p-20'>
                    <div className="grid mobile:grid-cols-1 lg:grid-cols-2 gap-7 justify-center">

                        <div className="flex flex-col gap-3">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder='First Name' className='text-sm border py-5 px-4 rounded-md'/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder='Last Name' className='text-sm border py-5 px-4 rounded-md'/>
                        </div>


                        <div className="flex flex-col gap-3">
                            <label htmlFor="Phone Number">Phone Number</label>
                            <input type="number" placeholder='Phone Number' className='text-sm border py-5 px-4 rounded-md'/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="Email">Email Address</label>
                            <input type="email" placeholder='Enter your email' className='text-sm border py-5 px-4 rounded-md'/>

                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="textarea">Write a Message ...</label>
                        <textarea name="message" id="" placeholder='Write a Message' className='text-sm border py-5 px-4 rounded-md'/>
                    </div>
                    <div>
                        <button className='py-4 px-6 rounded-md font-bold text-white'>Submit Now</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactDetails
