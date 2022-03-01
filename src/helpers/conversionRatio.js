export default function conversionRatio(convRate) {
  return convRate !== 0 ? (convRate / 95).toFixed(2) : "1.00";
}
