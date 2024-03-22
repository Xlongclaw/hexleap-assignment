import Switch from '@/components/switch'
import { BiSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import React from 'react'

export default function ComponentShowcase() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-100'>
      <Switch firstIcon={<BiSun/>} secondIcon={<BsMoonStarsFill/>} onPress={(pos)=>{}}/>
    </div>
  )
}
