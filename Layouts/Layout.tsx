import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "../Contexts/ThemeContext";

interface LayoutProps {
  startingTheme: string;
  children?: React.ReactNode;
}

function Layout({ children, startingTheme }: LayoutProps) {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
}

function LayoutNoThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        (theme === "light" && "container-fluid light") || "container-fluid dark"
      }
    >
      {children}
    </div>
  );
}

export default Layout;
