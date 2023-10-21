import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Rightbar from './Rightbar'
import Topbar from './Topbar'

export default function Body() {
  return (
    <div>
      <div className='sticky top-0  z-[10]'>
   <Topbar />
      </div>
    <div className='w-[100%]'>
    <div className='body w-[95%] mx-[auto]'>
        <Sidebar />
        <Feed />
        <Rightbar />
    </div>
    </div>
    </div>
  )
}
