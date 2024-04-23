import Banner from '@/app/components/Banner'
import BlogDetails from '@/app/components/BlogsComponents/BlogDetails'
import React from 'react'

const page = () => {
  return (
    <>
      <Banner subheading=' Our Blogs -' heading='Read our news and blogs' title=' Blog Detail'/>
      <BlogDetails/>
    </>)
}

export default page