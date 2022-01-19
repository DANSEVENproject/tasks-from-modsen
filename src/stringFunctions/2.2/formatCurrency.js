export const formatCurrency = (amount) => {
    let result = String(Math.floor(amount * 100) / 100);
    for (let i = result.length - 1; i != -1; i--) {
        if (
            /\d/.test(+result[i]) &&
            /\d/.test(+result[i - 1]) &&
            /\d/.test(+result[i - 2]) &&
            /\d/.test(+result[i - 3])
        )
            result = result.substr(0, i - 2) + ',' + result.substr(i - 2, result.length);
    }
    return result;
}