'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const labelUserName = document.querySelector('#username');

const containerApp = document.querySelector('.app');
const containerLoginForm = document.querySelector('.login');
const containerLogoutForm = document.querySelector('.logout');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnLogout = document.querySelector('.logout__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, 
and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (juliaDogsArray = [], kateDogsArray = []) {
  const writeAge = function (array) {
    array.forEach(function (dogAge, index) {
      dogAge >= 3
        ? console.log(
            `Dog number is ${
              index + 1
            } is in an adult and is ${dogAge} is years old `
          )
        : console.log(
            `Dog number is ${
              index + 1
            } is in a pupy and is ${dogAge} is years old `
          );
    });
  };
  writeAge(juliaDogsArray.slice(1, -2));
  writeAge(kateDogsArray);
};
const jlD1 = [3, 5, 2, 12, 7];
const kDt1 = [4, 1, 15, 8, 3];
checkDogs(jlD1, kDt1);
console.log(jlD1);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
const calcAverageHumanAge = function (ages = []) {
  let humanAge = ages.map(function (value, i, arr) {
    let newHumanAge;
    if (value <= 2) {
      newHumanAge = 2 * value;
    } else {
      newHumanAge = 4 * value + 16;
    }

    return newHumanAge;
  });
  const newHumanAge = humanAge.filter(function (val, i, arr) {
    return val > 18;
  });
  let average =
    newHumanAge.reduce(function (acc, val, i, arr) {
      return acc + val;
    }) / newHumanAge.length;

  console.log(`${newHumanAge}`);
  console.log(`${average}`);
};
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const test1c = [5, 2, 4, 1, 15, 8, 3]
//   .map(val => (val <= 2 ? val * 2 : 4 * val + 16))
//   .filter(val => val => 18)
//   .reduce(function (acc, val, i, arr) {
//     return acc + val / arr.length;
//   }, 0);
// console.log(`${test1c}`);

//----- USER LOGIN ----------

const createUsernames = function (arr = []) {
  arr.forEach(function (arr) {
    arr.username = arr.owner
      .toLowerCase()
      .split(' ')
      .map(val => val[0])
      .join('');
  });
};
createUsernames(accounts);

let currentAccount;
const loginCheck = function () {
  currentAccount = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );
  if (currentAccount) {
    console.log(`login is success `);
    containerApp.style.opacity = 100;
    containerLoginForm.style.display = 'none';

    containerLogoutForm.style.display = 'flex';
    labelUserName.innerHTML = currentAccount.owner.split(' ')[0];
    updateUI(currentAccount);
  } else {
    console.log(`login is failed `);
    containerApp.style.opacity = 0;
    inputLoginUsername.value = inputLoginPin.value = '';
    containerLoginForm.style.display = 'flex';

    containerLogoutForm.style.display = 'none';
  }
};
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  loginCheck();
});

// ---- UI UPDATEDE -------
const updateUI = function (acc) {
  const displayMovements = function (acc) {
    containerMovements.innerHTML = '';

    acc.movements.forEach(function (mov, i, arr) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
      const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
        i + 1
      } -${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov.toFixed(2)} €</div>
      </div>`;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };
  const displayUserName = function (acc) {
    labelWelcome.textContent = `Welcome to back , ${acc.owner.split(' ')[0]}`;
  };
  const displayBalance = function (acc) {
    acc.balance = acc.movements.reduce((balance, mov, i) => balance + mov);
    labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  };
  const displayCalcSummary = function (acc) {
    labelSumIn.textContent =
      acc.movements
        .filter((val, i) => val > 0)
        .reduce((accum, mov, i) => accum + mov)
        .toFixed(2) + ' €';
    labelSumOut.textContent =
      acc.movements
        .filter((val, i) => val < 0)
        .reduce((accum, mov, i) => accum + mov)
        .toFixed(2) + ' €';
    labelSumInterest.textContent =
      acc.movements
        .filter((val, i) => val > 0)
        .map((deposit, i) => (deposit * acc.interestRate) / 100)
        .filter((val, i) => val >= 1)
        .reduce((accum, val, i) => accum + val, 0)
        .toFixed(2) + ' €';
  };
  displayMovements(acc);
  displayUserName(acc);
  displayBalance(acc);
  displayCalcSummary(acc);
};

//----- TRANSFER MONEY------

const transferMoney = function (currentAcc, toAccUserName, amount) {
  const targetAccount = accounts.find(
    (targetAccount, i) => targetAccount.username === toAccUserName
  );
  if (
    amount > 0 &&
    targetAccount &&
    toAccUserName !== currentAcc.username &&
    currentAcc.balance >= amount
  ) {
    //console.log(`transfer is valid`);
    currentAcc.movements.push(-amount);
    targetAccount.movements.push(amount);
    //console.log(targetAccount);
    updateUI(currentAccount);
  } else {
    //console.log(`transfer is in-valid`);
  }
};
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  transferMoney(
    currentAccount,
    inputTransferTo.value,
    Number(inputTransferAmount.value)
  );
});
// ---- REQUEST LOAN ------

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

/// ---- DELETE USER ------
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex(acc => acc.username === currentAccount.username),
      1
    );
    currentAccount.pin = currentAccount.username = '';
    currentAccount = '';
    loginCheck();
  }
});

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object 
as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. 
(The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, 
so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and 
an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., 
like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
GOOD LUCK 😀
*/
/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const calcRecommendedFood = function (weight) {
  return Math.trunc(weight ** 0.75 * 28);
};
dogs.map(function (prop, i, arr) {
  prop.recommendedFoof = calcRecommendedFood(prop.weight);
  console.log(
    `Sarah has a dog. its ${prop.weight} and it is eating too ${
      prop.recommendedFoof > prop.curFood ? 'much' : 'little'
    }`
  );
});
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
ownersEatTooMuch.push(
  dogs
    .filter((val, i) => val.recommendedFoof > val.curFood)
    .flatMap(dog => dog.owners)
);
ownersEatTooLittle.push(
  dogs
    .filter((val, i) => val.recommendedFoof <= val.curFood)
    .flatMap(dog => dog.owners)
);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

*/
