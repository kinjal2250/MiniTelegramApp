// -------------------------------PUBLIC--------------------------------- //

import { TCoin } from "@/types/coin";

export async function getAllCoins(
  currency: string,
  page = 1,
  limit = 30
): Promise<TCoin[]> {
  return fetch(getAllCoinsUrl(currency, page, limit)).then((res) => res.json());
}

export async function getSingleCoin(id: string) {
  return fetch(getSingleCoinUrl(id)).then((res) => res.json());
}

export async function getHistoricalChart(
  id: string,
  days = 365,
  currency: string
) {
  return fetch(getHistoricalChartUrl(id, days, currency)).then((res) =>
    res.json()
  );
}

// ------------------------------PRIVATE--------------------------------- //

const getAllCoinsUrl = (currency: string, page: number, limit: number) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${limit}&page=${page}&sparkline=false`;

const getSingleCoinUrl = (id: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

const getHistoricalChartUrl = (id: string, days = 365, currency: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
