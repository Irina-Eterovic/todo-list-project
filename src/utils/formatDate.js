export default function getPrettierDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}