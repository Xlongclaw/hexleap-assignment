import React from "react";

interface PropsType {
  title: string;
  onClick:()=>void
}

export default function BlueButton({ title,onClick }: PropsType) {
  return (
    <button onClick={onClick} className="bg-[#2C9CF0] text-white px-5 py-2 text-[14px] rounded">
      {title}
    </button>
  );
}
