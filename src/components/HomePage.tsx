import { Typography, Col, Row, Statistic } from "antd";
import { useGetCoinsQuery } from "../services/cryptoApi";
import millify from "millify";
import { CryptoCurrencies, News } from "../components";
import { Link } from "react-router-dom";

const { Title } = Typography;

const HomePage: React.FC = () => {
  const { data, isFetching } = useGetCoinsQuery(10);
  const stats = data?.data?.stats;

  if (isFetching) return <>"Loading..."</>;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={stats && millify(stats?.totalCoins)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={stats && millify(stats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={stats && millify(Number(stats?.totalMarketCap))}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={stats && millify(Number(stats?.total24hVolume))}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={stats && millify(stats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  );
};

export default HomePage;
