import fetch from 'cross-fetch';
import itemFormatter from "./_ItemFormatter";

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

  let formattedItem = itemFormatter(itemInformation);
  formattedItem.sold_quantity = itemInformation.sold_quantity;
  formattedItem.description = itemDescription;

  res.json({
    author: {
      name: "Tehuel",
      lastName: "Torres Baldi",
    },
    item: formattedItem,
  })
}
