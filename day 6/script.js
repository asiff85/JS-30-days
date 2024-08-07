let arr = [10, 25, 33, 44, 75];
console.log(arr);
console.log(arr[0], arr[4]);
// push,pop,shift,unshift
//1.The push method adds one or more elements to the end of an array and returns the new length of the array
//2.The pop method removes the last element from an array and returns that element. This method changes the length of the array.
arr.push(31);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(15, 16);
console.log(arr);

let mapArray = arr.map((i) => {
    return i * i
})
console.log(mapArray);
let fliterArray = arr.filter((i) => {
    return i % 2 === 0;
})
console.log(fliterArray);
arr2 = [5, 10, 10]
let reduceArray = arr2.reduce((acc, value) => {
    return acc + value


})
console.log(reduceArray);

//use a for loop to iterate over the array and log each element to the console in js
let fruits = ['banana', 'mango', 'orange', 'papaya', 'dragon fruit'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for each

fruits.forEach((element) => {
    console.log(element);
})

// two dimentional array
let numbers = [[1, 3, 5, 7, 9],
[0, 2, 4, 6, 8],
[11, 33, 22, 44, 55]]

console.log(numbers);
console.log(numbers[1][2]);