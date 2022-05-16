/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {  
    return (obj) => {
        if(Object.keys(obj).length === 0) return undefined;
        return path.split('.').reduce((temp, key) => {
            return temp[key];
        }, obj)
    }
}