const uniqueSum = (arr) => {
    if (!arr.length) return 0;
    else
        return arr
            .filter((item, i) => arr.indexOf(item) === i)
            .reduce((acc, item) => acc + item);
};
export default uniqueSum;