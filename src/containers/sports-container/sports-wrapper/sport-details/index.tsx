import React from 'react'

interface PropsType {
  totalEvents:number;
  sport:string
}

export default function SportDetails({sport,totalEvents}:PropsType) {
  return (
    <div className="bg-[#eeeeee] dark:bg-[#292B32] flex p-2">
        <div className="w-1/2">
          <h3 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">Total Events</h3>
          <h3 className="text-[14px] font-medium">
            {totalEvents} Events
          </h3>
        </div>
        <div>
          <h3 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">Sport</h3>
          <h3 className="text-[14px] font-medium">{sport}</h3>
        </div>
      </div>
  )
}
