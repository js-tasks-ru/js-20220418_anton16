/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let newArr = [...arr];
    return newArr.sort((a,b)=>{
        if(param === 'asc') return a.localeCompare(b, undefined, { caseFirst: 'upper' });
        else return b.localeCompare(a, undefined, { caseFirst: 'lower' });
    });
}