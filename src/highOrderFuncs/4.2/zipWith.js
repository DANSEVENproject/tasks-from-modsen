export const zipWith = (fn, a0, a1, arr = []) => {
    a0.length <= a1.length ? a0.forEach((item, i) =>
            arr.push(fn(item, a1[i]))) :
        a1.forEach((item, i) => arr.push(fn(item, a0[i])));
    return arr;
}