import Banner from '@/app/components/Banner'
import ShopCart from '@/app/components/ShopComponents/ShopCart'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner title='Cart' heading='Shopping cart' subheading=''/>
        <ShopCart/>
    </div>
  )
}

export default page