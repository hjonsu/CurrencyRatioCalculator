export default function marketRatio(marketPrice, crystalPrice, quantity) {
  return crystalPrice !== 0
    ? ((marketPrice * quantity) / crystalPrice).toFixed(2)
    : "1.00";
}
