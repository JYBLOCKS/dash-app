import { Coin } from "@/types/coins";

export const getCoins = async (currency: string): Promise<Coin[]> => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin&vs_currency=" +
      currency
  );
  const data = (await response.json()) as Coin[];
  return data;
};
