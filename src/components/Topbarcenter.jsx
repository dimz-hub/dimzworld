import React from 'react'
import { FaSearch } from 'react-icons/fa';
export default function Topbarcenter() {
  return (
    <div>

        <div className='bg-[white] flex items-center rounded-[34px] w-[90%] p-2 gap-[10px] ' >
            <FaSearch />
            <input  placeholder='Search for friend,post or video' className='w-[80%] outline-none'/> 

        </div>



    </div>
  )
}
