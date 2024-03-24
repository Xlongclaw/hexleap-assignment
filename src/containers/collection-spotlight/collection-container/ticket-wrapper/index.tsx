import Image from 'next/image'
import React from 'react'
import CollectionDetails from './collection-details'
import CollectionButton from './collection-button'

interface IProps {
collection:ICollection
}

export default function TicketWrapper(props:IProps) {
  return (
    <div className='p-[15px] shadow-2xl flex flex-col gap-3 bg-white dark:bg-[#3B3E47]'>
      <Image src={props.collection.image} alt=''/>
      <div className='border-b-2 border-dashed border-[#A9ACB2]'></div>
      <CollectionDetails/>
      <CollectionButton title={props.collection.collectionType}/>
    </div>
  )
}
