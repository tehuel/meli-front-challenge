import fetch from "cross-fetch";
import categoriesFormatter from "./_categoriesFormatter";
import itemFormatter from "./_ItemFormatter";

export default async (req, res) => {
  if (!req.query.search) {
    return res.status(400).json({ error: "Search parameter is required" });
  }

  // get search results from MercadoLibre API
  const encodedUrl = encodeURI(
    "https://api.mercadolibre.com/sites/MLA/search?q=" + req.query.search
  );
  const response = await fetch(encodedUrl);
  const responseData = await response.json();

  let formattedCategories;
  try {
    formattedCategories = categoriesFormatter(responseData);
  } catch (e) {
    return res.status(400).json({ error: "Error getting search categories" });
  }

  let formattedItems;
  try {
    formattedItems = responseData.results
      .slice(0, 4)
      .map((i) => itemFormatter(i));
  } catch (e) {
    return res.status(400).json({ error: "Error getting search items" });
  }

  return res.json({
    author: {
      name: "Tehuel",
      lastName: "Torres Baldi",
    },
    categories: formattedCategories,
    items: formattedItems,
  });
};
