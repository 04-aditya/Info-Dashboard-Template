import { Card, Avatar, Typography } from "@mui/material";
import "./Profile.css";
import { gitAvatar } from "../../LinksandUsernames";

export const Profile = () => {
  return (
    <div className="Profile">
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

        <Typography>Dummy Profile Card</Typography>
      </Card>
    </div>
  );
};
