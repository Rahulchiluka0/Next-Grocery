import React from 'react'
import Banner from '../components/Banner'
import Facilities from '../components/HomeComponents/Facilities'
import Discount from '../components/HomeComponents/Discount'
import Testimonials from '../components/HomeComponents/Testimonials'
import Downloads from '../components/AboutComponents/Downloads'
import AboutHero from '../components/AboutComponents/AboutHero'
import Launches from '../components/AboutComponents/Launches'

const page = () => {
  return (
    <>
        <Banner title='About Us' heading="Learn more about us" subheading=''/>
        <AboutHero/>
        <Launches/>
        <Facilities/>
        <Discount/>
        <Testimonials/>
        <Downloads/>
    </>
  )
}

export default page