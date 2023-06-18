import { Card, Toolbar } from "@mui/material";
import icon from "../../Assets/info.gif";
import "./Home.css";
import { cardStyle } from "../../Styles/ComponentStyles";

export const Home = () => {
  return (
    <div className="App-content">
      <Toolbar />
      <div>Home Page</div>
      <Card style={cardStyle}>
        <img src={icon} alt="" height={"250px"} style={{ padding: "25px" }} />
      </Card>
    </div>
  );
};
