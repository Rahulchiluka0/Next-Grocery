import React from 'react'
import Banner from '../components/Banner'
import ContactDetails from '../components/ContactComponents/ContactDetails'
import GoogeMap from '../components/ContactComponents/GoogeMap'

const page = () => {
    return (
        <>
            <Banner title='Contact Us' heading='Contact with us any time' subheading=''/>
            <ContactDetails/>
            <GoogeMap/>
        </>
    )
}

export default page