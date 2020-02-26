/*
// With built-in functions.
function FindIntersection(strArr) {
    const [arr1, arr2] = strArr.map(s => s.split(', '));
    let intersection = arr1.filter(element => arr2.includes(element));
    return intersection;   
}
*/

// Without built-in functions.
// Using hash map
function FindIntersection(strArr) {
    // Create variables to hold 2 array elements
    const [arr1, arr2] = strArr.map(s => s.split(', '));
    // Hash map to hold first array.
    const finalHash = {};
    // Final array of matching elements, if exists.
    const finalArr = [];

    // Add elements of first array to hash map.
    for (const num of arr1) {
        finalHash[num] = true;
    }

    // Iterate second array.
    for (const num of arr2) {
        // If element matches element of first array, push element to
        // finalArr of matching elements.
        if (finalHash[num]) {
            finalArr.push(num);
        }
    }
    // Return array if matches found.
    // Else return 'No matches!'.
    return finalArr.length ? finalArr.join(', ') : 'No Matches!';
}

let arr = ['1, 3, 4, 7, 14', '1, 2, 4, 13, 14'];
console.log(FindIntersection(arr));
