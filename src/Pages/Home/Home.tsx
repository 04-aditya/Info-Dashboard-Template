import { Card, Toolbar } from "@mui/material";
import "./Home.css";
import { graphCardStyle } from "../../Styles/ComponentStyles";
import { StackedAreaChartExample } from "../../Charts/StackedAreaChartExample";
import { ProfileCard } from "../../Components/ProfileCard";

export const Home = () => {
  return (
    <div style={{ marginLeft: "70px" }}>
      <Toolbar />
      <div className="Home">
        <Card sx={graphCardStyle}>
          <StackedAreaChartExample />
        </Card>
        <ProfileCard />
      </div>
    </div>
  );
};
