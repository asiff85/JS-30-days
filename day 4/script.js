// let i;
// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {

//         console.log(i)
//     }
// }
// let number = 1, sum = 0;
// while (number <= 10) {

//     sum = sum + number;
//     number++


// }
// console.log(sum);
// let num = 10;
// while (num >= 0) {

//     console.log(num);
//     num--


// }
// do while loop
// let a = 1
// do {

//     console.log(a)
//     a++

// }
// while (a <= 5)

let fac = 6
let factorial = 1;
do {


    factorial = factorial * fac
    fac--

}
while (fac > 0)
console.log(factorial);


// nested loops
for (i = 1; i <= 5; i++) {

    for (j = 1; j <= i; j++) {
        console.log('*');

    }
}
let k = 1;
for (k = 1; k <= 10; k++) {

    if (k === 5) {
        continue;
    }
    console.log(k);
}
for (k = 1; k <= 10; k++) {

    if (k === 7) {
        break;
    }
    console.log(k);
}

