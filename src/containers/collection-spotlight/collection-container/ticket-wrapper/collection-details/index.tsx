import { Poppins } from 'next/font/google'
import React from 'react'

interface IProps {
  title:string,
  address:string,
  date:number,
}

const poppins = Poppins({weight:'500',subsets:['latin']})
export default function CollectionDetails({address,date,title}:IProps) {
  return (
    <div className='flex-col flex gap-2 dark:text-white'>
      <h3 className={`font-medium text-sm xl:text-[17px] text-center ${poppins.className}`}>{title}</h3>
      <div className={`flex justify-center text-xs xl:text-[14px] gap-2 ${poppins.className}`}>
        <h4>OCT</h4>
        <div className='w-[1px] my-[5px] dark:bg-white bg-black'></div>
        <h4>SUN</h4>
        <div className='w-[1px] my-[5px] dark:bg-white bg-black'></div>
        <h4>4:30 PM</h4>
      </div>
      {/* <h3 className='text-center'>{date}</h3> */}
      <h3 className='text-center text-[14px] text-[#525965] dark:text-white'>{address}</h3>
    </div>
  )
}
