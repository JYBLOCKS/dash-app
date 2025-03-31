import {
  Box,
  Container,
  Stack,
  Typography,
  Link as MuiLink,
  type Theme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CurrencyBitcoin } from "@mui/icons-material";

export function Footer() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Box bgcolor={"#1E293B"} sx={{ py: 8, mt: 5 }}>
      <Container maxWidth={"lg"}>
        <Stack
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
        >
          <Stack
            display="flex"
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
          >
            <CurrencyBitcoin color="primary" sx={{ fontSize: 40 }} />
            <Typography fontWeight="bold" variant="h4" color="white">
              BitcoinViewer
            </Typography>
          </Stack>

          <Stack
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent={"space-center"}
            alignItems={"center"}
            gap={isMobile ? 2 : 4}
          >
            <MuiLink component={Link} to="#features">
              Features
            </MuiLink>
            <MuiLink component={Link} to="#pricing">
              Pricing
            </MuiLink>
            <MuiLink component={Link} to="#documentation">
              Documentation
            </MuiLink>
          </Stack>
        </Stack>

        <Stack
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={8}
          pt={8}
          gap={2}
          borderTop={"1px solid #707070"}
        >
          <Typography className="text-gray-400">
            © 2025 Jose Arredondo. All rights reserved.
          </Typography>
          <Stack
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            gap={isMobile ? 2 : 4}
          >
            <MuiLink component={Link} to="#privacy">
              Privacy Policy
            </MuiLink>
            <MuiLink component={Link} to="#terms">
              Terms of Service
            </MuiLink>
            <MuiLink component={Link} to="#cookie">
              Cookie Policy
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
