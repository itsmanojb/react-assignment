import { useState } from "react";
import { Outlet } from "react-router";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import AppNavBar from "./AppNavbar";
import IconToolbar from "./IconToolbar";
import InfoPanel from "./InfoPanel";
import { AppConfig } from "../utils/AppConfig";

export default function AppLayout() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const { iconDrawerWidth, iconDrawerExpandedWidth } = AppConfig;

  function handleDrawerToggle(arg: string) {
    setDrawerOpened(() => arg === "show");
  }

  return (
    <>
      <Box sx={{ paddingInlineStart: `${iconDrawerWidth}px` }}>
        <CssBaseline />
        <AppNavBar />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerOpened
              ? `${iconDrawerExpandedWidth}px`
              : iconDrawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerOpened
                ? `${iconDrawerExpandedWidth}px`
                : iconDrawerWidth,
            },
          }}>
          <IconToolbar
            drawer={drawerOpened}
            onDrawerToggle={(arg) => handleDrawerToggle(arg)}
          />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Box
            paddingInlineStart={
              drawerOpened
                ? `${iconDrawerExpandedWidth - iconDrawerWidth}px`
                : 0
            }>
            <Outlet />
          </Box>
        </Box>
      </Box>
      <InfoPanel />
    </>
  );
}
