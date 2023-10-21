import React from 'react'
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

export default function Topbarright() {
  return (
    <div className='flex ml-[40px] gap-[40px] items-center '>
        <div className='flex items-center gap-[20px] font-[600] text-white'>
            <p>Homepage</p>
            <p>Timeline</p>
        </div>
        <div className='flex gap-[25px] items-center text-white'>
            <div className='relative  w-[22px] h-[40px] pt-[10px]'>
            <FaUser size={17} /> 
                <span className='mr-[15px] absolute top-[4px] bg-[red] rounded-[50%]  flex items-center w-[14px] text-white text-[9px] justify-center left-[8px]'>1</span>
            </div>
            <div className='relative  w-[22px] h-[40px] pt-[10px]'>
            <FaEnvelope size={17} /> 
                <span className='mr-[15px] absolute top-[4px] bg-[red] rounded-[50%]  flex items-center w-[14px] text-white text-[9px] justify-center left-[8px]'>1</span>

            </div>
            <div className='relative  w-[22px] h-[40px] pt-[10px]'>
            <FaBell size={17}/>  
                <span className='mr-[15px] absolute top-[4px] bg-[red] rounded-[50%]  flex items-center w-[14px] text-white text-[9px] justify-center left-[8px]'>1</span>

            </div>
        </div>
        <img src='./1.jpeg'  className ='w-[32px] h-[32px] rounded-[50%] object-cover ml-[30px]' />
    </div>
  )
}

