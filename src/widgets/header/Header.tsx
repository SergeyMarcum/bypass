import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Badge,
} from "@mui/material";
import { Bell, Gear, List } from "@phosphor-icons/react";

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <IconButton color="inherit">
          <List />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Моё приложение
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={3} color="error">
            <Bell />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Gear />
        </IconButton>
        <Avatar sx={{ ml: 2 }}>U</Avatar>
      </Toolbar>
    </AppBar>
  );
}
