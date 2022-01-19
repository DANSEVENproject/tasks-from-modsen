export const flattenAndSort = (arr) =>
    arr
    .flat()
    .sort((a, b) => a - b);