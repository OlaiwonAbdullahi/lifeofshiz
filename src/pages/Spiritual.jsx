import React from 'react'
import Left from '../components/spiritual/Left'
import SpiritualHero from '../components/spiritual/SpiritualHero'
import Right from '../components/spiritual/Right'

function Spiritual() {
  return (
    <div className='mt-14 md:mt-[65px]'>
        <SpiritualHero />
        <section className='w-full p-[20px] flex flex-col md:flex-row justify-between bg-[#0d0c0d] text-[#e3dcdc]'>
            <Left />
            <Right />
        </section>
    </div>
  )
}

export default Spiritual