import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
import { appTheme } from "../Theme";

const drawerWidth = 220;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  borderColor: appTheme.palette.primary.main,
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 20px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function CustomSideBar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const iconArray = [<HomeIcon />, <DashboardIcon />, <GroupsIcon />];

  const pathsArray = ["/", "dashboard", "team"];
  let currentPath = window.location.pathname;
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      onMouseOver={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <Toolbar />
      <List>
        {["Home", "Dashboard", "Team"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ display: "block" }}
            component={Link}
            to={pathsArray[index]}
          >
            <ListItemButton
              sx={{
                margin: "10px",

                borderRadius: "15px",
                minHeight: 48,
                justifyContent: open ? "initial" : "initial",
                px: 2.5,
                backgroundColor: currentPath.endsWith(pathsArray[index])
                  ? appTheme.palette.primary.main
                  : "white",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,

                  justifyContent: "center",
                }}
              >
                {iconArray[index]}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  ml: open ? 3 : "auto",
                  opacity: open ? 1 : 0,
                  color: "black",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
