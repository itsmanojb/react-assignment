import { useState } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const panelWidth = 400;

export default function InfoPanel() {
  const [open, setOpen] = useState(false);
  return (
    <Drawer
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      variant="temporary"
      anchor="right"
      open={open}
      onClose={() => {}}
    >
      <Box sx={{ justifyContent: 'flex-end', display: 'flex', padding: 2 }}>
        <IconButton aria-label="close panel" size="small" onClick={() => setOpen(false)}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Box sx={{ width: panelWidth }}></Box>
    </Drawer>
  );
}
