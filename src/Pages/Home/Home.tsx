import { Card, Toolbar } from "@mui/material";
import icon from "../../Assets/info.gif";
import "./Home.css";

export const Home = () => {
  return (
    <div className="App-content">
      <Toolbar />
      <div>Home Page</div>
      <Card
        sx={{
          background: "rgb(58, 163, 158)",
          margin: "15px",
          boxShadow: "9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={icon} alt="" height={"250px"} style={{ padding: "25px" }} />
      </Card>
    </div>
  );
};
