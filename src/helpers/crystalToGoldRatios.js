export default function crystalConverter(conversionRatio, marketRatio) {
  return conversionRatio > marketRatio
    ? "You should buy with gold."
    : "You should buy with crystals.";
}
