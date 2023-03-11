import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/CustomLayout/Index";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import Offers from "./pages/Offers";
import NewsLetter from "./pages/NewsLetter";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import { ColorModeContext } from "./helpers/ColorModeContext";
import { DarkTheme, LightTheme } from "./Global_Styles";

function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  //mode === "dark" ? DarkTheme : LightTheme
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === "dark" ? DarkTheme : LightTheme}>
        <CssBaseline />
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="Hire" element={<Hire />} />
              <Route path="Offers" element={<Offers />} />
              <Route path="Newsletter" element={<NewsLetter />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
