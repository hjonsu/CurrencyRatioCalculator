export default function marketRatio(marketPrice, crystalPrice, quantity) {
  return ((marketPrice * quantity) / crystalPrice).toFixed(2);
}
