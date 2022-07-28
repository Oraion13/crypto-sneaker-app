import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CoinHistoryType,
  CoinHistoryQueryProps,
  CoinsType,
  CoinType,
  ReferenceType
} from "../types";

// Headers for API request - COINRANKING
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "53aff60ac4msheb23852847bbbe5p1c925djsn5b601acd8d97",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  tagTypes: ["Get"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Get all coins
    getCoins: builder.query<CoinsType, number>({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    // Get a coin by coin ID
    getCoinDetails: builder.query<CoinType, string | undefined>({
      query: (coindId) => createRequest(`/coin/${coindId}`),
    }),

    // Get all statistics about the coin
    getCoinHistory: builder.query<CoinHistoryType, CoinHistoryQueryProps>({
      query: ({ coinId, timeperiod }) =>
        createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // Get primary currencies
    getReferenceCurrencies: builder.query<ReferenceType, void>({
      query: () => createRequest(`/reference-currencies`)
    })
  }),
});

// Auto generated hooks by redux RTK
export const {
  useGetCoinsQuery,
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
  useGetReferenceCurrenciesQuery
} = cryptoApi;
