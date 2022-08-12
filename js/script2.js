// ! ----------------------------------------- HW2 ARRAYS ---------------------------------

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// console.log(clients);
// console.table(clients);

// Знайти найбільше число
// const numbers = [51, 18, 13, 24, 7, 85, 19, 91, 100];
// let biggestNumber = numbers[0];

// for (const number of numbers) {

//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }

// console.log('Найбільше число:', biggestNumber);

// function checkAge(age) {
//   if (age >= 18) {
//     message = 'You are an adult';
//     return 'You are an adult';
//   }
//   message = 'You are a minor';

//   return 'You are a minor';
// }

// checkAge(17);
// console.log(message);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   let message;

//   if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     console.log('Welcome!');

//     return 'Welcome!';
//   }

//   console.log('Access denied, wrong password!');
//   return 'Access denied, wrong password!';
// }

// checkPassword('mangohackzor');
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     // console.log('Your order is empty!');

//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     // console.log('Your order is too large, not enough goods in stock!');

//     return 'Your order is too large, not enough goods in stock!';
//   }
//   //   console.log('The order is accepted, our manager will contact you');

//   return 'The order is accepted, our manager will contact you';
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// fruits[1] = 'peach';
// fruits[3] = 'banana';

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// console.log(fruits);
// console.log(secondElement);
// console.log(lastElement);

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// function getExtremeElements(array) {
//   const arrayFirstPosition = array.splice(0, 1);
//   const arrayLastPosition = array.splice(array.length - 1, 1);
//   const newArray = arrayFirstPosition.concat(arrayLastPosition);

//   console.log(newArray);

//   return newArray;
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Earth', 'Mars', 'Venus']);
// getExtremeElements(['apple', 'peach', 'pear', 'banana']);

// function splitMessage(message, delimeter) {
//   let words;

//   words = message.split(delimeter);

//   console.log(words);
//   return words;
// }

// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');
// splitMessage('best_for_week', '_');

// function calculateEngravingPrice(message, pricePerWord) {
//   const toArray = message.split(' ');

//   const totalPrice = toArray.length * pricePerWord;

//   console.log(toArray);
//   console.log(totalPrice);

//   return totalPrice;
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('JavaScript is in my blood', 20);
// calculateEngravingPrice('Web-development is creative work', 40);
// calculateEngravingPrice('Web-development is creative work', 20);

// function makeStringFromArray(array, delimeter) {
//   let string;

//     string = array.join(delimeter);

//   console.log(string);
//   return string;
// }

// makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
// makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '');
// makeStringFromArray(['top', 'picks', 'for', 'you'], '_');

// function slugify(title) {
//   const slug = title.split(' ').join('-').toLowerCase();

//   console.log(slug);
//   return slug;
// }

// slugify('Arrays for begginers');
// slugify('English for developer');
// slugify('Ten secrets of JavaScript');
// slugify('How to become a JUNIOR developer in TWO WEEKS');

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   const concatArrays = firstArray.concat(secondArray);

//   if (concatArrays.length > maxLength) {
//     console.log(concatArrays.slice(0, maxLength));
//     return concatArrays.slice(0, maxLength);
//   }

//   console.log(concatArrays);
//   return concatArrays;
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let total = 0;

//   for (i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   console.log(total);

//   return total;
// }

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal();

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// function findLongestWord(string) {
//   let stringToArray = string.split(' ');
//   let mostLettersInWord = 0;
//   let longestWord = '';

//   for (i = 0; i < stringToArray.length; i += 1) {
//     if (stringToArray[i].length > mostLettersInWord) {
//       mostLettersInWord = stringToArray[i].length;
//       longestWord = stringToArray[i];
//     }
//   }
//   console.log(longestWord);

//   return longestWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');
// findLongestWord();

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
// createArrayOfNumbers();

function filterArray(numbers, value) {
  const newArray = [];

  for (i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);

filterArray();
