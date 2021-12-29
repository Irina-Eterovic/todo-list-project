export default function getPrettierDate(timestamp: any) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}
