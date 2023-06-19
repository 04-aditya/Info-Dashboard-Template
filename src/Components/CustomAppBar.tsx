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
import { appBarBoxStyle } from "../Styles/ComponentStyles";
import profile from "../Assets/profile.jpg";

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
        <Box sx={appBarBoxStyle}>
          <TextField
            size="small"
            color="success"
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
            <Badge color="success" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar src={profile}></Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
