import React from 'react'
import CurrentGoals from '../components/visionBoard/CurrentGoals'
import VisionHero from '../components/visionBoard/VisionHero'
import AmazonShop from '../components/visionBoard/AmazonShop'
import BucketList from '../components/visionBoard/BucketList'

function VisionBoard() {
  return (
    <div className='mt-14 md:mt-[65px] flex flex-col'>
        <VisionHero />
        <CurrentGoals />
        <BucketList />
        <AmazonShop />
    </div>
  )
}

export default VisionBoard