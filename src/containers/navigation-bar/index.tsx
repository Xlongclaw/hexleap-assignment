import Switch, { switchPositionType } from '@/components/switch'
import { ThemeContext } from '@/themes/ThemeProvider'
import React from 'react'
import { BiSun } from 'react-icons/bi'
import { BsMoonStarsFill } from 'react-icons/bs'

const NavigationBar = () => {
  const theme = React.useContext(ThemeContext);

  const handleSwitchPress = (position:switchPositionType) =>{
    if(position === 'left') theme?.changeTheme('dark')
    else theme?.changeTheme('light')
  }
  return (
    <nav className=' px-4 md:px-12 lg:px-32 py-8 flex justify-between items-center fixed w-full z-20'>
      <h4 className='text-sm'></h4>
      <Switch firstIcon={<BiSun/>} secondIcon={<BsMoonStarsFill/>} onPress={handleSwitchPress}/>
    </nav>
  )
}

export default NavigationBar