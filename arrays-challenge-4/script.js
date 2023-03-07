const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
// for (const dog of dogs) {
//   dog.recommendedFood = dog.weight ** 0.75 * 28;
//   console.log(Math.floor(dog.recommendedFood));
// }

dogs.forEach((dog, i) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  console.log(dog.recommendedFood);
});

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? "much" : "little"
  }`
);

// 3.
// ownersEatTooMuch
// ownersEatTooLittle
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4.
//  "Matilda and Alice and Bob's dogs eat too much!"
// and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5.
const dogrecommended = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(dogrecommended);

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
console.log(
  dogs.some(
    (dog) =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);
