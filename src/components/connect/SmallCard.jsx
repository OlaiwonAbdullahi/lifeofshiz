import React from 'react'

function SmallCard() {
  return (
    <div className='absolute flex flex-col justify-center items-center bg-white shadow-lg p-[20px] connect:w-[40%] w-[90%] connect:h-[70%] h-[40%]  left-[5%] connect:bottom-[35px] bottom-[52%]'>
        <img src="/public/images/connectface.png" alt="cartoon" className='connect:w-[100px] connect:h-[100px] w-[50px] h-[50px] mb-[20px]'/>
        <h1 className='text-xl'>Work with me</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis dolorem! Sint?</p>
        <button className='cursor-pointer mt-[20px] bg-[#6b4c2d] flex items-center  text-[#e3dcdc] px-[20px] py-[10px] rounded-full font-Montserrat hover:bg-[#695f4d] transition-all duration-300'>
            Connect
        </button>
    </div>
  )
}

export default SmallCard