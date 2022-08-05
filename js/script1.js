// let productName = 'Droid';
// let pricePerItem = 2000;
// productName = 'Repair droid';
// pricePerItem += 1500;

// console.log(productName, pricePerItem);

// let topSpeed = 160;
// let distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// console.log(`${topSpeed} km/h`);
// console.log(`${distance} km`);
// console.log(`login: ${login}`);
// console.log(isOnline);
// console.log(isAdmin);

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   console.log(message);
//   return message;
// }
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice(5, 200);
// calculateTotalPrice(1, 20);
// calculateTotalPrice(8, 140);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   console.log(message);
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// function isAdult(age) {
//   const passed = age >= 18;
//   console.log(passed);
//   return passed;
// }
// isAdult(20);
// isAdult(15);
// isAdult(28);

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = SAVED_PASSWORD === password;
//   console.log(isMatch);
//   return isMatch;
// }

// isValidPassword('queryismyjam');
// isValidPassword('jqueryismyjam');
// isValidPassword(50);

// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   console.log(message);
//   return message;
// }
// checkAge(18);
// checkAge(20);
// checkAge(15);

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   console.log(message);

//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 150);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   console.log(message);
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(500, 10, 5000);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   console.log(message);
//   return message;
// }
// checkPassword('jqueryismyjam');
// checkPassword('queryismyjam');

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 100);
// checkStorage(100, 150);

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   console.log(isInRange);
//   return isInRange;
// }
// isNumberInRange(10, 50, 25);
// isNumberInRange(10, 50, 5);
// isNumberInRange(10, 50, 55);

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line
//   console.log(canAccessContent);
//   return canAccessContent;
// }
// checkIfCanAccessContent('pro');
// checkIfCanAccessContent('dpro');
// checkIfCanAccessContent('vip');

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   console.log(isNotInRange);
//     console.log(isInRange);
//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   console.log(discount);
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);

// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';
//   console.log(message);
//   return message;
// }

// checkPassword('jqueryismyjam');
// checkPassword('queryismyjam');

// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;

//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//       break;
//   }
//   console.log(price);
//   return price;
// }
// getSubscriptionPrice('starter');
// getSubscriptionPrice('professional');
// getSubscriptionPrice('organization');

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }

//   console.log(message);
//   return message;
// }
// checkPassword('jqueryismyjam');
// checkPassword('queryismyjam');

// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   console.log(message);
//   return message;
// }
// getShippingCost('China');
// getShippingCost('Australia');
// getShippingCost('Germany');
// getShippingCost('Chile');
// getShippingCost('Jamaica');

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   console.log(message);
//   return message;
// }
// getNameLength('Taras');

// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   console.log(substring);
//   return substring;
// }
// getSubstring('Hello world', 3);
// getSubstring('Hello world', 6);
// getSubstring('Hello world', 8);
// getSubstring('Hello world', 0);

// function formatMessage(message, maxLength) {
//   let result;
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
//   console.log(result);
//   return result;
// }

// formatMessage('Curabitur ligula sapien', 16);
// formatMessage('Curabitur ligula sapien', 23);
// formatMessage('Vestibulum facilisis purus nec', 20);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput('Hello world');
// normalizeInput("This ISN'T SpaM");
// normalizeInput('Big SALE');

// function checkForName(fullName, name) {
//   const result = fullName.includes(name);

//   console.log(result);
//   return result;
// }
// checkForName('Bohun Taras', 'Taras');
// checkForName('Bohun Taras', 'taras');

// function checkForSpam(message) {
//   let result;

//   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');

//   console.log(result);
//   return result;
// }
// checkForSpam('Latest technology news');
// checkForSpam('JavaScript weekly newsletter');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Amazing SalE, only tonight!');
