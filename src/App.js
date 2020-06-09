import React from "react";

import { ThemeProvider } from "styled-components";

import Weather from "./pages/Weather";
import GlobalStyles from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Weather toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
