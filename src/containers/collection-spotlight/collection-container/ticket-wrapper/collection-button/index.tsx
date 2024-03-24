import React from 'react'

interface IProps {
  title:string
}

export default function CollectionButton({title}:IProps) {
  return (
    <h3 className='bg-[#1D1D1F] text-white p-3 text-[13px] font-medium text-center'>
      {title} Collection
    </h3>
  )
}
