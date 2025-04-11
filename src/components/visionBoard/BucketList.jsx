import React from 'react'
const bucketList = [{title:"Smell a flower", imgLink:"/public/images/collageimg1.jpg"},
    {title:"Smell a flower", imgLink:"/public/images/collageimg1.jpg"},
    {title:"Smell a flower", imgLink:"/public/images/collageimg1.jpg"},
    
]
function BucketList() {
  return (
    <section className='bg-[#695f4d] p-[30px]'>
        <h1 className='text-3xl text-[#e3dcdc] mb-[20px] ml-[20px]'>Shizrae's Bucket List</h1>
        <div className='bucketListgrid'>
            {bucketList.map((item, index)=>{
                return <div className='bg-[#601115] cursor-pointer' key={index}>
                    <img src={item.imgLink} alt={item.title} />
                    <h2 className='text-xl p-[20px] text-[#e3dcdc]'>{item.title}</h2>
                </div>
            })}
        </div>
    </section>
  )
}

export default BucketList