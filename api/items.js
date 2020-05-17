import fetch from 'cross-fetch';
import categoriesFormatter from "./_categoriesFormatter";
import itemFormatter from "./_ItemFormatter";

export default async (req, res) => {

  if (!req.query.search) {
    res
      .status(400)
      .json({
        author: {
          name: "Tehuel",
          lastName: "Torres Baldi",
        },
        status: "400",
        error: "`search` parameter cannot be empty",
    })
  }

  const encodedUrl = encodeURI('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.search);
  const response = await fetch(encodedUrl);
  const responseData = await response.json();

  const formattedCategories = categoriesFormatter(responseData);
  const formattedItems = responseData.results.map(i => itemFormatter(i));

  res.json({
    author: {
      name: "Tehuel",
      lastName: "Torres Baldi",
    },
    categories: formattedCategories,
    items: formattedItems,
  })
}
