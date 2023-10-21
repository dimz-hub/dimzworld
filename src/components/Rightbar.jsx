import React from 'react'
import { Users } from '../dummyData'
import Online from './Online'


export default function Rightbar({profile}) {

function HomeRightBar() {
  return (
    <div>
    <div className='flex items-center gap-[12px] mb-[20px]'>
      <img src='./gift.png' className='w-[40px]' />
      <p>
        <b>Pola Foster</b> and <b>3 other friends </b> have a <br/> birthday today
      </p>
    </div>
    <div>
      <img src='./ad.png' className='rounded-[10px] mb-[20px]' />
    </div>
    <div>
      <h3 className='font-[600] mb-[25px]'>Online Friends</h3>
      {
        Users.map(u => {
          return (
            <Online key= {u.id} user = {u}  />
          )
        })
      }
    
  
    
    </div>
  </div>
  )
}

function ProfileRightBar () {
  return (
    <div>
      <div className='mb-[30px]'>
        <h3 className='font-[600] mb-[10px]'>User Information</h3>
        <div className='flex flex-col gap-[15px]'>

        <div className='flex items-center gap-[7px]'>
          <span>City:</span>
          <span className='font-[300]'>New York</span>
        </div>
        <div className='flex items-center gap-[7px]'>
          <span>From:</span>
          <span  className='font-[300]'>Madrid</span>
        </div>
        <div className='flex items-center gap-[7px]'>
          <span>Relationship:</span>
          <span className='font-[300]'>Complicated</span>
        </div>
        </div>
      </div>
      <div>
        <h3 className='font-[600] mb-[15px]'>User friends</h3>
        <div>
          <div className='flex flex-wrap justify-between'>
            {
            Users.map(u => {
              return (
          <div key = {u.id} className='flex flex-col w-[100px] overflow-hidden'> 

                <img  src= {u.profilePicture} alt='' className='w-[100px] h-[100px] rounded-[7px] object-cover'/>
                <p className='text-[15px] text-center'>  {u.username}</p>
                </div>
                )
              })  
            }
          </div>
        </div>
      </div>
    </div>
  )
}


  return (
    <div className=' mt-[20px]'>
      {
         profile ?
         <ProfileRightBar />:
        <HomeRightBar />
      }
    </div>
  )
}
