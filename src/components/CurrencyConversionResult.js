import React from "react";
import crystalConverter from "../helpers/crystalToGoldRatios";

export default function CurrencyConversionResult(props) {
  const { goldToCrystal, marketPrice, crystalPrice, itemQuantity } = props;
  return (
    <div style={{ width: "15%" }}>
      {crystalConverter(goldToCrystal, marketPrice, crystalPrice, itemQuantity)}
    </div>
  );
}
