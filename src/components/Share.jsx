import React from 'react'
import { FaImage } from 'react-icons/fa';
import { FaTag } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';




export default function Share() {
  return (
    <div className='share w-[100%] h-[170px] rounded-[10px] '>
        <div className='p-[10px]'>

        <div className='flex items-center gap-[8px]'>
             <img src='./1.jpeg' className='w-[50px] h-[50px] object-cover rounded-[50%]' /> 
            <input placeholder={`What's on your mind?`} className='w-[80%] outline-none'/>
        </div>
        </div>
        <hr className='m-[20px]'/>
        <div className='flex items-center justify-between m-[20px]'>
            <div className='flex items-center gap-[10px]'>
                <div className='flex items-center'>
                    <span className='text-[tomato] text-[20px]'><FaImage />  </span>
                    <p>Photo or video</p>
                </div>
                <div className='flex items-center'>
                    <span className='text-[20px] text-[blue]'> <FaTag />  </span>
                    <p>Tag</p>
                </div>
                <div className='flex items-center'>
                    <span className='text-[20px] text-[green]'> <FaMapMarker /> </span>
                    <p>Location</p>
                </div>
                <div className='flex items-center gap-[5px]'>
                    <span className='text-[yellow] text-[20px]'><FaSmile />  </span>
                    <p>Feelings</p>
                </div>
            </div>
            <button className = 'p-1 bg-[green] text-white rounded-[5px]'>Share</button>
        </div>
    </div>
  )
}
