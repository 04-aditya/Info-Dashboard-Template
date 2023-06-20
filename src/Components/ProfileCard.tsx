import { Box, Avatar, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import {
  linkedInUsername,
  gitUsername,
  gitAvatar,
  profileBanner,
} from "../LinksandUsernames";

export const ProfileCard: any = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={profileBanner}
        alt="profileBanner"
        style={{ height: "160px", width: "100%" }}
      ></img>
      <Avatar
        sx={{
          position: "absolute",
          height: "160px",
          width: "160px",
          marginTop: "-150px",
          boxShadow: "9",
          "&:hover": {
            transform: "scale(1.15)",
          },
        }}
        src={gitAvatar}
      />
      <Box
        sx={{ height: "240px", width: "100%", backgroundColor: "transparant" }}
      >
        <Box
          sx={{
            height: "50px",
            width: "100%",
            backgroundColor: "transparant",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignContent: "center",
            marginTop: "15px",
            marginBottom: "-15px",
          }}
        >
          <Link to={`https://github.com/${gitUsername}`} target="_blank">
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                width: "135px",
                marginLeft: "45px",
                height: "fit-content",
                background: "#2b3137",
                color: "white",
                "&:hover": {
                  backgroundColor: "#39D0B8",
                  color: "black",
                },
              }}
            >
              <GitHubIcon sx={{ marginRight: "10px" }} />
              GITHUB
            </Button>
          </Link>
          <Link
            to={`https://www.linkedin.com/in/${linkedInUsername}`}
            target="_blank"
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                width: "135px",
                marginRight: "45px",
                height: "fit-content",
                background: "#0077B5",
                color: "white",
                "&:hover": {
                  backgroundColor: "#39D0B8",
                  color: "black",
                },
              }}
            >
              <LinkedInIcon sx={{ marginRight: "10px" }} />
              LinkedIN
            </Button>
          </Link>
        </Box>
        <picture>
          <source
            media="(prefers-color-scheme: default)"
            srcSet={`https://streak-stats.demolab.com?user=${gitUsername}&theme=graywhite&hide_border=true&border_radius=0&ring=39D0B8&fire=39D0B8&card_width=650`}
          />
          <img
            src={`https://streak-stats.demolab.com?user=${gitUsername}&theme=graywhite&hide_border=true&border_radius=0&ring=39D0B8&fire=39D0B8&card_width=583.38`}
            alt="githubstats"
          />
        </picture>
      </Box>
    </Box>
  );
};
