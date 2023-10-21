import React from 'react'

export default function CloseFriends({user}) {
  return (
    <li  className = 'flex items-center gap-[15px] mb-[15px]'>
          <img src={user.profilePicture}  className = 'w-[32px] h-[32px] rounded-[50%] object-cover' />
        <p>{user.username}</p>
    </li>
  )
}
