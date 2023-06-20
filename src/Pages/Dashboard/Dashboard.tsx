import { Card, Toolbar, Avatar, Typography } from "@mui/material";
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
          justifyContent: "flex-start",
          borderRadius: "15px",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Avatar
          sx={{
            height: "100px",
            width: "100px",
            margin: "15px",
            boxShadow: "9",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          src={gitAvatar}
        />
        <Typography>Aditya Banerjee</Typography>

        <Typography>Dummy Dashboard Card</Typography>
      </Card>
    </div>
  );
};
