export const pattern = (num) => {
    let arr = [],
        k = num;
    for (let i = 0; i < num; i++, k--) {
        let temp = [];
        for (let j = 1; j < num + 1; j++) {
            temp.push(j);
        }
        temp = temp.concat(temp.splice(0, temp.length - k));
        arr.push(temp.join(''));
    }
    return arr;
}