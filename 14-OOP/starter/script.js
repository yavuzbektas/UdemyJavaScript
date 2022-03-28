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

class Car{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;

    }
    accelerate (){
        this.speed+=10;
        console.log(this.speed);
    }
    brake(){
        thisspeed+=10;
        console.log(this.speed);
    }
    get speedUS (){
       return this.speed / 1.6;
    }
    set speedUS (speed){
        this.speed=speed*1.6;
        console.log(this.speed);

    }
}

const ford = new Car("Ford",120);
console.log(ford)