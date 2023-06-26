import {
  AppBar,
  Avatar,
  Box,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import icon from "../Assets/info.png";

import SearchIcon from "@mui/icons-material/Search";
import { gitAvatar } from "../LinksandUsernames";
import { NotificationDrawer } from "./NotificationDrawer";

export const CustomAppBar: any = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "2",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={icon}
            alt=""
            style={{
              height: "50px",
              marginLeft: "-5px",
              marginRight: "20px",
              alignSelf: "center",
            }}
          />

          <Typography
            variant="h5"
            component="div"
            fontFamily="serif"
            alignSelf="center"
          >
            Info Dashboard Template
          </Typography>
        </Box>
        <Box
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginRight: "3%",
            minWidth: "150px",
          }}
        >
          <TextField
            size="small"
            color="primary"
            placeholder="Search..."
            InputProps={{
              sx: {
                borderRadius: "15px",
                minWidth: "50px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <NotificationDrawer />
          <Avatar src={gitAvatar}></Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
