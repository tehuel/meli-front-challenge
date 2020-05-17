export default function categoriesFormatter(responseData) {
  const categoryInsideFilters = responseData.filters.findIndex(filter => filter.id === 'category') !== -1;
  return categoryInsideFilters ? getCategoryPathList(responseData) : [getMostPopularCategoryName(responseData)];
}

function getCategoryPathList(responseData) {
  return responseData.filters
    .find(filter => filter.id === 'category')
    .values
    .shift()
    .path_from_root
    .map(categoryInPath => categoryInPath.name);
}

function getMostPopularCategoryName(responseData) {
  return responseData.available_filters
    .find(filter => filter.id === 'category')
    .values
    .sort((catA, catB) => catB.results - catA.results)
    .shift()
    .name;
}