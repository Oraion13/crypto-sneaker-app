import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsType, NewsQueryProps } from "../types";

// Header for Request - BING NEWS
const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '53aff60ac4msheb23852847bbbe5p1c925djsn5b601acd8d97',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };

const baseUrl = `https://bing-news-search1.p.rapidapi.com`;

const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  tagTypes: ['get'],
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    // Get news by category(Cryptocurrency)
    getCryptoNews: builder.query<NewsType, NewsQueryProps>({
        query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
})

// Auto generated hook by redux RTK
export const { useGetCryptoNewsQuery } = cryptoNewsApi;