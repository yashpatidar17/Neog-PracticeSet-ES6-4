//write an ES6 function that takes an array of words and returns an array
// with all its elements whose length is greater than 5.


const filterWords = arr =>{
    let arr1 = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i].length>5){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]