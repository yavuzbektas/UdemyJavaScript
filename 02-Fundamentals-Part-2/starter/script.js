// "use sitrict";
// const dolphinsScore = [44, 23, 71];
// const koalasScore = [65, 54, 59];

// let avarageCalc = (scores) => (scores[0] + scores[1] + scores[2]) / 3;

// const avarageDolph = avarageCalc(dolphinsScore);
// const avarageKoalas = avarageCalc(dolphinsScore);

// console.log(avarageCalc(avarageDolph));
// console.log(avarageCalc(avarageKoalas));

// const checkWinner = (avarageDolph, scoreKoaavarageKoalaslas) => {
//   avarageDolph > avarageKoalas
//     ? console.log(`Dolphins win (${avarageDolph} vs ${avarageKoalas} )`)
//     : console.log(`Koalas win (${avarageKoalas} vs ${avarageDolph} )`);
// };
// checkWinner(avarageDolph, avarageKoalas);
/*
function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
}

console.log(calcTip(350));
*/

// const jonas = {
//   firstName: "Yavuz",
//   lastName: "Bektas",
//   job: "teacher",
//   birthDay: 2012,
//   hasLicense: false,
//   calcAge: function () {
//     this.age = 2037 - this.birthDay;
//     return this.age;
//   },
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);

// console.log(
//   `${jonas.firstName} is a ${jonas.calcAge()} years old ${
//     jonas.job
//   } and he has ${
//     jonas.hasLicense ? "a driver license" : " not any driver license"
//   }`
// );

const bills = [22, 295, 176440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
function calcTip(bill) {
  if (bill > 50 && bill < 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
}
let index = 0;
while (index < bills.length) {
  currentTip = calcTip(bills[index]);
  console.log(
    `Your bill is ${bills[index]} and tip is ${currentTip}. Total is : ${
      bills[index] + currentTip
    }`
  );
  tips.push(currentTip);
  totals.push(bills[index] + currentTip);
  index++;
}
console.log(tips, totals);
console.log(``);
