import React from 'react'
import Left from '../components/spiritual/Left'
import SpiritualHero from '../components/spiritual/SpiritualHero'
import Right from '../components/spiritual/Right'

function Spiritual() {
  return (
    <div className='mt-14 md:mt-[65px] bg-[#e3dcdc]'>
        <SpiritualHero />
        <section className='p-[20px] flex flex-col md:flex-row justify-between  text-[#6b4c2d] w-[80%] mx-auto'>
            <Left />
            <Right />
        </section>
    </div>
  )
}

export default Spiritual