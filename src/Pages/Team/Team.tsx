import { Card } from "@mui/material";
import "./Team.css";
import { StackedAreaChartExample } from "../../ChartsandTables/StackedAreaChartExample";
import { ProfileCard } from "../../Components/ProfileCard";
import { DataTableExample } from "../../ChartsandTables/DataTableExample";
import { PieChartExample } from "../../ChartsandTables/PieChartExample";

export const Team = () => {
  return (
    <div>
      <div className="Team">
        <Card
          sx={{
            width: "90%",
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
      </div>
    </div>
  );
};
