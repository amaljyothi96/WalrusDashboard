import React from "react";
import "./style.css";

function CoinTile(props) {
  const { coin, title, desc } = props;
  return (
    <div className="titleContainer">
      <div>
        <p className="coinTitle">{coin[title]}</p>
        <p className="coinDesc">{coin[desc]}</p>
      </div>
      <div className="alignRight">
        <p className="coinTitle">
          {coin.currency} {coin.value}
        </p>
        <p className="coinVariation">{coin.variationPerc}%</p>
      </div>
    </div>
  );
}

export default CoinTile;
