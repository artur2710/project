var n = 123; //целое число
n = 12.345; //дробное число
var b = 1/0; //infinity
var c = "Число"/2; //Nan

var str = "Мама мыла раму";
var s = 'Одинарные ковычки тоже подойдут';
var letter = 'a'

var checked = true; //истина
var notchecked = false; //не совместим истина

var user = {
    name: "Вася",
    sex: "Мужской",
    height: 180,
    weight:60.6
};
alert(user.name)

var age = null;
age = 10
alert(age);//выведет null
alert(age);//выведет 10

var x;
alert(x)//выведет underfined
x = 10;
alert(x);//выведет 10

const bigint = 1234567890n;

console.log(typeof 'Students Lab');//string
console.log(typeof true);//boolean
console.log(typeof underfined);//underfined
console.log(typeof Symbol());//symbol
console.log(typeof{});//object

comsole.log(typeof []);//object
console.log(typeof null);//object
console.log(typeof function(){})//function