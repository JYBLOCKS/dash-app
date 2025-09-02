import { Coin } from "@/types/coins";
import {
  ArrowDownward,
  ArrowUpward,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  type Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

interface CurrencyCardProps {
  currency: string;
  coin: Coin;
  currencySymbol: string;
}

export function CurrencyCard({
  currency,
  coin,
  currencySymbol,
}: CurrencyCardProps) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const isPositiveChange = coin?.price_change_percentage_24h >= 0 || 0;
  const changePercent = coin?.price_change_percentage_24h * 100 || 0;

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
        </Box>

        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          {currencySymbol}
          {coin?.current_price.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
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
              {Math.abs(coin?.price_change_percentage_24h).toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
