import React from 'react'
import Share from './Share'
import Post from './Post'
import { Posts } from '../dummyData'

export default function Feed() {
  return (
    <div>
        <div className='p-[20px]'>

        <Share />
       {
        Posts.map(p => {
          return (
            <Post key ={p.id} post = {p} />
          )
        })
       }
        </div>
    </div>
  )
}
