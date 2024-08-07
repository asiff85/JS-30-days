function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + ':the number is even ');
    }
    else console.log(number + ':the number is odd');
}
checkEvenOdd(10);

function square(number) {
    let sq = number * number;
    console.log('square of ' + number + ' is ' + sq);
}
square(11);
square(101);
function maximum(a, b) {
    if (a > b) {
        console.log(a + ' is maximum');
    }
    else console.log(b + ' is maximum');
}
maximum(50, 40);
function concatanate(a, b) {
    return a + b
}

console.log(concatanate('hello,', ' I am asif'));

sum = (a, b) => {
    return a + b;
}
console.log(sum(40, 10));

function msg(name, age) {
    console.log('welcome ' + name + '\nage=' + 25)
}
msg('asif', 35);

//task 6:write an arrow function to check if a string  contains a specific  character and return a boolean value in js
const containCharacter = (str, cha) => {
    return str.includes(cha);
}
console.log(containCharacter('hello', 'e'));
console.log(containCharacter('hello', 'i'));

const def = (name, age = '50') => {
    return name, age;
}
console.log(def('arif'));
// task-9: write a higher-order function that takes a function and a number and calls the function that many  times
const repeatFumction = (fn, num) => {
    for (let i = 0; i <= num; i++) {
        fn();
    }

}
hello = () => {
    console.log('hello from higher order function');
}
repeatFumction(hello, 4); // here function name is send not using string quatation and its important 
//task-10

const higherOrder = (fn1, fn2, value) => {

    fn1(value);
    fn2();

}
hello1 = (value) => {
    let square;
    square = value * value;
    return square;

}
hello2 = () => {
    console.log(hello1(7));
    console.log(hello1(4));
}
higherOrder(hello1, hello2);