import React from 'react'
import SmallCard from './SmallCard'
import SmallCardtwo from './SmallCardtwo'
import {
    PiTiktokLogoLight,
    PiInstagramLogo,
    PiPinterestLogoBold,
    PiYoutubeLogo,
    PiTwitterLogo,
    PiFacebookLogo
  } from "react-icons/pi";
function Card() {
  return (
    <div className='relative w-[90%] bg-white mx-auto mt-[50px] shadow-lg flex connect:flex-row flex-col items-start h-[800px] connect:h-[500px]'>
        <div className='connect:w-1/2 w-full connect:mt-[25px] mt-[15px] ml-[25px] flex  h-1/2 connect:h-full justify-between'>
            <h1 className='text-xl font-bold text-[#695f4d]'>Connect with me</h1>
            {/*<div className='flex  mr-[10px]'>
            <PiTiktokLogoLight className='w-[20px] h-[20px] mx-[5px] cursor-pointer' />
            <PiInstagramLogo className='w-[20px] h-[20px] mx-[5px] cursor-pointer' />
            <PiPinterestLogoBold className='w-[20px] h-[20px] mx-[5px] cursor-pointer' />
            <PiYoutubeLogo className='w-[20px] h-[20px] mx-[5px] cursor-pointer' />
            <PiTwitterLogo className='w-[20px] h-[20px] mx-[5px] cursor-pointer' />
            <PiFacebookLogo className='w-[20px] h-[20px] mx-[5px] cursor-pointer' />
            </div>*/}
        </div>
        <img className='connect:w-1/2 w-full h-1/2 connect:h-full object-cover' src="/images/collageimg1.jpg" alt="cardimg" />
        <SmallCard />
        <SmallCardtwo />
    </div>
  )
}

export default Card