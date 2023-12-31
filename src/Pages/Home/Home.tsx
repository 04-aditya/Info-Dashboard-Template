import { Button, Typography } from "@mui/material";
import "./Home.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import homeIllustrion from "../../Assets/home-illustration.svg";
import { appTheme } from "../../Theme";

export const Home = () => {
  return (
    <div className="Home">
      <img
        src={homeIllustrion}
        alt="home-illustration"
        width="400px"
        height="400px"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      ></img>
      <Typography variant="h4" fontFamily="serif">
        Welcome to Info Dashboard Template
      </Typography>
      <div className="Body">
        <Typography>
          This project is a very basic template of a dashboard design to
          showcase various information through tabs and cards.{" "}
        </Typography>
        <Typography>
          It includes data about several professional profiles (eg. Github and
          LinkedIn profiles).
        </Typography>
        <br />
        <Typography>
          Feel free to navigate around using the sidebar. You'll find some dummy
          charts and tables scattered around as well.
        </Typography>
        <Typography>
          In case of any problems, please go through the README of this project
          using the button below.
        </Typography>
      </div>
      <Link
        to={`https://github.com/04-aditya/Info-Dashboard-Template`}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "30px",
            marginY: "50px",
            height: "fit-content",
            background: "#2b3137",
            color: "white",
            "&:hover": {
              backgroundColor: appTheme.palette.primary.main,
              color: "black",
            },
          }}
        >
          <GitHubIcon sx={{ marginRight: "10px" }} />
          Project Repo
        </Button>
      </Link>
    </div>
  );
};
