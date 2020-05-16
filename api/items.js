import fetch from 'cross-fetch';

export default async (req, res) => {
  const newQuery = new URLSearchParams();
  newQuery.append("q", req.query.search);

  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?${newQuery.toString()}`);
  const { available_filters, results } = await response.json();

  const formattedItems = results.map(item => {
    const splittedPrice = (item.price + "").split(".")
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: parseInt(splittedPrice[0]),
        decimals: parseInt(splittedPrice[1]) || 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    };
  })

  const formattedCategories = available_filters
    .find(filter => filter.id === 'category')
    .values
    .sort((catA, catB) => catB.results - catA.results)
    .map(category => `${category.name} (${category.results})`)

  res.json({
    author: {
      name: "Tehuel",
      lastName: "Torres Baldi",
    },
    categories: formattedCategories,
    items: formattedItems,
  })
}
