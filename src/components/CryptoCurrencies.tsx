import { Card, Col, Row, Input } from "antd";
import millify from "millify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useGetCoinsQuery } from "../services/cryptoApi";

import { CoinsDataCoins } from "../types";
import { CryptoCurrenciesProps } from "../types";
import Loader from "./Loader";

const CryptoCurrencies = ({ simplified }: CryptoCurrenciesProps) => {
  // simplified for homepage
  const count = simplified ? 10 : 100;

  // Data
  const { data, isFetching } = useGetCoinsQuery(count);
  // Set data
  const [coins, setCoins] = useState<Array<CoinsDataCoins> | undefined>(
    data?.data?.coins
  );
  // To filter coins
  const [searchItem, setSearchItem] = useState<string>("");
  // get initial data
  useEffect(() => {
    setCoins(
      data?.data?.coins?.filter((coin) =>
        coin.name.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [data, searchItem]);

  // Loadin icon
  if (isFetching) return <Loader />;

  // Set filter
  const onChangeSearchItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={onChangeSearchItem}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {coins?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.uuid}>
            <Link to={`/cryptocurrencies/${coin.uuid}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={
                  <img
                    src={`${coin.iconUrl}`}
                    className="crypto-image"
                    alt={`${coin.name}`}
                  />
                }
                hoverable
              >
                <p>Price: ${millify(Number(coin.price))}</p>
                <p>Market Cap: ${millify(Number(coin.marketCap))}</p>
                <p>Daily Change: ${millify(Number(coin.change))}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
