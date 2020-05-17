export default function formatPrice(price) {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: price.currency,
  });
  const floatValue = parseFloat(`${price.amount}.${price.decimals}`);
  return formatter.format(floatValue);
}
