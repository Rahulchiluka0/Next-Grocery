import Banner from '@/app/components/Banner'
import Checkoutitem from '@/app/components/ShopComponents/Checkoutitem'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner title='Checkout' heading='Checkout page' subheading=''/>
        <Checkoutitem/>
    </div>
  )
}

export default page
