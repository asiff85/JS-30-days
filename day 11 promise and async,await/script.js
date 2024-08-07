// let p1 = new Promise((resolve, reject) => {
//     console.log('promise1 is pending');
//     setTimeout(() => {

//         resolve(false);

//     }, 5000)

// })

// let p2 = new Promise((resolve, reject) => {
//     console.log('promise2 is pending');
//     setTimeout(() => {
//         console.log('i am a promise and i am rejectd');
//         reject(new Error('i am a promise error'))

//     }, 5000)

// })

// p1.then((value) => {
//     console.log(value);
//     console.log('i am a promise and i am resolved');

// })
// p2.catch((error) => {
//     console.log('i am an error');

// })

// Creat a sequence of promises that simulate fetching data from a server. Chain the promises to the log messages in a specific order in JS

const fetchData1 = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('log from  data 1');
            resolve('data 1')

        }, 2000)

    })
}
const fetchData2 = (data1) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('log from  data 2');
            resolve(`${data1} + data 2`)

        }, 2000)

    })
}
const fetchData3 = (data2) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('log from  data 3');
            resolve(`${data2} + data 3 `)

        }, 2000)

    })
}
fetchData1().then((data1) => {
    return fetchData2(data1);
})
    .then((data2) => {
        return fetchData3(data2)
    })
    .then((final) => {
        console.log('final data: ' + final)
    })
    .catch((error) => {
        console.log('there is an error occured' + error);

    })
