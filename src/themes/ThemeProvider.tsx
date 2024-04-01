"use client";
import React from "react";

/**
 * Props interface for the ThemeProvider component.
 */
interface PropTypes {
  children: React.ReactNode; 
}

/**
 * Context object for the theme.
 * Provides a way to pass theme data through the component tree without having to pass props down manually at every level.
 */
export const ThemeContext = React.createContext<IThemeContext | null>(null);

/**
 * ThemeProvider component that manages the theme settings using React context.
 * @param props PropTypes object containing the children components.
 * @returns JSX element wrapping the children components with theme context.
 */
export default function ThemeProvider({ children }: PropTypes): React.JSX.Element {
  // State to manage the current theme.
  const [theme, setTheme] = React.useState<ThemeType>("light");

  /**
   * Function to change the current theme.
   * @param value The new theme value.
   */
  const changeTheme = (value: ThemeType): void => {
    setTheme(value);
  };

  // Provide the theme context with current theme value and changeTheme function to children components.
  return (
    <ThemeContext.Provider value={{ value: theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
