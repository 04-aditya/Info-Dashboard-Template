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
        <Typography variant="h6" noWrap component="div" fontFamily="serif">
          Info Dashboard Template
        </Typography>
        <Box sx={appBarBoxStyle}>
          <TextField
            size="small"
            placeholder="Search..."
            InputProps={{
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
          <Avatar>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
