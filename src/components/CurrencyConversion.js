import React, { useState } from "react";
import crystalConverter from "../helpers/crystalToGoldRatios";

export default function CurrencyConversion() {
  const [currencyCheck, setCurrencyCheck] = useState({
    goldToCrystal: null,
    marketPrice: null,
    crystalPrice: null,
    itemQuantity: null,
  });

  const handleGoldToCrystal = (e) => {
    setCurrencyCheck({
      currencyCheck: { ...currencyCheck, goldToCrystal: e.target.value },
    });
  };

  const handleMarketPrice = (e) => {
    setCurrencyCheck({
      currencyCheck: { ...currencyCheck, marketPrice: e.target.value },
    });
  };

  const handleCrystalPrice = (e) => {
    setCurrencyCheck({
      currencyCheck: { ...currencyCheck, crystalPrice: e.target.value },
    });
  };

  const handleItemQuantity = (e) => {
    setCurrencyCheck({
      currencyCheck: { ...currencyCheck, itemQuantity: e.target.value },
    });
  };

  return (
    <form class="form-currency-ratio">
      <div class="form-currency-ratio">
        <label for="gold-to-crystal">Currency Exchange Rate: </label>
        <input
          type="number"
          name="gold-to-crystal"
          onChange={(e) => {
            handleGoldToCrystal(e);
          }}
          value={currencyCheck.goldToCrystal}
          required
        />
      </div>
      <div class="form-currency-ratio">
        <label for="market-price">Enter Market Price: </label>
        <input
          type="number"
          name="market-price"
          onChange={(e) => {
            handleMarketPrice(e);
          }}
          value={currencyCheck.marketPrice}
          required
        />
      </div>
      <div class="form-currency-ratio">
        <label for="crystal-price">
          Enter Crytal Price (e.g. Mari Secret Shop):
        </label>
        <input
          type="number"
          name="crystal-price"
          onChange={(e) => {
            handleCrystalPrice(e);
          }}
          value={currencyCheck.crystalPrice}
          required
        />
      </div>
      <div class="form-currency-ratio">
        <label for="quantity">Enter Item Quantity: </label>
        <input
          type="number"
          name="quantity"
          onChange={(e) => {
            handleItemQuantity(e);
          }}
          value={currencyCheck.itemQuantity}
          required
        />
      </div>
      <div class="form-currency-ratio">
        <button
          onClick={crystalConverter(
            currencyCheck.goldToCrystal,
            currencyCheck.marketPrice,
            currencyCheck.crystalPrice,
            currencyCheck.itemQuantity
          )}
        >
          Check
        </button>
      </div>
    </form>
  );
}
