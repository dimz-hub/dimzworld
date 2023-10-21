import React from 'react'
import Topbarleft from './Topbarleft'
import Topbarcenter from './Topbarcenter'
import Topbarright from './Topbarright'

export default function Topbar() {
  return (
    <div className='   h-[50px]  bg-[#1877f2]  '>
      <div className='topbar w-[95%] m-[auto] '>

        <Topbarleft /> 
        <Topbarcenter />
        <Topbarright />
      </div>
    </div>
  )
}
