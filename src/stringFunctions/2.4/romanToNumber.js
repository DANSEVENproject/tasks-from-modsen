export const romanToNumber = (number, arr, pos = 0, acc = 0) => {
    arr = [
        { value: 1000, num: 'M' },
        { value: 900, num: 'CM' },
        { value: 500, num: 'D' },
        { value: 400, num: 'CD' },
        { value: 100, num: 'C' },
        { value: 90, num: 'XC' },
        { value: 50, num: 'L' },
        { value: 40, num: 'XL' },
        { value: 10, num: 'X' },
        { value: 9, num: 'IX' },
        { value: 5, num: 'V' },
        { value: 4, num: 'IV' },
        { value: 1, num: 'I' },
    ];
    for (let i = 0; i < arr.length - 1;) {
        number.substr(pos, arr[i].num.length) === arr[i].num ?
            ((acc += arr[i].value), (pos += arr[i].num.length)) :
            i++;
    }
    return acc;
};