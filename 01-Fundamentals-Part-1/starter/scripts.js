//console.log("selamlar");
const marksBIMHeight = 1.69;
const jhonBIMHeight = 1.95;
const marksBIMMass = 78;
const jhonBIMMass = 92;

function calculate(mass, height) {
  BMI = this.mass / this.height ** 2;
  return BMI;
}

const marksBIM = calculate((mass = marksBIMMass), (height = marksBIMHeight));
const jhonBIM = calculate((mass = jhonBIMMass), (height = jhonBIMHeight));
console.log("Marks BIM :", marksBIM);
console.log("Jhon BIM :", jhonBIM);
//let markHigerBMI = marksBIM > jhonBIM;

//console.log("Mark BIM is higher than Jhon BIM :", markHigerBMI);
if (marksBIM > jhonBIM) {
  console.log(`Marks BMI (${marksBIM}) is higher than Jhons BMI (${jhonBIM})`);
}

const testData = 1;
let dolphinsScore;
let koalasScore;
const minScore = 100;

if (testData === 1) {
  dolphinsScore = [96, 108, 89];
  koalasScore = [88, 91, 110];
} else if (testData === 2) {
  dolphinsScore = [97, 112, 101];
  koalasScore = [109, 95, 123];
} else if (testData === 3) {
  dolphinsScore = [97, 112, 101];
  koalasScore = [109, 95, 106];
}

function avarage(scores) {
  let avarageValue = 0.0,
    total = 0.0;
  for (let index = 0; index < scores.length; index++) {
    const element = scores[index];
    total += element;
  }
  avarageValue = total / scores.length;
  return avarageValue;
}
let avarageDolphin = avarage(dolphinsScore);
let avarageKolas = avarage(koalasScore);
console.log(avarageDolphin);
console.log(avarageKolas);
if (avarageDolphin > avarageKolas) {
  console.log("dolphis winner");
} else if (avarageDolphin < avarageKolas) {
  console.log("koalas winner");
} else {
  console.log("draw");
}
