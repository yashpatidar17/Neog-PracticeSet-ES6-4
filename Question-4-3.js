//write an ES6 function that takes an array of numbers and convert
// even numbers to odd numbers by adding 1 to that number.

const convertEvenToOdd = arr =>{
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            arr[i] +=1;
        }
    }
    return arr;
}


var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]