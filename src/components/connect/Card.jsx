import React from 'react'
import SmallCard from './SmallCard'
import SmallCardtwo from './SmallCardtwo'

function Card() {
  return (
    <div className='relative w-[70%] bg-white mx-auto mt-[50px] shadow-lg flex items-start h-[500px]'>
        <h1 className='w-1/2 mt-[25px] ml-[25px] text-4xl font-bold text-[#695f4d]'>Connect with me</h1>
        <img className='w-1/2 h-full object-cover' src="/images/collageimg1.jpg" alt="cardimg" />
        <SmallCard />
        <SmallCardtwo />
    </div>
  )
}

export default Card