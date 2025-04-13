import React from 'react'

function VisionHero() {
  return (
    <section className="visionhero h-[calc(90vh-65px)]  md:h-[calc(100vh-65px)] text-[#e3dcdc] relative flex items-center justify-center p-[30px]">
    <div className="absolute bg-[hsla(0,0%,0%,0.3)] inset-0" />
    <div className="w-[90%] text-start">
      <h1 className="md:text-7xl text-5xl font-bold font-ubuntu leading-[1.1]">
      Dream It. See It. <br /> Become It.
      </h1>
      <p className="text-xl mt-[10px] font-Montserrat">
      From big life goals to cozy wishlist items — this is my ever-growing vision board, <br />bucket list, and personal Pinterest all in one.
      </p>
    </div>
  </section>
  )
}

export default VisionHero