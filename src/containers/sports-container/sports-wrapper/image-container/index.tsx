import Image from 'next/image'
import React from 'react'

interface PropsType {
  image:any
}

export default function ImageContainer({image}:PropsType) {
  return (
    <div className="sm:h-96 xs:h-72 h-52 w-full overflow-hidden">
      <Image src={image} alt="sport" 
      className="w-full h-full object-cover object-top sm:object-center " />
      </div>
  )
}
