import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import {
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";
import LineChart from "./LineChart";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  // Get Coin ID from URL parameter
  const { coinId } = useParams();
  // Periodic statistics
  const [timeperiod, setTimeperiod] = useState("7d");
  // Coin details
  const { data, isFetching } = useGetCoinDetailsQuery(coinId);
  // Coin History
  const { data: coinHistory } = useGetCoinHistoryQuery({ coinId, timeperiod });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  // For filter purpose
  const time = ["1h", "3h", "12h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

  // Details about the coin
  const stats = [
    {
      title: "Price to USD",
      value: `$ ${
        cryptoDetails?.price && millify(Number(cryptoDetails?.price))
      }`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.["24hVolume"] &&
        millify(Number(cryptoDetails?.["24hVolume"]))
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(Number(cryptoDetails?.marketCap))
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(Number(cryptoDetails?.allTimeHigh?.price))
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  // Global statistics
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total &&
        millify(Number(cryptoDetails?.supply?.total))
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(Number(cryptoDetails?.supply?.circulating))
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {data?.data?.coin?.name} ({data?.data?.coin?.symbol}) Price
        </Title>
        <p>
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </Col>

      {
        // Filter
      }
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="Select Timeperiod"
        onChange={(value) => setTimeperiod(value)}
        filterOption={(input, option) =>
          (option!.children as unknown as string).includes(input)
        }
      >
        {time.map((date) => (
          <Option key={date} value={date}>
            {date}
          </Option>
        ))}
      </Select>
      {
        // Chart
      }
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(Number(cryptoDetails?.price))}
        coinName={cryptoDetails?.name}
      />

      {
        // Only the coin details
      }
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails?.name} Value Statistics
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>

          {stats.map(({ icon, title, value }, i) => (
            <Col className="coin-stats" key={i}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>

              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>

        {
          // Global statistic details
        }
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Stats Info
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>

          {genericStats.map(({ icon, title, value }, i) => (
            <Col className="coin-stats" key={i}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>

              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>

      {
        // Detailed log about the coin
      }
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails?.name}?
          </Title>
          {cryptoDetails?.description &&
            HTMLReactParser(cryptoDetails?.description)}
        </Row>
        {
          // External links
        }
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails?.name} Links
          </Title>
          {cryptoDetails?.links?.map((link, i) => (
            <Row className="coin-link" key={i}>
              <Title level={5} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
