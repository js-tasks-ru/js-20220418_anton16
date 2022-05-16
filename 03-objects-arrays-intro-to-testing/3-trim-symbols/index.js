/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */

export function trimSymbols(string, size) {
    if(typeof size === 'undefined') size = string.length;
    let newString = [];
    let symbol = '';
    let index = 0;
    for (var i = 0; i < string.length; i++) {
        if(symbol !== string.charAt(i)){
            symbol = string.charAt(i);
            index = 0;
        }
        if(index < size){
            newString.push(string.charAt(i));
            index++;
        }
    }
    return newString.join('');
}