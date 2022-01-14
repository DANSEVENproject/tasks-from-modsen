export const countDuplicates = (text, count = 0) => {
    text = text.toLowerCase();
    let arr = new Set();
    for (let i = 0; i < text.length; i++) arr.add(text[i]);
    arr.forEach((item) => {
        for (let j = 0, cor = 0; j < text.length; j++) {
            if (item === text[j]) cor++;
            if (cor >= 2) {
                count++;
                break;
            }
        }
    });
    return count;
};