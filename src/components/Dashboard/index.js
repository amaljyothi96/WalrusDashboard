import React from "react";
import "./style.css";
import Intro from "../Introduction";
import TrendGraph from "../TrendGraph";
import CoinList from "../CoinList";

function Dashboard(props) {
  const user = {
    name: "John",
  };

  const trendingCoin = {
    coinID: "BTC",
    name: "Bitcoin",
    value: "2,447.21",
    currency: "US$",
    variation: "less",
    variationPerc: 0.25,
  };

  return (
    <div className="container">
      <div className="contained">
        <Intro user={user} />
        <TrendGraph trendingCoin={trendingCoin} />
      </div>
      <div className="contained">
        <CoinList />
      </div>
    </div>
  );
}

export default Dashboard;
