export const uniqueSum = (arr) => {
    if (!arr.length) {
        return 0;
    } else {
        return [...new Set(arr)].reduce((acc, item) => +acc + +item);
    }
}