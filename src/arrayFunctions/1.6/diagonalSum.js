const diagonalSum = (arg, acc = 0) => {
    arg.forEach((item, i) =>
        item.forEach((item, j) => (i === j ? (acc += item) : (acc = acc)))
    );
    return acc;
};
export default diagonalSum;