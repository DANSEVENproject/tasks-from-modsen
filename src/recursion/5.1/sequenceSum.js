export const sequenceSum = (begin, end, step) => {
    let count = 0;
    if (begin > end && count === 0) {
        return count;
    }
    if (begin + step > end) return begin;
    else {
        count++;
        return begin + sequenceSum(begin + step, end, step, count);
    }
};