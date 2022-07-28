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

// -------------------------------------- Crypto Bing News -------------------------------------- //

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
  image: NewsValueProviderImage;
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

// -------------------------------------- Coin Details -------------------------------------- //

interface CoinDataAllTimeHigh {
  price: string;
  timestamp: number;
}

interface CoinDataSupply {
  confirmed: boolean;
  circulating: string;
  total: string;
}

interface CoinDataLinks {
  name: string;
  url: string;
  type: string;
}

interface CoinData {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: Array<CoinDataLinks>;
  supply: CoinDataSupply;
  "24hVolume": string;
  marketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  listedAt: number;
  sparkline: Array<string>;
  allTimeHigh: CoinDataAllTimeHigh;
  coinrankingUrl: string;
}

interface CoinDataCoin {
  coin: CoinData;
}

export interface CoinType {
  status: string;
  data: CoinDataCoin;
}

// -------------------------------------- Coin History --------------------------------------

interface CoinHistoryDataHistory {
  price: string;
  timestamp: number;
}

interface CoinHistoryData {
  change: string;
  history: Array<CoinHistoryDataHistory>;
}

export interface CoinHistoryType {
  status: string;
  data: CoinHistoryData;
}

export type CoinHistoryQueryProps = {
  coinId: string | undefined;
  timeperiod: string;
};

// -------------------------------------- Reference Currencies  -------------------------------------- //

interface ReferenceCurrencies {
  uuid: string;
  type: string;
  symbol: string;
  name: string;
  iconUrl: string;
  sign: string;
}

interface ReferenceStats {
  total: number;
}

export interface ReferenceType {
  data: {
    stats: ReferenceStats;
    currencies: Array<ReferenceCurrencies>;
  };
}

// -------------------------------------- Components  -------------------------------------- //

export type CryptoCurrenciesProps = { simplified?: boolean };

export type LineChartProps = {
  coinHistory: CoinHistoryType | undefined;
  currentPrice: string;
  coinName: string | undefined;
};
