export const countDuplicates = (text) => {
    let count = 0;
    [...new Set(text.toLowerCase())].forEach(item => {
        for (let i = 0, cor = 0; i < text.length; i++) {
            if (item === text.toLowerCase().split('')[i]) cor++;
            if (cor >= 2) {
                count++;
                break;
            }
        }
    });
    return count;
}