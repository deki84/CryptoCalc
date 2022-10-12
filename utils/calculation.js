export default function calculation(value, expense, price) {
  let result = 0;
  if (expense) {
    result = ((value * price) / expense).toFixed(0);
  }
  return result;
}
