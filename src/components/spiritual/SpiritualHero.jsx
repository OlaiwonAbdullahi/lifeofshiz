import React from 'react'

function SpiritualHero() {
  return (
    <section className="spiritualhero h-[calc(100vh-65px)] text-[#e3dcdc] relative flex items-center justify-center p-[30px]">
    <div className="absolute bg-[hsla(0,0%,0%,0.3)] inset-0" />
    <div className="w-[90%] text-start">
      <h1 className="md:text-7xl text-5xl font-bold font-ubuntu leading-[1.1]">
      Spiritual Reflections
      </h1>
      <p className="text-xl mt-[10px] font-Montserrat">
      Stories, prayers, and thoughts that keep me grounded — reflections <br /> from devotion and growth, shared from the heart.
      </p>
    </div>
  </section>
  )
}

export default SpiritualHero