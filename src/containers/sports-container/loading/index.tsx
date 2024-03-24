import React from "react";
import {Bars} from 'react-loader-spinner'
export default function Loading() {
  return (
    <div className="h-[40rem] flex items-center justify-center">
      <Bars height={32} color="#738FFF"/>
    </div>
  );
}
