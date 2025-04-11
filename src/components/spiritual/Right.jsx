import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const notes = [{
    title:"Banana post",
    imgLink:"/public/images/collageimg2.jpg",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque repudiandae corrupti odio doloremque? Sequi in accusantium quae excepturi harum?"
},
{
    title:"Banana post",
    imgLink:"/public/images/collageimg2.jpg",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque repudiandae corrupti odio doloremque? Sequi in accusantium quae excepturi harum?"
},
{
    title:"Banana post",
    imgLink:"/public/images/collageimg2.jpg",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque repudiandae corrupti odio doloremque? Sequi in accusantium quae excepturi harum?"
},
]
function Right() {
  return (
    <div className='spiritpost flex flex-col h-[fit-content] w-full md:w-[49%] mt-[25px]'>
            <h1 className='text-3xl mb-[20px] md:text-end'>Devotion</h1>
          {notes.map((item, index)=>{
            return <div key={index} className='mb-[30px] cursor-pointer'>
                <h1 className='text-2xl mb-[15px]'>{item.title}</h1>
                <img className='h-[300px] w-full object-cover object-center' src={item.imgLink} alt={item.title} />
                <p className='mt-[20px]'>{item.desc} <span className='inline-flex items-center text-[#601115] font-bold cursor-pointer'>Read More <MdOutlineKeyboardDoubleArrowRight className='mt-[3px]' /></span></p>
            </div>
          })}
        </div>
  )
}

export default Right