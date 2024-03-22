"use client"
import { ThemeContext } from "@/themes/ThemeProvider";
import React from "react";

export default function page() {
  const theme = React.useContext(ThemeContext);

  return <div>{theme?.value}
  <button onClick={()=>{theme?.changeTheme('DARK')}} >change theme</button></div>;
}
