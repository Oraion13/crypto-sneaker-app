import "./App.css";
import "antd/dist/antd.css";

import React, { ReactElement } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  CryptoCurrencies,
  CryptoDetails,
  References,
  News,
  HomePage,
} from "./components";

const { Title } = Typography;

const App: React.FC = (): ReactElement => {
  return (
    <>
      <div className="app">
        {
          // Nav-bar
        }
        <div className="navbar">
          <Navbar />
        </div>
        {
          // Main Content
        }
        <div className="main">
          <Layout>
            <div className="routes">
              {
                // Routes to other URLs
              }
              <Routes>
                <Route
                  path="/cryptocurrencies/:coinId"
                  element={<CryptoDetails />}
                />
                <Route
                  path="/cryptocurrencies"
                  element={<CryptoCurrencies />}
                />
                <Route path="/references" element={<References />} />
                <Route path="/news" element={<News />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </div>
          </Layout>
          {
            // Footer
          }
          <div className="footer">
            <Title level={5} style={{ color: "white", textAlign: "center" }}>
              Crypto Sneaker <br />
              All Rights Reserved
            </Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/references">Reference Currencies</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
