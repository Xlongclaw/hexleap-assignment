"use client";
import ComponentShowcase from "@/containers/component-showcase";
import { ThemeContext } from "@/themes/ThemeProvider";
import React from "react";

export default function Page() {
  const theme = React.useContext(ThemeContext);
  return (
    <main className={theme?.value}>
      <ComponentShowcase />
    </main>
  );
}
