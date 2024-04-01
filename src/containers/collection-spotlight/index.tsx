import React from 'react'
import Heading from './heading'
import { HEADING, SUBHEADING } from './constant'
import CollectionContainer from './collection-container'

export default function CollectionSpotlight() {
  return (
    <div className='bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] w-full xl:w-[1200px] py-16'>
      <Heading title={HEADING} subtitle={SUBHEADING} />
      <CollectionContainer/>
    </div>
  )
}
