const arithmeticSequenceSum = (a, r, n, acc = 0) => {
    for (let i = 0, re = 0; i < n; i++) {
        if (i !== 0) re++;
        acc += a + re * r;
    }
    return acc;
};
export default arithmeticSequenceSum;