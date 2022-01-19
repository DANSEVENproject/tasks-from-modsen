export const reduce = (arr, callback, initialValue) => {
    let count;
    initialValue ? count = initialValue : count = arr[0];
    arr.forEach((item, i) => {
        if (i !== 0) {
            count = callback(count, item);
        } else if (initialValue) {
            count = callback(count, item);
        }
    });
    return count;
};