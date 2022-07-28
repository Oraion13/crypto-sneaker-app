import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoinsType } from "../types";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "53aff60ac4msheb23852847bbbe5p1c925djsn5b601acd8d97",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  tagTypes: ['Get'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query<CoinsType, number>({
      query: (count: number) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCoinsQuery } = cryptoApi;