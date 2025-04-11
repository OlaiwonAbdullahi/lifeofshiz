import React from 'react'

function SmallCard() {
  return (
    <div className='absolute flex flex-col justify-center items-center bg-white shadow-lg p-[20px] w-[40%] h-[70%] left-[5%] bottom-[20px]'>
        <img src="" alt="cartoon" />
        <h1 className='text-xl'>Work with me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quis dolorem! Sint?</p>
        <button className='cursor-pointer mt-[20px] bg-[#6b4c2d] flex items-center  text-[#e3dcdc] px-[20px] py-[10px] rounded-full font-Montserrat hover:bg-[#695f4d] transition-all duration-300'>
            Connect
        </button>
    </div>
  )
}

export default SmallCard