import { Card, Avatar, Typography } from "@mui/material";
import "./Profile.css";
import { gitAvatar, resumeDriveID } from "../../LinksandUsernames";

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
        <br />
        <Typography variant="overline">My Resume</Typography>
        <object
          data={`https://drive.google.com/uc?export=view&id=${resumeDriveID}`}
          type="application/pdf"
          width="100%"
          height="550"
        >
          <iframe
            title="Resume"
            src={`https://drive.google.com/uc?export=view&id=${resumeDriveID}`}
            style={{ width: "100%", height: "550px" }}
          ></iframe>
        </object>
      </Card>
    </div>
  );
};

// https://drive.google.com/file/d/1cMe-aVsSEaDoYiivvwVTqkTtPst6O7Db/view?usp=sharing
