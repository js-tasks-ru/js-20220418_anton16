/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    let newArr = [];
    if(typeof arr === 'undefined') return newArr;
    for (let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}