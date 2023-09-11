const person = {
    name: 'Oleg',
    age: 25,
    greet() {
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


/*const anna = Object.create(person);

console.log(anna);
console.log(anna.name);

anna.name = "Anna";
console.log(anna.name);*/


/*const parent = {
    name: 'Stacey',
    age:35,
    heritage: 'Irish'
}
const child = Object.create(parent);
console.log(child);
console.log(child.name);
child.name = 'Ryan';
child.age = 7;
console.log(child.name);//Ryan
console.log(child.age);//7
console.log(child.heritage);//Irish*/


/*const animal = {
    name: "Kot",
    color: "grey",
    class: "pats",
    showInfo() {
            console.log(this.name);
            console.log(this.color);
            console.log(this.class);
        }
    };

const cat = Object.create(animal);
cat.name = "Barsik";
cat.color = "gray";
const dog = Object.create(animal);
dog.name = "Sharik";
dog.color = "black";

cat.showInfo();
dog.showInfo();

dog.show = function() {
    console.log("hi");
}
dog.show();*/


