import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const notes = [{
    title:"Banana post",
    imgLink:"/images/collageimg2.jpg",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque repudiandae corrupti odio doloremque? Sequi in accusantium quae excepturi harum?"
},
{
    title:"Banana post",
    imgLink:"/images/collageimg2.jpg",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque repudiandae corrupti odio doloremque? Sequi in accusantium quae excepturi harum?"
},
{
    title:"Banana post",
    imgLink:"/images/collageimg2.jpg",
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cumque repudiandae corrupti odio doloremque? Sequi in accusantium quae excepturi harum?"
},
]
function Left() {
  return (
    <div className='spiritpost items-center flex flex-col h-[fit-content] w-full md:w-[49%] mt-[25px]'>
        <h1 className='text-start w-full text-3xl mb-[20px] font-bold'>Spiritual Growth</h1>
      {notes.map((item, index)=>{
        return <div key={index} className='max-w-[509px] shadow-lg mb-[30px] bg-white text-[#695f4d] rounded-[15px] cursor-pointer'>
            <img className='rounded-tl-[15px] rounded-tr-[15px] h-[300px] w-full object-cover object-center' src={item.imgLink} alt={item.title} />
            <div className='w-full p-[20px]'>
              <h1 className='text-2xl mb-[15px] mt-[20px] font-bold'>{item.title}</h1>
              <p>{item.desc}</p>
              <div className='w-full flex items-center justify-between mt-[20px]'>
                <div className='flex items-center'><img src="/public/images/connectface.png" alt="author" className='w-[30px] h-[30px]'/><span className='ml-[10px]'>Author Name</span></div>
                <span>Date</span>
              </div>
            </div>
        </div>
      })}
    </div>
  )
}

export default Left