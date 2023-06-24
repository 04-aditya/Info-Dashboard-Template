import { Card } from "@mui/material";
import "./DevSettings.css";

export const DevSettings = () => {
  return (
    <div className="DevSettings">
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
        Developer Settings
      </Card>
    </div>
  );
};
