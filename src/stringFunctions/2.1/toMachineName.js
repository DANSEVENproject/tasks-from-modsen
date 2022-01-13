const toMachineName = (name, separator) => {
    name = name.toLowerCase().trim();
    for (let i = 0; i < name.length; i++) {
        if (name[i] === ' ' && name[i + 1] !== ' ') {
            name = name.substr(0, i) + separator + name.substr(i + 1, name.length);
        }
    }
    name = name.replace(/ /g, '');
    return name;
};
export default toMachineName;