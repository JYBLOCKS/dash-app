import { Coin } from "@/types/coins";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";

const generateChartData = (days: number, current_price: number) => {
  const data = [];
  let currentPrice = current_price || 0;

  const now = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);

    const change = currentPrice * (0.99 + Math.random() * 0.04);
    currentPrice = change;

    data.push({
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      price: Math.round(currentPrice),
      volume: Math.round(Math.random() * 1000 * (1 + (days - i) / days)),
      timestamp: date.getTime(),
    });
  }

  return data;
};

export function PriceChart({ coins }: { coins: Coin }) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    let days = 365;
    switch (selectedPeriod) {
      case "24h":
        days = 1;
        break;
      case "7d":
        days = 7;
        break;
      case "30d":
        days = 30;
        break;
      case "1y":
        days = 365;
        break;
    }

    setChartData(generateChartData(days, coins?.current_price));
  }, [selectedPeriod]);

  const handlePeriodChange = (
    _event: React.MouseEvent<HTMLElement>,
    newPeriod: string
  ) => {
    if (newPeriod !== null) {
      setSelectedPeriod(newPeriod);
    }
  };

  return (
    <Card
      sx={{
        gridColumn: "span 3",
        bgcolor: "background.paper",
        width: isMobile ? "90%" : "60%",
      }}
    >
      <CardHeader
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="div">
              BTC Price History
            </Typography>
            <ToggleButtonGroup
              value={selectedPeriod}
              exclusive
              onChange={handlePeriodChange}
              aria-label="time period"
              size="small"
            >
              <ToggleButton value="24h">24h</ToggleButton>
              <ToggleButton value="7d">7d</ToggleButton>
              <ToggleButton value="30d">30d</ToggleButton>
              <ToggleButton value="1y">1y</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        }
      />
      <CardContent>
        <Box sx={{ height: 300, width: "100%", mt: 2 }}>
          {chartData.length > 0 && (
            <LineChart
              series={[
                {
                  data: chartData.map((item) => item.price),
                  label: "Price (USD)",
                  color: "#F7931A",
                },
              ]}
              xAxis={[
                {
                  data: chartData.map((item) => item.timestamp),
                  scaleType: "time",
                  valueFormatter: (value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  },
                },
              ]}
              yAxis={[
                {
                  valueFormatter: (value: any) => `$${value.toLocaleString()}`,
                },
              ]}
              height={300}
              margin={{ top: 20, right: 30, bottom: 30, left: 60 }}
              slotProps={{
                legend: {
                  position: { vertical: "top", horizontal: "end" },
                },
              }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
