/*let a = [1,2,3,4,5];
for(let key in a){
    //key - свойство(поля)
    //user[key] - значение свойства (поля)
    console.log(key,a[key]);
}*/


/*var User = {};
User.width = 80;
User.height = 200;
User.title = "Вася";
console.log(User);

var w = User.width;
console.log(User);
console.log(User.width);
console.log(User["width two"]);

User.width = 120;
console.log(User.width)
User.surname = "Иванов";
console.log(User);

let user = {
    name: "John",
    age: 30
};
console.log(user);
delete user.age;
console.log(user);

let user2 = {name:"John", age:30};
alert("age" in user2);
alert("blabla in user2");*/


/*let user = {
    name:"John",
    age:30,
    isAdmin:true
};
for(let key in user){
    alert(key);
    alert(user[key]);
}*/


/*let salaries = {
    John:100,
    Ann:160,
    Pete:130
};
let sum = 0;
for (let key in salaries){
    sum+=salaries[key]
};
alert(sum);*/


/*let User = {};
User.name = "John";
console.log(User);
User.surname = "Smith";
User.name = "Pete";
console.log(User);
delete User.name;
console.log(User);*/


/*let salaries = {
    John:100,
    Ann:160,
    Pete:130
};
let max = -Infinity;
for (let key in salaries){
    max=salaries[key]>max?salaries[key]:max;
};
alert(max);*/


/*let menu = {
    width:200,
    height:300,
    title:"My menu"
};
for(let key in menu){
if (typeof menu[key]=='number'){
    menu[key]*=2;
    console.log(menu);
}
}*/


/*let user = {
    name:"John",
    sizes: {
        height: 182,
        width: 50
    }
};
console.log(user.sizes.height);//182*/


/*let str = "hello";
let str2 = str;
console.log(str);
console.log(str2);

str = "привет"
console.log(str);
console.log(str2);*/


/*let user = {name:"Иван"};
let user2 = user;
console.log(user);
console.log(user2);

user.name = "Петя";

console.log(user);
console.log(user2);

user2.name = "Олег";

console.log(user);
console.log(user2);*/


/*let user = {name:"John",age:30};
let clone = Object.assign({}, user);

console.log(user);
console.log(clone);

user.name = "Lena";

console.log(user);
console.log(clone);*/


/*const user = {name:"Ivan"};
user.name = "Vasya";
console.log(user.name);//Vasya

user = {surname:"Sidorov"};*/


/*const catVasya = {
    name: 'Vasya',
    age: 2,
    color: 'red',
    weight: 3,
    mew: function(){
        console.log('miu-miy');
    },
    sayName() {
        console.log('Привет, я кот' + this.name);
    },
    sayAge() {
        console.log('Привет, мне' + this.age);
    },
    sayColor() {
        console.log('Привет, я' + this.color);
    }
    };
catVasya.sayColor();
catVasya.sayName();
catVasya.sayAge();*/


/*let person = {
    name: "John",
    age: 30,
    city: "New York",
    phone: "123-456-7890",
    showPersonInfo() {
        console.log("Name: " + person.name);
        console.log("Age: " + person.age);
        console.log("City: " + person.city);
        console.log("Phone: " + person.phone);
    }
};
person.showPersonInfo();*/


/*let people = [
    {name: "John", age: 30},
    {name: "Bob", age: 25},
    {name: "Alice", age: 28},
];
function getNames(people) {
    let result = [];
    for (let i = 0; i<people.length; i++) {
        if (people[i].age>25) {
            result.push(people[i].name);
        }
    }
    return result;
}
console.log(getNames(people));*/


/*function User(name) {
    this.name = name;
    this.sayHi = function(){
        alert("My name is: " + this.name);
    }
}
let john = new User("John");
john.sayHi();
let anya = new User("Anya");
anya.sayHi();
let masha = new User("Masha");
masha.sayHi();*/


/*let book = {
    title: "Lord of the Rings",
    pages: 356,
    author: "J.R.R.Tolkien",
    showBookInfo() {
        console.log("Title: " + book.title);
        console.log("Pages: " + book.pages);
        console.log("Author: " + book.author);
    }
};
book.showBookInfo();*/


/*let people = [
    {name: "John", age: 30},
    {name: "Bob", age: 25},
    {name: "Alice", age: 28},
];
function getBob(people) {
    let result = {};
    for (let i = 0; i<people.length; i++) {
        if (people[i].name=="Bob") {
            result = Object.assign({}, people[i]);
        }
    }
    return result;
}
console.log(getBob(people));

let p = people.filter(person=>person.name=="Bob");
console.log(p);*/


/*let people = [
    {name: "John", age: 30},
    {name: "Bob", age: 25},
    {name: "Anna", age: 28},
];

let p = people.filter(people => people.name !== 'Anna');
console.log(p);


function getWithoutAnna(people) {
    for (let i = 0; i<people.length; i++) {
        if (people[i].name=="Anna") {
            people.splice(i,1);
        }
    }
    return people;
}
console.log(getWithoutAnna(people));*/


/*let people = [
    {name: "John", age: 30},
    {name: "Bob", age: 25},
    {name: "Anna", age: 28},
];
    console.log(people.sort((a,b)=> a.age - b.age));*/


let litmir = [
    { author: 'Хэленка', title: 'Улетела сказка' },
    { author: 'Кроул Кресли', title: 'Восстание Аркан' },
    { author: 'Райчел Мид', title: 'Золотая лилия' }
]
function propertyvalue(array, key) {
    for (let i = 0; i < litmir.length; i++) {
        let obj = litmir[i];
        for (let k in obj) {
            if (k == key) {
                console.log(obj[k]);
            }
        }
    }
}
