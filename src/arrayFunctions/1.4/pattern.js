export const pattern = (num, arr = [], temp = [], k = num) => {
    for (let i = 0; i < num; i++, k--) {
        for (let j = 1; j < num + 1; j++) {
            temp.push(j);
        }
        temp = temp.concat(temp.splice(0, temp.length - k));
        arr.push(temp.join(''));
        temp = [];
    }
    return arr;
};