const sumAverage = (arr, acc = 0) => {
    arr.forEach(
        (item) => (acc += item.reduce((accum, elem) => accum + elem) / item.length)
    );
    return Math.floor(acc);
};
export default sumAverage;