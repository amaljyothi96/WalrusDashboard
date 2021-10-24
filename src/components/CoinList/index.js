import React from "react";
import "./style.css";
import CoinTile from "../CoinTile";

const coinArray = [
  {
    coinID: "BTC",
    name: "Bitcoin",
    value: "2,447.21",
    currency: "US$",
    variation: "less",
    variationPerc: 0.25,
  },
  {
    coinID: "BTC",
    name: "Ethereum",
    value: "12,000",
    currency: "₹",
    variation: "less",
    variationPerc: 0.12,
  },
  {
    coinID: "XRP",
    name: "XRP",
    value: "12,000",
    currency: "₹",
    variation: "more",
    variationPerc: 1.24,
  },
  {
    coinID: "BTC",
    name: "Bitcoin",
    value: "12,000",
    currency: "₹",
    variation: "less",
    variationPerc: 2.56,
  },
];

function CoinList(props) {
  const generateListConatiner = () => {
    return (
      <div className="listWrapperContainer">
        <div className="listWrapper">
          {coinArray.map((item) => (
            <CoinTile coin={item} title="name" desc="coinID" />
          ))}
        </div>
        <p className="viewAll">View All</p>
      </div>
    );
  };
  return (
    <div style={{ width: "90%" }}>
      <p className="title">Ideal for new investors</p>
      {generateListConatiner()}
    </div>
  );
}

export default CoinList;
