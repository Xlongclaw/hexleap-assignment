'use client'
import ComponentShowcase from "@/containers/component-showcase";
import { ThemeContext } from "@/themes/ThemeProvider"; 
import React from "react";

/**
 * Page component renders a ComponentShowcase within a themed environment.
 * @returns JSX element representing the Page component.
 */
export default function Page(): React.JSX.Element {
  // Accessing the current theme from the ThemeContext
  const theme = React.useContext(ThemeContext);

  // Render the main component with the theme applied
  return (
    <main className={theme?.value}>
      {/* Render the ComponentShowcase component */}
      <ComponentShowcase />
    </main>
  );
}
