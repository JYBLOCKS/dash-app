import { Box, Container, Stack } from "@mui/material";
import { CurrencyCard } from "./components/ui/CurrencyCard";
import { Nav } from "./components/ui/Nav";
import { Footer } from "./components/ui/Footer";
import { PriceChart } from "./components/ui/PriceChart";
const App = () => {
  return (
    <Box>
      <Nav />
      <Container sx={{ my: 4 }}>
        <Stack
          gap={3}
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CurrencyCard
            currency="USD"
            currencySymbol="$"
            initialValue={36452.78}
          />
          <CurrencyCard
            currency="EUR"
            currencySymbol="€"
            initialValue={33845.21}
          />
          <CurrencyCard
            currency="GBP"
            currencySymbol="£"
            initialValue={28976.45}
          />
        </Stack>
      </Container>
      <Stack
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <PriceChart />
      </Stack>
      <Footer />
    </Box>
  );
};

export default App;
