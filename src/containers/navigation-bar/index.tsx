import Switch, { switchPositionType } from "@/components/switch"; 
import { ThemeContext } from "@/themes/ThemeProvider"; 
import React from "react";
import { BiSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";

/**
 * NavigationBar component represents the navigation bar with a theme switcher.
 * @returns JSX element representing the NavigationBar component.
 */
const NavigationBar = (): JSX.Element => {
  // Accessing the current theme from the ThemeContext
  const theme = React.useContext(ThemeContext);

  // Function to handle switch press and change theme
  const handleSwitchPress = (position: switchPositionType) => {
    if (position === "left") theme?.changeTheme("dark");
    else theme?.changeTheme("light");
  };

  // Render the navigation bar with a theme switcher
  return (
    <nav className="px-4 md:px-12 lg:px-32 py-8 flex justify-end items-center fixed w-full z-20">
      {/* Render the Switch component with icons and onPress handler */}
      <Switch
        firstIcon={<BiSun />}
        secondIcon={<BsMoonStarsFill />}
        onPress={handleSwitchPress}
      />
    </nav>
  );
};

export default NavigationBar;
