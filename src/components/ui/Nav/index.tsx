import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Container,
  Box,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  type Theme,
  Stack,
} from "@mui/material";
import {
  Menu as MenuIcon,
  CurrencyBitcoin as BitcoinIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export function Nav() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: "linear-gradient(120deg, #0F172A 0%, #1E293B 100%)",
        pt: 8,
        pb: 8,
      }}
    >
      {/* Navigation */}
      <AppBar position="absolute" color="transparent" elevation={0}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BitcoinIcon sx={{ mr: 1, color: "#F7931A" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              BitcoinViewer
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile ? (
            <Stack direction={"row"} gap={2}>
              <MuiLink component={Link} to="#features">
                <Typography variant="h6">Features</Typography>
              </MuiLink>
              <MuiLink component={Link} to="#pricing">
                <Typography variant="h6">Pricing</Typography>
              </MuiLink>
              <MuiLink component={Link} to="#documentation">
                <Typography variant="h6">Documentation</Typography>
              </MuiLink>
            </Stack>
          ) : (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                  <MuiLink component={Link} to="#features">
                    <Typography variant="h6">Features</Typography>
                  </MuiLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MuiLink component={Link} to="#pricing">
                    <Typography variant="h6">Pricing</Typography>
                  </MuiLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <MuiLink component={Link} to="#documentation">
                    <Typography variant="h6">Documentation</Typography>
                  </MuiLink>
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Hero content */}
      <Container
        maxWidth="lg"
        sx={{ mt: 8, textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "white",
          }}
        >
          Track Bitcoin Prices in Real-Time
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            color: "grey.300",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Monitor Bitcoin values across multiple currencies with our
          comprehensive dashboard. Get instant updates, historical data, and
          powerful analytics tools.
        </Typography>
      </Container>

      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(247,147,26,0.05)",
            filter: "blur(24px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(14,165,233,0.05)",
            filter: "blur(24px)",
          }}
        />
      </Box>
    </Box>
  );
}
