/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if(typeof obj === 'undefined') return obj;
    if(Object.keys(obj).length === 0) return obj;
    return Object.keys(obj).reduce((temp, key) => {
        temp[obj[key]] = key;
        return temp;
    }, {})
}