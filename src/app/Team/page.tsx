import React from 'react'
import Banner from '../components/Banner'
import TeamMembers from '../components/TeamComponents/TeamMembers'

const page = () => {
  return (
    <div>
        <Banner title='' heading='Meet our team member' subheading=' Our Team'/>
        <TeamMembers/>
    </div>
  )
}

export default page