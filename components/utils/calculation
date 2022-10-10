export default function calculation(value, expense, coin) {
  const priceCrypto = coin.current_price;
  let result = 0;
  if (expense) {
    result = ((value * priceCrypto) / expense).toFixed(0);
  }
  return result;
}
