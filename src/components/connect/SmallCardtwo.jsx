import React from 'react'

function SmallCardtwo() {
  return (
    <div className='absolute flex flex-col justify-center items-center bg-white shadow-lg p-[20px] connect:w-[40%] w-[90%] connect:h-[70%] h-[40%] right-[5%] bottom-[35px]'>
         <img src="/public/images/connectface.png" alt="cartoon" className='connect:w-[100px] connect:h-[100px] w-[50px] h-[50px] mb-[20px]'/>
        <h1 className='text-xl'>Get Advice</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis dolorem! Sint?</p>
        <button className='cursor-pointer mt-[20px] bg-[#6b4c2d] flex items-center  text-[#e3dcdc] px-[20px] py-[10px] rounded-full font-Montserrat hover:bg-[#695f4d] transition-all duration-300'>
            Connect
        </button>
    </div>
  )
}

export default SmallCardtwo