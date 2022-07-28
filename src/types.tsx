// ----------------------------- Crypto Coins Data ----------------------------- //

export interface CoinsDataCoins {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  btcPrice: string;
  listedAt: number | undefined;
  change: string;
  rank: number;
  sparkline: Array<string>;
  coinrankingUrl: string;
  "24hVolume": string;
}

interface CoinsDataStats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

interface CoinsData {
  stats: CoinsDataStats;
  coins: Array<CoinsDataCoins>;
}

export interface CoinsType {
  status: string;
  data: CoinsData;
}

// -------------------------------------- Crypto Bing News --------------------------------------

interface NewsValueProviderImageThumbnail {
  _type: string;
  contentUrl: string;
}

interface NewsValueProviderImage {
  _type: string;
  thumbnail: NewsValueProviderImageThumbnail;
}

interface NewsValueProvider {
  _type: string;
  name: string;
  image: NewsValueProviderImage
}

interface NewsValueAbout {
  readLink: string;
  name: string;
}

interface NewsValueImageThumbnail {
  contentUrl: string;
  width: number;
  height: number;
}

interface NewsValueImage {
  thumbnail: NewsValueImageThumbnail;
}

interface NewsValue {
  name: string;
  url: string;
  image: NewsValueImage;
  description: string;
  about: Array<NewsValueAbout>;
  provider: Array<NewsValueProvider>;
  datePublished: string;
  category: string;
}

interface NewsSort {
  name: string;
  id: string;
  isSelected: boolean;
  url: string;
}

export interface NewsType {
  _type: string;
  readLink: string;
  totalEstimatedMatches: number;
  sort: Array<NewsSort>;
  value: Array<NewsValue>;
}

export type NewsQueryProps = {
  newsCategory: string;
  count: number;
};

// -------------------------------------- Components  -------------------------------------- //

export type CryptoCurrenciesProps = { simplified?: boolean };
