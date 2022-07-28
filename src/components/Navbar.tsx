import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { BrowserRouter as Route } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const logo = require("../images/logo.png");

const { Title } = Typography;
const { Item } = Menu;

const Navbar: React.FC = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={logo} size="large"></Avatar>
          <Title level={2} className="logo">
            <Link to="/">Crypto Sneaker</Link>
          </Title>
        </div>
        <Menu theme="dark">
          <Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Item>
          <Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Item>
          <Item icon={<MoneyCollectOutlined />}>
            <Link to="/references">Exchanges</Link>
          </Item>
          <Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Item>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
