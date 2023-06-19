import { Card, Toolbar } from "@mui/material";
import "./Home.css";
import { StackedAreaChartExample } from "../../ChartsandTables/StackedAreaChartExample";
import { ProfileCard } from "../../Components/ProfileCard";
import { DataTableExample } from "../../ChartsandTables/DataTableExample";
import { PieChartExample } from "../../ChartsandTables/PieChartExample";

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
        <Card
          sx={{
            width: "45%",
            margin: "15px",
            padding: "15px",
            boxShadow: "9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <DataTableExample />
        </Card>
        <Card
          sx={{
            width: "45%",
            margin: "15px",
            padding: "15px",
            boxShadow: "9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <PieChartExample />
        </Card>
      </div>
    </div>
  );
};
