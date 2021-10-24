import React from "react";
import "./style.css";
import CoinTile from "../CoinTile";

function TrendGraph(props) {
  const { trendingCoin } = props;
  return (
    <div style={{ width: "100%", height: "40%" }}>
      <p className="title">Trending Coins</p>
      <div className="graphContainer">
        <CoinTile coin={trendingCoin} title="coinID" desc="name" />
      </div>
    </div>
  );
}

export default TrendGraph;
