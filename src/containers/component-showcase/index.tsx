import React from 'react'
import NavigationBar from '@/containers/navigation-bar'
import SportsContainer from '@/containers/sports-container'

export default function ComponentShowcase() {
  return (
    <div className='w-full h-screen bg-zinc-100 dark:bg-[#292B32]'>
      <NavigationBar/>
      <div className='bg-gray-100 dark:bg-[#292B32] rounded-xl shadow-sm flex justify-center'>
        <SportsContainer/>
      </div>
    </div>
  )
}
