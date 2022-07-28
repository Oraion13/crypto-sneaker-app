import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
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
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <>
      <div className="nav-container">
        {
          // Logo name
        }
        <div className="logo-container">
          <Avatar src={logo} size="large" />
          <Title level={2} className="logo">
            <Link to="/">Cryptoverse</Link>
          </Title>
          <Button
            className="menu-control-container"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MenuOutlined />
          </Button>
        </div>

        {activeMenu && (
          <Menu theme="dark">
            <Item icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Item>
            <Item icon={<FundOutlined />}>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Item>
            <Item icon={<MoneyCollectOutlined />}>
              <Link to="/references">Reference Currencies</Link>
            </Item>
            <Item icon={<BulbOutlined />}>
              <Link to="/news">News</Link>
            </Item>
          </Menu>
        )}
      </div>
    </>
  );
};

export default Navbar;
