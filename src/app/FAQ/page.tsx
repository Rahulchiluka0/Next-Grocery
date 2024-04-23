import React from 'react'
import Banner from '../components/Banner'
import Questions from '../components/FAQS/Questions'

const page = () => {
    return (
        <>
            <Banner title='FAQs'  heading="Do You Have Any Question?" subheading=''/>
            <Questions />
        </>
    )
}

export default page