const flattenAndSort = (arr) =>
    arr
    .filter((item) => item.length > 0)
    .join(',')
    .split(',')
    .sort((a, b) => a - b);

export default flattenAndSort;