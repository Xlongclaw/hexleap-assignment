import React from 'react'
import NavigationBar from '@/containers/navigation-bar'
import SportsContainer from '@/containers/sports-container'
import CollectionSpotlight from '../collection-spotlight'

export default function ComponentShowcase() {
  return (
    <div className='w-full h-screen bg-[#F7F7F8] dark:bg-[#292B32] '>
      <NavigationBar/>
      <div className='bg-gray-100 dark:bg-[#292B32] border-y border-neutral-200 dark:border-neutral-800 py-16 flex flex-col items-center justify-center'>
        <SportsContainer/>
        <CollectionSpotlight/>
      </div>
    </div>
  )
}
