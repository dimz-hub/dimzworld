import React from 'react'
import { FaRss } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { Users } from '../dummyData';
import CloseFriends from './CloseFriends';
export default function Sidebar() {

const siderbarIcons =  [
    {
        icon: <FaRss/>,
        name: 'Feed'
    },
    {
        icon: <FaEnvelope/>,
        name: 'Chats'
    },
    {
        icon: <FaVideo/>,
        name: 'Videos'
    },
    {
        icon: <FaUsers/>,
        name: 'Groups'
    },
    {
        icon: <FaBookmark/>,
        name: 'Bookmarks'
    },
    {
        icon: <FaQuestion/>,
        name: 'Questions'
    },
    {
        icon: <FaBriefcase/>,
        name: 'Jobs'
    },
    {
        icon: <FaCalendar/>,
        name: 'Events'
    },
    {
        icon: <FaGraduationCap/>,
        name: 'Courses'
    },
]




  return (
    <div className=' sidebar h-[90vh] pt-[20px] overflow-y-scroll sticky top-[50px] pb-[35px]'>
        <div>
        <ul className=''>
            {
                siderbarIcons.map(data => {
                    return (
                       <li className='flex items-center mb-[20px] gap-[10px]'>
                        <span className='text-[20px]'>
                            {data.icon}
                        </span>
                        <p>{data.name}</p>
                       </li>
                    )
                })
            }
        </ul>
      <button className='w-[150px] p-[10px] rounded-[5px] font-bold bg-[gray] bg-opacity-50 '>Show More</button>
      <hr className='h-[15px] mt-[20px] mb-[20px] '/>
{
 Users.map (u => {
    return (
        <ul className='flex flex-col  gap-[20px]'>
  
        <CloseFriends key= {u.id} user = {u} />
  
   
</ul>
    )
 })
}
        </div>
    </div>
  )
}
