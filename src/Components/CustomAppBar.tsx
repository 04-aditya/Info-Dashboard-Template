import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import icon from "../Assets/info.gif";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { gitAvatar } from "../LinksandUsernames";

export const CustomAppBar: any = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <img
          src={icon}
          alt=""
          style={{
            height: "50px",
            marginLeft: "-15px",
            marginRight: "15px",
          }}
        />
        <Typography variant="h6" noWrap component="div">
          Info Dashboard Template
        </Typography>
        <Box
          sx={{
            width: "400px",
            position: "fixed",
            right: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            size="small"
            color="primary"
            placeholder="Search..."
            InputProps={{
              sx: {
                borderRadius: "15px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <IconButton size="medium" color="default">
            <Badge color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar src={gitAvatar}></Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
