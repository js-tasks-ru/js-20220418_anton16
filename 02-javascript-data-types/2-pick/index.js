/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let entries = Object.entries(obj);
    let newObj = {};
    entries.forEach(entrie => {
        if(fields.includes(entrie[0])){
            newObj[entrie[0]] = entrie[1];
        }
    })
    return newObj;
};