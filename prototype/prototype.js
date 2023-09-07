const person = {
    name:'Oleg',
    age:25,
    greet(){
        console.log("Привет")
    }
}

/*Object.prototype.sayHello = function() {
    console.log('hello')
}
let array = [1,2,3];
person.sayHello();
array.sayHello();
console.log(person);
console.log(array);*/


/*const car = {
    make:'Nissan',
    model:'Primera',
    year:1993,
    greet(){
        console.log("Автомобиль")
    }
}
Object.prototype.sayHello = function() {
    console.log('car')
}
Object.prototype.sayHello = function() {
    console.log('car')
}*/


const anna = Object.create(person);

console.log(anna);
console.log(anna.name);

anna.name = "Anna";
console.log(anna.name);