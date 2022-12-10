Array.prototype.sameStructureAs = function (other) {
    if (!(this instanceof Array) || !(other instanceof Array)) return false;

    let str1 = checker(this),
        str2 = checker(other);

    return str1 === str2;

    function checker(array) {
        if (!(array instanceof Array)) return "";
        let newWords = '';
        for (let i = 0; i < array.length; i++) {
            if (array[i] instanceof Array) {
                newWords += i + array[i].length + '[' + checker(array[i]) + ']';
            }
        }
        return newWords;
    }
}