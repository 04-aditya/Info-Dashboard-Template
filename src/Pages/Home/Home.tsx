import { Card, Toolbar } from "@mui/material";
import "./Home.css";
import { StackedAreaChartExample } from "../../Charts/StackedAreaChartExample";
import { ProfileCard } from "../../Components/ProfileCard";

export const Home = () => {
  return (
    <div style={{ marginLeft: "70px" }}>
      <Toolbar />
      <div className="Home">
        <Card
          sx={{
            width: "55%",
            margin: "15px",
            padding: "15px",
            boxShadow: "9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <StackedAreaChartExample />
        </Card>
        <ProfileCard />
      </div>
    </div>
  );
};
