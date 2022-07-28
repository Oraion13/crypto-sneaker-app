import { Card, Col, Row, Typography } from "antd";

import { useGetReferenceCurrenciesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Title } = Typography;
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const References: React.FC = () => {
  const { data, isFetching } = useGetReferenceCurrenciesQuery();

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="total-reference-title-container">
        <Title level={2}>Total Reference Currencies</Title>
        <Title level={2}>{data?.data?.stats.total}</Title>
      </div>

      <Row gutter={[32, 32]} className="crypto-card-container">
        {data?.data?.currencies.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Card
              title={`${currency.sign} ${currency.symbol}`}
              extra={
                <img
                  src={`${currency?.iconUrl || demoImage}`}
                  className="crypto-image"
                  alt={`${currency.name}`}
                />
              }
              hoverable
            ></Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default References;
