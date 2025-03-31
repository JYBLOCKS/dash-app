import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  CircularProgress,
  type Theme,
  useMediaQuery,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  ArrowUpward,
  ArrowDownward,
  Refresh,
} from "@mui/icons-material";

interface CurrencyCardProps {
  currency: string;
  currencySymbol: string;
  initialValue: number;
}

export function CurrencyCard({
  currency,
  currencySymbol,
  initialValue,
}: CurrencyCardProps) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [price, setPrice] = useState(initialValue);
  const [previousPrice, setPreviousPrice] = useState(initialValue);
  const [change, setChange] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const updatePrice = () => {
    setIsLoading(true);
    setPreviousPrice(price);

    // Simulate API call with timeout
    setTimeout(() => {
      const randomChange = (Math.random() - 0.48) * 200; // Slight upward bias
      const newPrice = price + randomChange;
      setPrice(newPrice);
      setChange(randomChange);
      setIsLoading(false);
    }, 1000);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // Initial update
    updatePrice();

    // Set up interval for periodic updates
    const interval = setInterval(updatePrice, 30000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const isPositiveChange = change >= 0;
  const changePercent = (change / previousPrice) * 100;

  return (
    <Card
      sx={{
        width: isMobile ? "98%" : "31%",
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Typography variant="h6" component="div">
            BTC / {currency}
          </Typography>
          <IconButton size="small" onClick={updatePrice} disabled={isLoading}>
            {isLoading ? <CircularProgress size={20} /> : <Refresh />}
          </IconButton>
        </Box>

        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {currencySymbol}
          {price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Chip
            icon={isPositiveChange ? <TrendingUp /> : <TrendingDown />}
            label={`${isPositiveChange ? "+" : ""}${changePercent.toFixed(2)}%`}
            color={isPositiveChange ? "success" : "error"}
            size="small"
            sx={{ mr: 2 }}
          />

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isPositiveChange ? (
              <ArrowUpward fontSize="small" color="success" />
            ) : (
              <ArrowDownward fontSize="small" color="error" />
            )}
            <Typography
              variant="body2"
              color={isPositiveChange ? "success.main" : "error.main"}
              sx={{ ml: 0.5 }}
            >
              {currencySymbol}
              {Math.abs(change).toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
