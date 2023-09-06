// create object using object literals
const player = {};
// properties
player.name = 'Small Nirob';
player.speciality = 'batsman';
// method
player.bat = function(){
    console.log('swing your bat');
}
// console.log(player);
// player.bat();

const student ={
    name: 'Panda',
    job: 'khai anda',
    ball: function(){
        console.log('throw ball')
    }, 
    
    salary: 100000
}
// student.ball()

// Object constructor
const person = new Object();
// console.log(person);

// Object create method
// const item = Object.create(null);
const atel = Object.create(student);
// console.log(atel.name);

// Class
class Person{
    name= 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }

}

const person1 = new Person(56);
console.log(person1)