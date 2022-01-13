const maxTripletSum = (arg, arr, count = 3) => {
    arr = new Set();
    arg.forEach((item) => arr.add(item));
    arg = [];
    while (count !== 0) {
        arg.push(Math.max(...arr));
        arr.delete(Math.max(...arr));
        count--;
    }
    return arg.reduce((acc, item) => acc + item);
};
export default maxTripletSum;