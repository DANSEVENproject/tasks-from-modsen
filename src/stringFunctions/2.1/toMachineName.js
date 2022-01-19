export const toMachineName = (name, separator) => {
    let str = '';
    [...name.toLowerCase().trim()].forEach((item, i) => {
        if (item === ' ' && /[A-zА-я0-9]/.test([...name.toLowerCase().trim()][i + 1])) {
            str += separator;
        } else {
            str += item;
        }
    });
    return str.replace(new RegExp(`[^A-zА-я0-9${separator}]`, 'g'), '');
}