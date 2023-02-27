//Write an ES6 function that accepts an array of integers and
// returns the maximum element in the array. Avoid using in-built methods.

const getMaxElement = arr =>{
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let array = [4,8,3,35,6,0,12,34]
console.log(getMaxElement(array)) // 78