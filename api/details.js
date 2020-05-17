import fetch from "cross-fetch";
import itemFormatter from "./_ItemFormatter";

export default async (req, res) => {
  const productId = req.query.id;

  // TODO: send requests in parallel
  const informationUrl = encodeURI(
    "https://api.mercadolibre.com/items/" + productId
  );
  const itemInformationResponse = await fetch(informationUrl);
  const itemInformation = await itemInformationResponse.json();

  const categoryUrl = encodeURI(
    "https://api.mercadolibre.com/categories/" + itemInformation.category_id
  );
  const itemCategoryResponse = await fetch(categoryUrl);
  const itemCategory = await itemCategoryResponse.json();

  // TODO: get all descriptions
  const descriptionUrl = encodeURI(
    "https://api.mercadolibre.com/items/" + productId + "/description"
  );
  const itemDescriptionResponse = await fetch(descriptionUrl);
  const { plain_text: itemDescription } = await itemDescriptionResponse.json();

  let formattedItem = itemFormatter(itemInformation);
  formattedItem.categories = itemCategory.path_from_root.map(
    (categoryInPath) => categoryInPath.name
  );
  formattedItem.sold_quantity = itemInformation.sold_quantity;
  formattedItem.description = itemDescription;

  res.json({
    author: {
      name: "Tehuel",
      lastName: "Torres Baldi",
    },
    item: formattedItem,
  });
};
