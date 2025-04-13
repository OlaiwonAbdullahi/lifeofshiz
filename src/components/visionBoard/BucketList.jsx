import React from 'react'
const bucketList = [{title:"Smell a flower", imgLink:"/public/images/collageimg1.jpg"},
    {title:"Smell a flower", imgLink:"/images/collageimg1.jpg"},
    {title:"Smell a flower", imgLink:"/images/collageimg1.jpg"},
    
]
function BucketList() {
  return (
    <section className='bg-[#e3dcdc] p-[30px] text-[#6b4c2d]'>
        <h1 className='text-3xl mb-[20px] ml-[20px] font-bold'>Shizrae's Bucket List</h1>
        <div className='bucketListgrid'>
            {bucketList.map((item, index)=>{
                return <div className='bg-white cursor-pointer rounded-[15px]' key={index}>
                    <img className='rounded-tl-[15px] rounded-tr-[15px]' src={item.imgLink} alt={item.title} />
                    <h2 className='text-xl p-[20px]'>{item.title}</h2>
                </div>
            })}
        </div>
    </section>
  )
}

export default BucketList