import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../contexts/UIContext";

const panelWidth = 400;

export default function InfoPanel() {
  const { infoPanelShown, showInfoPanel } = useUIContext();
  return (
    <Drawer
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      variant="temporary"
      anchor="right"
      open={infoPanelShown}
      onClose={() => {}}>
      <Box sx={{ justifyContent: "flex-end", display: "flex", padding: 2 }}>
        <IconButton
          aria-label="close panel"
          size="small"
          onClick={() => showInfoPanel(false)}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Box sx={{ width: panelWidth }}></Box>
    </Drawer>
  );
}
