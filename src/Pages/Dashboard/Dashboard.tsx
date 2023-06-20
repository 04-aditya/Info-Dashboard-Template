import { Card, Toolbar, Avatar } from "@mui/material";
import "./Dashboard.css";
import { StackedAreaChartExample } from "../../ChartsandTables/StackedAreaChartExample";
import { gitAvatar } from "../../LinksandUsernames";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Toolbar />
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
        <Avatar
          sx={{
            height: "110px",
            width: "110px",

            boxShadow: "9",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          src={gitAvatar}
        />
        Aditya Banerjee
      </Card>
    </div>
  );
};
