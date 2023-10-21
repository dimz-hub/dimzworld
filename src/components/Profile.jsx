import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Rightbar from './Rightbar'
import Topbar from './Topbar'

export default function Profile() {
  return (
    <div>
    <div className='sticky top-0  z-[10]'>
   <Topbar />
      </div>
    <div className='w-[100%]'>
        <div className='profileBody pl-[36px] '>
            <div className='mt-[-50px]'>

            <Sidebar />
            </div>
            <div>
                <div className='relative h-[320px]'>
                 <img src='./post/3.jpeg' className='w-[100%] h-[250px] object-cover'/>
                 <img  src='./person/7.jpeg' className=' h-[150px] w-[150px] rounded-[50%] object-cover absolute top-[160px] left-0 right-0 m-[auto]  border-[3px] border-[white]'/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='font-[600] text-[25px]' >Happy Imade</h4>
                    <p>Hello my Friends</p>
                </div>
                <div className='profileBottom mr-[20px]'>
                    <Feed />
                    <Rightbar profile = {true} />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
