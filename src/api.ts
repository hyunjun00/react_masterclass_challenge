// const BASE_URL = `https://api.coinpaprika.com/v1`;

import { API_KEY } from "./api_key";

// export function fetchCoins() {
//   return fetch(`${BASE_URL}/coins`).then((response) => response.json());
// }

// export function fetchCoinInfo(coinId: string) {
//   return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
//     response.json()
//   );
// }

// export function fetchCoinTickers(coinId: string) {
//   return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
//     response.json()
//   );
// }

// export function fetchCoinHistory(coinId: string) {
//   /* const endDate = Math.floor(Date.now() / 1000);
//   const startDate = endDate - 60 * 60 * 24 * 7;
//   return fetch(
//     `${BASE_URL}?coinId=${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
//   ).then((response) => response.json()); */
//   return fetch(
//     `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
//   ).then((response) => response.json());
// }

const BASE_URL = `https://api.coingecko.com/api/v3/`;

export function fetchCoins() {
  return fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`
  ).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(
    `${BASE_URL}/coins/${coinId}?localization=false&x_cg_demo_api_key=${API_KEY}`
  ).then((response) => response.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}/tickers`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  /* const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return fetch(
    `${BASE_URL}?coinId=${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json()); */
  const days = Math.floor(Date.now() / 1000);
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`
  ).then((response) => response.json());
}
