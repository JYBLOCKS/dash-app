import { CurrencyBitcoin as BitcoinIcon } from "@mui/icons-material";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

export function Nav() {
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
