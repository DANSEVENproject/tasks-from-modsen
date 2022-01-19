export class Strings {
    customUpperCase(str) {
        let string = '';
        str.split('').forEach(item => {
            if (/[a-zа-я]/.test(item)) {
                item = String.fromCharCode(item.charCodeAt() - 32);
            }
            string += item;
        });
        return string;
    }
};