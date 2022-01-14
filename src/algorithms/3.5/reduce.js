export const reduce = (arr, callback, initialValue) => {
    let count = 0;
    if (initialValue) count = initialValue;
    for (let i = 0; i < arr.length; i++) {
        count = callback(count, arr[i]);
    }
    return count;
};