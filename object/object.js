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


const catVasya = {
    name: 'Vasya',
    age: 2,
    color: 'red',
    weight: 3,
    mew: function(){
        console.log('miu-miy');
    }
    };
catVasya.mew();
