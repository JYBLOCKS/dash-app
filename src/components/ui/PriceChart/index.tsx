import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  type Theme,
  useMediaQuery,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const generateChartData = (days: number, startPrice: number) => {
  const data = [];
  let currentPrice = startPrice;

  const now = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);

    // Random price movement with slight upward trend
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

export function PriceChart() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    let days = 7;
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

    setChartData(generateChartData(days, 35000));
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
                  valueFormatter: (value) => `$${value.toLocaleString()}`,
                },
              ]}
              height={300}
              margin={{ top: 20, right: 30, bottom: 30, left: 60 }}
              slotProps={{
                legend: {
                  hidden: false,
                  position: { vertical: "top", horizontal: "right" },
                },
              }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
