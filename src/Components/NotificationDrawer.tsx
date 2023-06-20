import { Badge, IconButton, Popover, Typography } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const NotificationDrawer = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton size="medium" color="default">
        <Badge color="primary" variant="dot" onClick={handleClick}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2 }}>Welcome to the Info Dashboard!</Typography>
      </Popover>
    </div>
  );
};
