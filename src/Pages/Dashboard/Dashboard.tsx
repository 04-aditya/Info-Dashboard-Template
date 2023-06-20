import { Card } from "@mui/material";
import "./Dashboard.css";
import { StackedAreaChartExample } from "../../ChartsandTables/StackedAreaChartExample";
import { ProfileCard } from "../../Components/ProfileCard";
import { DataTableExample } from "../../ChartsandTables/DataTableExample";
import { PieChartExample } from "../../ChartsandTables/PieChartExample";

export const Dashboard = () => {
  return (
    <div>
      <div className="Dashboard">
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
          <StackedAreaChartExample />
        </Card>
        <Card
          sx={{
            width: "45%",
            margin: "15px",
            padding: "15px",
            boxShadow: "9",

            borderRadius: "15px",
          }}
        >
          <ProfileCard />
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
