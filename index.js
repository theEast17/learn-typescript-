
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     let success = true; // Simulate success or failure

//     if (!success) {
//         resolve('Operation succeeded'); // Fulfill the promise
//     } else {
//         reject('Operation failed'); // Reject the promise
//     }
// });


// myPromise.then((result) => {
//     console.log(result); // Output: Operation succeeded
// }).catch((error) => {
//     console.log('error')
//     console.log(error); // Output: Operation failed
// }).finally(() => {
//     console.log('Promise has been settled');
// });



let a=20
let b=a

a=a+40
console.log(a,b)