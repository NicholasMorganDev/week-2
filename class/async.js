//The keyword 'async' can be added to any function. This function will now
//automatically return a promise

//In other words, async turns a regular (synchronous) function into an
///asynchronous one.
async function multiplyTwoNumbers(a,b) {
  return a * b;
}

//const answer = multiplyTwoNumber (10, 30) //300
//console.log(answer)

// multiplyTwoNumbers(10, 30)
//   .then (answer => console.log(answer))
//   .catch(console.log)
//   .finally();

//Now we use the keyword "await" (similar to . then() above) to wait
//for the answer (for the promise to resolve)
const answer = await multiplyTwoNumbers(10, 30)
console.log(answer)