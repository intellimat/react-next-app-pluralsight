import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

interface LayoutProps {
  startingTheme: string;
  children?: React.ReactNode;
}

function Layout({ startingTheme, children }: LayoutProps) {
  const [theme, setTheme] = useState(startingTheme);
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <div
        className={
          (theme === "light" && "container-fluid light") ||
          "container-fluid dark"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
