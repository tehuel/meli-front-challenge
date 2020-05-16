import fetch from 'cross-fetch';

export default async (req, res) => {

  const productId = req.query.id;

  // TODO: send requests in parallel

  const informationUrl = encodeURI('https://api.mercadolibre.com/items/' + productId);
  const itemInformationResponse = await fetch(informationUrl);
  const itemInformation = await itemInformationResponse.json();

  // TODO: get all descriptions
  const descriptionUrl = encodeURI('https://api.mercadolibre.com/items/' + productId + '/description');
  const itemDescriptionResponse = await fetch(descriptionUrl);
  const {plain_text: itemDescription} = await itemDescriptionResponse.json();

  const splittedPrice = (itemInformation.price + "").split(".")

  res.json({
    author: {
      name: "Tehuel",
      lastName: "Torres Baldi",
    },
    item: {
      id: itemInformation.id,
      title: itemInformation.title,
      price: {
        currency: itemInformation.currency_id,
        amount: parseInt(splittedPrice[0]),
        decimals: parseInt(splittedPrice[1]) || 0,
      },
      picture: itemInformation.pictures[0].url,
      condition: itemInformation.condition,
      free_shipping: itemInformation.shipping.free_shipping,
      sold_quantity: itemInformation.sold_quantity,
      description: itemDescription,
    }
  })
}
