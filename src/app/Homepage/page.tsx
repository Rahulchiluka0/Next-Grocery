import React from 'react'
import Hero from '../components/HomeComponents/Hero'
import Facilities from '../components/HomeComponents/Facilities'
import Categories from '../components/HomeComponents/Categories'
import Products from '../components/HomeComponents/Products'
import Discount from '../components/HomeComponents/Discount'
import Testimonials from '../components/HomeComponents/Testimonials'
import Download from '../components/HomeComponents/Download'
import Blogs from '../components/HomeComponents/Blogs'

const Homepage = () => {
    return (
        <>
            <Hero />
            <Facilities />
            <Categories />
            <Products title="Featured Products" bgcolor="#fff" />
            <Discount />
            <Products title="Top Savers Today" bgcolor="#d88f7033" />
            <Testimonials />
            <Download />
            <Blogs />
        </>
    )
}

export default Homepage