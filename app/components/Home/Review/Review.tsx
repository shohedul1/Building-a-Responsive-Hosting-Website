import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='pt-20 pb-16'>
        {/* Section Hedding */}
        <SectionHeading heading='Our Client Review'/>
        <div className='w-4/5 mt-16 mx-auto'>
          <ReviewSlider/>
        </div>
    </div>
  )
}

export default Review