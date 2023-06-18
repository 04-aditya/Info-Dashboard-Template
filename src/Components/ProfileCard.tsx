import { Card, Box, Avatar, Button } from "@mui/material";
import { cardStyle } from "../Styles/ComponentStyles";
import bannerImage from "../Assets/bannerImage.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { linkedInUsername, gitUsername } from "../LinksandUsernames";

export const ProfileCard: any = () => {
  return (
    <Card sx={cardStyle}>
      <img
        src={bannerImage}
        alt="bannerImage"
        style={{ height: "150px", width: "495px" }}
      ></img>
      <Avatar
        sx={{
          position: "absolute",
          height: "150px",
          width: "150px",
          marginTop: "-150px",
          boxShadow: "9",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      >
        A
      </Avatar>
      <Box
        sx={{ height: "250px", width: "100%", backgroundColor: "transparant" }}
      >
        <Box
          sx={{
            height: "70px",
            width: "100%",
            backgroundColor: "transparant",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Link to={`https://github.com/${gitUsername}`} target="_blank">
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                marginLeft: "20px",
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
                marginRight: "20px",
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
            srcSet={`https://streak-stats.demolab.com?user=${gitUsername}&theme=graywhite&hide_border=true&border_radius=0&mode=weekly&ring=39D0B8&fire=39D0B8`}
          />
          <img
            src={`https://streak-stats.demolab.com?user=${gitUsername}&theme=graywhite&hide_border=true&border_radius=0&mode=weekly&ring=39D0B8&fire=39D0B8`}
            alt="githubstats"
          />
        </picture>
      </Box>
    </Card>
  );
};
