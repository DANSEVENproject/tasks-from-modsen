export class Strings {
    customUpperCase(str) {
        for (let i = 0; i < str.length; i++) {
            if (/[a-zа-я]/.test(str[i])) {
                str = str.substr(0, i) +
                    String.fromCharCode(str[i].charCodeAt() - 32) +
                    str.substr(i + 1, str.length);
            }
        }
        return str;
    }
}