import React from "react";
import icon from "./Assets/info.gif";
import "./App.css";
import MiniDrawer from "./Components/CustomSideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Home } from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar
          position="fixed"
          color="inherit"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <img
              src={icon}
              alt=""
              style={{
                height: "50px",
                marginLeft: "-15px",
                marginRight: "15px",
              }}
            />
            <Typography variant="h6" noWrap component="div">
              Info Dashboard Template
            </Typography>
          </Toolbar>
        </AppBar>
        <MiniDrawer />
        <Routes>
          <Route path="/" Component={() => <Home />} />
          <Route path="/dashboard" Component={() => <Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
