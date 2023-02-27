// Write an ES6 function that takes an
//  array of strings and returns a new array with each string capitalized.
const capitalizeWords = arr =>{
    let arr1 = [];
    for(let i=0; i<arr.length; i++){
        arr1.push(arr[i].toUpperCase());
    }

    return arr1;
}
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))