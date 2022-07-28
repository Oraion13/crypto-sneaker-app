import "./App.css";
import "antd/dist/antd.css";
import React, { ReactElement } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  CryptoCurrencies,
  CryptoDetails,
  Exchanges,
  News,
  HomePage,
} from "./components";

const { Title } = Typography;
const App: React.FC = (): ReactElement => {
  return (
    <>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route
                  path="/cryptocurrencies/:coidID"
                  element={<CryptoDetails />}
                />
                <Route
                  path="/cryptocurrencies"
                  element={<CryptoCurrencies />}
                />
                <Route path="/references" element={<Exchanges />} />
                <Route path="/news" element={<News />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Title level={5} style={{ color: "white", textAlign: "center" }}>
              Crypto Sneaker <br />
              All Rights Reserved
            </Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/references">Exchange</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
