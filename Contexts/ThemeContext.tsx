import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

interface ThemeContextProps {
  children?: React.ReactNode;
  startingTheme: string;
}

function ThemeProvider({ children, startingTheme }: ThemeContextProps) {
  const [theme, setTheme] = useState(startingTheme);
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
