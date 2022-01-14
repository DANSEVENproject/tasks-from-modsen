export const formatCurrency = (amount) => {
    amount = Math.floor(amount * 100) / 100;
    amount = String(amount);
    for (let i = amount.length - 1; i != -1; i--) {
        if (
            /\d/.test(+amount[i]) &&
            /\d/.test(+amount[i - 1]) &&
            /\d/.test(+amount[i - 2]) &&
            /\d/.test(+amount[i - 3])
        )
            amount =
            amount.substr(0, i - 2) + ',' + amount.substr(i - 2, amount.length);
    }
    return amount;
};