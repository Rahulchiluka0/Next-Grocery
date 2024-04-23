import React from 'react'
import Banner from '../components/Banner'
import ShopCategory from '../components/ShopComponents/ShopCategory'

const page = () => {
  return (
    <div>
        <Banner title='Shop' heading='Our organic products' subheading=''/>
        <ShopCategory/>
    </div>
  )
}

export default page