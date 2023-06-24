import { Button, Typography } from "@mui/material";
import "./Error.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import errorIllustration from "../../Assets/error-illustration.svg";
import { appTheme } from "../../Theme";

export const Error = () => {
  return (
    <div className="Home">
      <img
        src={errorIllustration}
        alt="home-illustration"
        width="400px"
        height="400px"
        style={{ marginTop: "20px" }}
      ></img>
      <Typography variant="h4" fontFamily="serif">
        Page Not Found!
      </Typography>
      <div className="Body">
        <Typography>
          This path does not have a respective page associated with it.
        </Typography>
        <Typography>
          Please use the sidebar to navigate to existing pages or return to the
          home page using the button below.
        </Typography>
      </div>
      <Link to={"/"}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "30px",
            marginY: "40px",
            height: "fit-content",
            background: appTheme.palette.primary.main,
            color: "black",
            "&:hover": {
              backgroundColor: "#9e9e9e",
              color: "white",
            },
          }}
        >
          <HomeIcon sx={{ marginRight: "10px" }} />
          Home Page
        </Button>
      </Link>
    </div>
  );
};
