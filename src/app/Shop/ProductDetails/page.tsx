import Banner from '@/app/components/Banner'
import ProductDetail from '@/app/components/ShopComponents/ProductDetail'
import React from 'react'

const page = () => {
  return (
    <>
        <Banner title='Shop' heading='Our organic products' subheading=''/>
        <ProductDetail/>
    </>
  )
}

export default page