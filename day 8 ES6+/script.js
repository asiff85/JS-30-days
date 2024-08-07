// Activity 1,2: templete literals
let name = 'reazul islam', age = '25';
let info = `Name=${name} \nAge=${age}`;
console.log(info);

// activity 3,4: Array destructing
// use array destructing to extract the first and the second elements from an array of numbers and log them

let numbers = [10, 40, 50, 23, -15, 90];
let [n1, n2] = numbers;
console.log(n1, n2);

// use object destructing

let obj = {
    title: 'aj himur beye',
    author: 'humayun ahmed',
    year: 1990,
    genre: "Fiction"
}
let { year, genre } = obj;
console.log(year, genre);

// activity 5,6: spread and rest operator
//use the spread operater to create a new array that includes all the elements of an exciting array plus additional elements and log the new arra
numbers = [1, 2, 3, 4, 5];
let numbers1 = [...numbers, 6, 7, 8];
console.log(numbers1);

//use the rest operator in a function to accept an arbitrary number of arguments sum them and return the resul

const sum = (...numbers) => {
    return numbers.reduce((accu, cur) => {
        return accu + cur;
    })
}
console.log(sum(1, 2, 3, 4));
console.log(sum(10, 20, 30, 40));

// activity 7: default perameters

const deParameter = (num1, num2 = 1) => {
    return `number1=${num1} and number2=${num2}`
}
console.log(deParameter(5));
console.log(deParameter(5, 10));

// activity 8: enhanced object literals
// use enhanced object literal to create  an object with methods and properties and log the object
name = "Book Title";
author = "Author Name";
year = 2024;

let book = {
    name,
    author,
    year,
    getSummary() {
        return `${this.name} by ${this.author}, published in ${this.year}`;
    }
};

console.log(book);
console.log(book.getSummary());

// created an object with computed property names based on variables and log the object
let prop1 = 'book1';
let prop2 = 'author1';
let prop3 = 'year1';
const computedFunction = {
    [prop1]: 'To Kill a Mockingbird',
    [prop2]: 'herper lee',
    [prop3]: '1960'
}
console.log(computedFunction);
