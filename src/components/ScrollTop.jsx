import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Fade, useScrollTrigger, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { tokens } from "../theme";

function ScrollTop(props) {
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Fade in={true}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 999999, }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>

      </Box>
    </Fade>
  );
}

export default ScrollTop