import { getCoins } from "@/api/Coin";
import { CurrencyCard } from "@/components/ui/CurrencyCard";
import { Footer } from "@/components/ui/Footer";
import { Nav } from "@/components/ui/Nav";
import { PriceChart } from "@/components/ui/PriceChart";
import { Coin } from "@/types/coins";
import { Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
const App = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const updatePrice = () => {
    setTimeout(() => {
      getCoins("usd").then((coin) => {
        setCoins((prev) => [...prev, { ...coin[0], id: "usd" }]);
      });
      getCoins("eur").then((coin) => {
        setCoins((prev) => [...prev, { ...coin[0], id: "eur" }]);
      });
      getCoins("gbp").then((coin) => {
        setCoins((prev) => [...prev, { ...coin[0], id: "gbp" }]);
      });
    }, 1000);
  };

  useEffect(() => {
    // Initial update
    updatePrice();

    // Set up interval for periodic updates
    // 30 min
    const min = 30 * 60 * 1000;
    const interval = setInterval(updatePrice, min);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
            coin={coins.filter((item) => item.id === "usd")[0]}
            currencySymbol="$"
          />
          <CurrencyCard
            currency="EUR"
            coin={coins.filter((item) => item.id === "eur")[0]}
            currencySymbol="€"
          />
          <CurrencyCard
            currency="GBP"
            coin={coins.filter((item) => item.id === "gbp")[0]}
            currencySymbol="£"
          />
        </Stack>
      </Container>
      <Stack
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <PriceChart coins={coins[0]} />
      </Stack>
      <Footer />
    </Box>
  );
};

export default App;
