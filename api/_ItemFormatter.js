export default function itemFormatter(remoteItem) {
  const splittedPrice = (remoteItem.price + "").split(".")
  return {
    id: remoteItem.id,
    title: remoteItem.title,
    price: {
      currency: remoteItem.currency_id,
      amount: parseInt(splittedPrice[0]),
      decimals: parseInt(splittedPrice[1]) || 0,
    },
    picture: remoteItem.thumbnail,
    condition: remoteItem.condition,
    free_shipping: remoteItem.shipping.free_shipping,
  };
}