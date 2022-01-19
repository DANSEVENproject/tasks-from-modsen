export const stringify = (list, str = '') => {
    if (list === null) return 'null';
    str += `${list.data} -> `;
    if (list.next) {
        return stringify(list.next, str);
    } else {
        return str + 'null';
    }
};