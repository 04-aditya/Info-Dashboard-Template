import { Card, Typography } from "@mui/material";
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
            width: "40%",
            margin: "15px",
            padding: "15px",
            boxShadow: "5",
            minWidth: "583.38px",
            borderRadius: "15px",
          }}
        >
          <Typography>Dummy Area Chart</Typography>
          <StackedAreaChartExample />
        </Card>
        <Card
          sx={{
            width: "40%",
            margin: "15px",
            padding: "15px",
            boxShadow: "5",
            minWidth: "583.38px",
            borderRadius: "15px",
          }}
        >
          <ProfileCard />
        </Card>

        <Card
          sx={{
            width: "40%",
            margin: "15px",
            padding: "15px",
            boxShadow: "5",
            minWidth: "583.38px",
            borderRadius: "15px",
          }}
        >
          <Typography>Dummy Data Table</Typography>
          <DataTableExample />
        </Card>
        <Card
          sx={{
            width: "40%",
            margin: "15px",
            padding: "15px",
            boxShadow: "5",
            minWidth: "583.38px",
            borderRadius: "15px",
          }}
        >
          <Typography>Dummy Pie Chart</Typography>
          <PieChartExample />
        </Card>
      </div>
    </div>
  );
};
