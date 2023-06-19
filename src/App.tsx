import React from "react";
import "./App.css";
import CustomSideBar from "./Components/CustomSideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { CustomAppBar } from "./Components/CustomAppBar";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <CustomAppBar />
          <CustomSideBar />
          <Routes>
            <Route path="/" Component={() => <Home />} />
            <Route path="/dashboard" Component={() => <Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
