import React, {useState} from 'react'
import { FaEllipsisV } from 'react-icons/fa';
import { Users } from '../dummyData';


export default function Post({post}) {
   const [like, setLike] = useState(post.like)
   const [isLike, setIsLike] = useState(false)

   function handleLike() {
    setLike(isLike? like - 1 : like + 1)
    setIsLike(!isLike)
   }

  return (
    <div className='share w-[100%] p-[10px] mt-[20px] rounded-[10px]'>
   <div className='flex items-center justify-between pb-3'>
<div className='flex items-center gap-[8px]'>
    <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} className='w-[32px] h-[32px] object-cover rounded-[50%]' />
    <h3 className='font-[600]'>{Users.filter(u => u.id === post.userId)[0].username}</h3>
    <p className='text-[grey] font-[300]'>{post?.date}</p>
</div>
<FaEllipsisV />

    </div>
    <div>
        <p className='pb-[15px]'>{post?.desc}</p>
        <img src={post?.photo}  className='max-h-[500px]'/>
    </div>
    <div className='flex items-center justify-between mt-[12px]'>
        <div className='flex items-center gap-[5px]'>

        <img src='./like.png'  onClick={handleLike} className='w-[25px]'/>
        <img src='./heart.png'  onClick={handleLike}className='w-[25px]' />
        <p className='text-[15px]'>{like} people like it</p>
        </div>
        <p className='text-[15px]'>{post?.comment} comments</p>
    </div>
    </div>
  )
}
