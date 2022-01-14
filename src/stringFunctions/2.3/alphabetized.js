export const alphabetized = (text, arr = []) => {
    text = text.replace(/[^A-z]/g, '');
    for (let i = 0; i < text.length; i++) arr.push(text[i]);
    arr.sort((a, b) => {
        return (
            (b.toLowerCase() < a.toLowerCase()) - (a.toLowerCase() < b.toLowerCase())
        );
    });
    return arr.join('');
};