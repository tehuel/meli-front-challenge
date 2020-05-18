import fetch from "cross-fetch";
import itemFormatter from "./_ItemFormatter";

export default async (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({ error: "Product ID parameter is required" });
  }
  const productId = req.query.id;

  // TODO: could send requests in parallel

  let itemInformation;
  try {
    const informationUrl = encodeURI(
      "https://api.mercadolibre.com/items/" + productId
    );
    const itemInformationResponse = await fetch(informationUrl);
    itemInformation = await itemInformationResponse.json();
  } catch (e) {
    return res.status(400).json({ error: "Error getting Item Information" });
  }

  let itemCategory;
  try {
    const categoryUrl = encodeURI(
      "https://api.mercadolibre.com/categories/" + itemInformation.category_id
    );
    const itemCategoryResponse = await fetch(categoryUrl);
    itemCategory = await itemCategoryResponse.json();
  } catch (e) {
    return res.status(400).json({ error: "Error getting Item Category" });
  }

  let itemDescription;
  try {
    // TODO: get all descriptions
    const descriptionUrl = encodeURI(
      "https://api.mercadolibre.com/items/" + productId + "/description"
    );
    const itemDescriptionResponse = await fetch(descriptionUrl);
    const completeItemDescription = await itemDescriptionResponse.json();
    itemDescription = completeItemDescription.plain_text;
  } catch (e) {
    return res.status(400).json({ error: "Error getting Item Description" });
  }

  let formattedItem;
  try {
    formattedItem = itemFormatter(itemInformation);
    formattedItem.categories = itemCategory.path_from_root.map(
      (categoryInPath) => categoryInPath.name
    );
    formattedItem.sold_quantity = itemInformation.sold_quantity;
    formattedItem.description = itemDescription;
  } catch (e) {
    return res.status(400).json({ error: "Error formatting Item" });
  }

  return res.json({
    author: {
      name: "Tehuel",
      lastName: "Torres Baldi",
    },
    item: formattedItem,
  });
};
