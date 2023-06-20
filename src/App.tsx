import React from "react";
import "./App.css";
import CustomSideBar from "./Components/CustomSideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { CustomAppBar } from "./Components/CustomAppBar";
import { ThemeProvider, Toolbar } from "@mui/material";
import { appTheme } from "./Theme";
import { Profile } from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <BrowserRouter>
          <CustomAppBar />
          <CustomSideBar />
          <div style={{ marginLeft: "70px" }}>
            <Toolbar />
            <Routes>
              <Route path="/" Component={() => <Home />} />
              <Route path="/dashboard" Component={() => <Dashboard />} />
              <Route path="/profile" Component={() => <Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
