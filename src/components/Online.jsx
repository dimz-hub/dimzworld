import React from 'react'

export default function Online({user}) {
  return (
    <div>
     <div className='flex items-center gap-[16px] mb-[15px]'>
            <div className='relative '>
              <img src={user.profilePicture} className='w-[40px] h-[40px] rounded-[50%] object-cover'/>
              <span className='absolute w-[12px] h-[12px] rounded-[50%] bg-[limegreen] top-[0px] right-[0px] '></span>
            </div>
            <h3 clas sName='font-[600]'> {user.username}</h3>
          </div>


    </div>
  )
}
