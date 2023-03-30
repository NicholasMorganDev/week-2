
function convert (minutes) {
  seconds = minutes * 60
  return seconds;
}

convert(10)
console.log(seconds)

const array = [0,1,2,3,4,5,6,7,8,9,10]

//cant get to work
let evens = 0
let odds = 0

function calculate (array) {
  for (let i = 0; i < array.length; i++){
    switch (true) {
      case (array[i] % 2 === 0):  
        evens += array[i]
        break;
      case (array[i] % 2 !== 0):
        odds += array[i]
        break;
    }
  }
  return evens;
}

calculate(array)
console.log(evens)



// if (array[i] % 2 === 0){
//   evens += array[i];
// } else {
//   odds += array[i];
// }
