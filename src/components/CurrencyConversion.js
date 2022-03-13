import React, { useState } from "react";
import crystalConverter from "../helpers/crystalToGoldRatios";
import conversionRatio from "../helpers/conversionRatio";
import marketRatio from "../helpers/marketRatio";
import Tooltip from "./ToolTip";
import "../styles/styles.css";

export default function CurrencyConversion() {
  const [currencyCheck, setCurrencyCheck] = useState({
    goldToCrystal: 0,
    marketPrice: 0,
    crystalPrice: 0,
    itemQuantity: 1,
  });

  const handleGoldToCrystal = (e) => {
    setCurrencyCheck((prev) => ({
      ...prev,
      goldToCrystal: parseInt(e.target.value),
    }));
  };

  const handleMarketPrice = (e) => {
    setCurrencyCheck((prev) => ({
      ...prev,
      marketPrice: parseInt(e.target.value),
    }));
  };

  const handleCrystalPrice = (e) => {
    setCurrencyCheck((prev) => ({
      ...prev,
      crystalPrice: parseInt(e.target.value),
    }));
  };

  const handleItemQuantity = (e) => {
    setCurrencyCheck((prev) => ({
      ...prev,
      itemQuantity: parseInt(e.target.value),
    }));
  };

  return (
    <div className="root">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <form
          noValidate
          autoComplete="off"
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-currency-ratio">
            <label htmlFor="gold-to-crystal" className="labels">
              Exchange Rate
              <Tooltip image="/ExchangeRate.png" height="200px" width="400px" />
            </label>
            <input
              type="number"
              className="input-fields"
              name="gold-to-crystal"
              onChange={(e) => {
                handleGoldToCrystal(e);
              }}
              value={currencyCheck.goldToCrystal}
              required
            />
          </div>
          <div className="form-currency-ratio">
            <label htmlFor="market-price" className="labels">
              Market Price
              <Tooltip image="/MarketPrices.png" height="100px" width="550px" />
            </label>
            <input
              type="number"
              className="input-fields"
              name="market-price"
              onChange={(e) => {
                handleMarketPrice(e);
              }}
              value={currencyCheck.marketPrice}
              required
            />
          </div>

          <div className="form-currency-ratio">
            <label htmlFor="crystal-price" className="labels">
              Crystal Price
              <Tooltip image="/CrystalPrice.png" height="230px" width="550px" />
            </label>
            <input
              type="number"
              className="input-fields"
              name="crystal-price"
              onChange={(e) => {
                handleCrystalPrice(e);
              }}
              value={currencyCheck.crystalPrice}
              required
            />
          </div>
          <div className="form-currency-ratio">
            <label htmlFor="quantity" className="labels">
              Quantity <br />
              <span style={{ fontSize: "0.8em", fontStyle: "italic" }}>
                (Mari's Secret Shop)
                {/* <Tooltip image="/MarketPrices.png" height="100px" width="550px" /> */}{" "}
              </span>
            </label>
            <input
              type="number"
              className="input-fields"
              name="quantity"
              onChange={(e) => {
                handleItemQuantity(e);
              }}
              value={currencyCheck.itemQuantity}
              required
            />
          </div>
          <div className="conversion-results">
            <strong>
              Pick the lower number!
              {/* {crystalConverter(
                conversionRatio(currencyCheck.goldToCrystal),
                marketRatio(
                  currencyCheck.marketPrice,
                  currencyCheck.crystalPrice,
                  currencyCheck.itemQuantity
                )
              )} */}
            </strong>
            <br />
            Gold to Crystal Ratio:
            <br />
            {conversionRatio(currencyCheck.goldToCrystal)}{" "}
            <img src="/gold.png" width="15px" height="15px" alt="gold" /> : 1.00{" "}
            <img src="/crystals.png" width="15px" height="15px" alt="crystal" />
            <br />
            <br />
            Market Price to Crystal Ratio:
            <br />
            {marketRatio(
              currencyCheck.marketPrice,
              currencyCheck.crystalPrice,
              currencyCheck.itemQuantity
            )}{" "}
            <img src="/gold.png" width="15px" height="15px" alt="gold" /> : 1.00{" "}
            <img src="/crystals.png" width="15px" height="15px" alt="crystal" />
          </div>
        </form>
      </div>
    </div>
  );
}
