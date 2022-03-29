'use strict';

// const Person = function( firstName,birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // this.calcAge  = function (){
//     //     console.log(2037-this.birthYear)
//     // };
// }

// const obj1 = new Person('Yavuz',1987);
// const obj2 = new Person('Ahmet',1982);

// console.log(obj1)
// Person.prototype.calcAge = function () {
//     console.log(2037-this.birthYear)
// }
// obj1.calcAge()
// obj2.calcAge();

// console.log(obj1.__proto__)

// const Car = function(make,speed){
//     this.speed = speed;
//     this.make = make;
// }
// Car.prototype.accelerate =function(){
//     this.speed+=10;
//     console.log(this.speed);
// }
// Car.prototype.brake =function(){
//     this.speed-=5;
//     console.log(this.speed);
// }
// const BMW = new Car(120);
// const Mercedes = new Car(95);

// BMW.accelerate()
// BMW.accelerate()
// BMW.accelerate()
// BMW.brake()
// BMW.brake()

// class PersonCl {
//     constructor(firstName,birthYear){
//     this.birthYear=birthYear;
//     this.firstName=firstName;
// }
// calcAge (){
//     console.log(2037-this.birthYear)
// }
// }

// const yavuz= new PersonCl("yavuz",1982)
// const eda = new PersonCl("eda",1985);

// console.log(yavuz)
// yavuz.calcAge()

// class Car{
//     constructor(make,speed){
//         this.make = make;
//         this.speed = speed;

//     }
//     accelerate (){
//         this.speed+=10;
//         console.log(this.speed);
//     }
//     brake(){
//         thisspeed+=10;
//         console.log(this.speed);
//     }
//     get speedUS (){
//        return this.speed / 1.6;
//     }
//     set speedUS (speed){
//         this.speed=speed*1.6;
//         console.log(this.speed);

//     }
// }

// const ford = new Car("Ford",120);
// console.log(ford)

// const Person = function (firstName, birthday) {
//   this.firstName = firstName;
//   this.birthday = birthday;
// };
// Person.prototype.calcAge = function () {
//   return console.log(2037 - this.birthday);
// };

// const ahmet = new Person('ahmet', 2007);
// ahmet.calcAge()

// const Student = function(firstName,birthday,course){
//     Person.call(this,firstName,birthday)
//     this.course = course;
// }

// //linking prototype
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce  = function(){
//     return console.log(`My Name is ${this.firstName} and I study ${this.course} now`);
// }
// const mike = new Student("mike",2011,"Javascript");

// mike.introduce()
// mike.calcAge()

// const Car = function(make,speed){
//     this.speed = speed;
//     this.make = make;
// }
// Car.prototype.accelerate = function(){
//     this.speed+=20;
//     console.log(`${this.make}  going at ${this.speed} km/h`);
// } 
// Car.prototype.brake = function(){
//     this.speed-=20;
//     console.log(`${this.make}  going at ${this.speed} km/h`);
// } 
// const EV = function(make,speed,charge){
// Car.call(this,make,speed)
// this.charge=charge;
// }
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge =chargeTo 
// }
// EV.prototype.accelerate = function(){
//     this.speed+=20;
//     this.charge ++
//     console.log(`${this.make}  going at ${this.speed} km/h with a char of ${this.charge}`);
// }
// EV.prototype.brake = function(){
//     this.speed-=20;
//     this.charge --
//     console.log(`${this.make}  going at ${this.speed} km/h with a char of ${this.charge}`);
// }
// const tesla = new EV("tesla",120,90)
// tesla.chargeBattery(75)
// tesla.accelerate()
// tesla.accelerate()
// tesla.brake()
// tesla.accelerate()

// class Account{ 
//     constructor(owner,currency,pin){
//         this.owner = owner;
//         this.currency = currency;
//         this.pin = pin;
//         this.movements = [];
//         this.locale = navigator.language;
//         console.log(`Thanks openenin an account, ${this.owner}`)
//     }
//     deposite(val){
//         this.movements.push(val);

//     }
//     withdraw(val){
//         this.deposite(-val);
//     }
// }

// const acc1 = new Account('yavuz','tl',1111,[])
// acc1.deposite(200)
// acc1.deposite(500)
// acc1.withdraw(150)
// acc1.deposite(200)
// console.log(acc1)

class CarCl {
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed+=20;
        console.log(`${this.make}  going at ${this.speed} km/h`);
    } 
    breake(){
        this.speed-=20;
        console.log(`${this.make}  going at ${this.speed} km/h`);
    } 
}

class EVCl extends CarCl{
    #charge
    constructor(make,speed,charge){
        super(make,speed);
        this.#charge=charge;
    }
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this
    }
    accelerate(){
        this.speed+=20;
        this.#charge ++
        console.log(`${this.make}  going at ${this.speed} km/h with a char of ${this.#charge}`);
        
    return this}
    brake(){
        this.speed-=20;
        this.#charge --
        console.log(`${this.make}  going at ${this.speed} km/h with a char of ${this.#charge}`);
           
    return this
}
    get speedUS(){
        return this.speed / 1.6
    }
    set speedUS(speed){
        return this.speed = speed *1.6
    }
}

const rivian = new EVCl("Rivian",140,90);
rivian.accelerate();
rivian.brake();
rivian.accelerate().accelerate().accelerate().brake();
console.log(rivian.speedUS)