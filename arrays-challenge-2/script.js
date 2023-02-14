'use strict';

// Map
// Converting euro to dollar
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// // // With forEach
// // const movementsUSDfor = [];
// // for (const mov of movements) movementsUSD.push(mov * eurToUsd);
// // console.log(movementsUSD);

// const movementsDescripitions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescripitions);

/////////////////////////////////////////////////////////////////////////////////////////
// // The filter Method
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// // small challenge
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

///////////////////////////////////////////
// Reduce method
// Reduzir tds elementos de um array em apenas um valor
// ex: somar tds os números de um array

// console.log(movements);

// // saldo total
// // acc = acumulator => bola de neve => soma
// // em cada loop => acumulator atualizado
// // cur = objeto atual
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0); // 0 primeiro valor do acumulador no primeiro loop

// const balance = movements.reduce((acc, cur) => acc + cur, 0); // 0 primeiro valor do acumulador no primeiro loop

// console.log(balance);

// // com for
// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

//////////////////////////////////////////////////////////////////
// Challenge 2: Arrays (Map, Filter, Reduce)

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adultDogs = humanAges.filter(age => age >= 18);

  // Average
  const average = adultDogs.reduce(
    (acc, cur) => acc + cur / adultDogs.length,
    0
  );
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
