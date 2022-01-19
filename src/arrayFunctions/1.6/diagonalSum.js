export const diagonalSum = (arr) => {
    let acc = 0;
    arr.filter(item => item.length !== 0).forEach((item, i) =>
        item.forEach((items, j) => (i === j) ? acc += +items : acc = acc)
    )
    return acc;
}