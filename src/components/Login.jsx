import React from 'react'

export default function Login() {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#f0f2f5]'>
        <div className='w-[70%] h-[70%] loginwrapper' >
            <div>
                <h1 className='text-[50px] font-[800] text-[#1775ee] mb-[10px]'>Dimzworld</h1>
                <p className='text-[24px]'>
                    Connect with friends and the world <br/> around you on Dimzworld
                </p>
            </div>
            <div className='bg-[white] h-[300px] p-[20px] rounded-[10px] flex flex-col justify-between items-center'>
                <input placeholder='Email' className='w-[80%] h-[50px] rounded-[10px] border-[gray] border-[1px] outline-none p-[20px]' />
                <input placeholder='Password' className='w-[80%] h-[50px] rounded-[10px] border-[gray] border-[1px] outline-none p-[20px]' />
                <button className='text-center w-[80%] h-[50px] rounded-[10px] border-none bg-[#1775ee] text-white text-[20px] font-[500] '>Log In</button>
                <p className='text-[#1775ee]'>Forgot Password?</p>
                <button  className='text-center w-[60%] h-[50px] rounded-[10px] border-none bg-[#42b72a] text-white text-[20px] font-[500] '>Create a New Account</button>
            </div>
        </div>     
    </div>
  )
}
