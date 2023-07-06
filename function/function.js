/*function showMessage() {
    alert('Всем привет!');
}
showMessage();
showMessage();*/

/*Глобальные переменные
function showMessage() {
    let message = 'Всем привет!';
    alert(message);
}
console.log(message);
showMessage();*/


/*function summa1 (a, b) {
    var sum = a + b;
    return sum;
}

function summa2 (a, b) {
    return a +b;

    console.log("summa1",summa1(1,2));
    console.log("summa1",summa1(3,8));

    console.log("summa2",summa1(1,3));
}*/

/*let userName=prompt ('Введите свое имя');
function showName() { 
    let message = 'Привет, ' + userName;
    alert(message);
}
showName();

function cube (x) {
    return x*x*x;
}
console.log(cube(2));
console.log(cube(9));*/


/*let userName = 'Вася';
function showMessage() {
    let userName = "Петя";
    //объявляем локальную переменную
    let message = 'Привет,' + userName;//Петя
    alert(message);
}*/
/*функция создаст и будет использовать свою собственную
локальную переменную userName showMessage();*/
/*alert(userName);
//Вася, не изменилась, функция не трогала внешнюю переменную
showMessage()*/


/*function summa(a, b=2){
    return a+b;
}
alert(summa(3,4));//7
alert(summa(3));//5
alert(summa());//error NaN*/


/*function summa(a, b) {
    b=b||2;
    return a+b;
}
alert(summa(3, 4));//7
alert(summa(3));//5
alert(summa());//error*/


/*let user;
alert(user??"Аноним");//Аноним(user не существует)
alert(user);

let user="Иван";
alert(user??"Аноним");//Иван(user не существует)*/

/*function checkAge(age){
    if(age>=18){
        return true;
    }
    else {
        return confirm('А родители разрешили?');
    }
}
checkAge(10);
console.log(checkAge(20));*/


/*function min (a,b){
    if(a<b){
        return a;
    }
    else {
        return b;
    }
}
alert(min(1.2));*/


/*function pow(x, n) {
    let resul = x;
    if (n < 1) {
        alert(`Степень ${n} не поддерживается, используйте натуральное число`);
        return;
    }
    else {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
        return result;
    }
}
console.log(pow(2, 0));
console.log(pow(2, 3));*/


/*function varTest(){
    for (var i=0;i<3;i++){
        console.log(i);
    }
    console.log("next",i);
}
varTest();*/


/*function doSomething(){
var myVar=1;
if (true){
    var myVar=2;
    console.log(myVar);
}
console.log(myVar);
}
doSomething();*/


/*const PI=3.142;
PI=22/7//Давайте изменим значение PI
console.log(PI);//Вывод:TypeError:Assignment to constant variable.*/


/*function hoist(){
    a=20;
    var b=100;
}
hoist();
console.log(a);
console.log(b);*/


/*console.log(hoist);//Вывод: undefined
var hoist='The variable has been hoisted.';
var hoist;
console.log(hoist);//Вывод: undefined
hoist=='The variable has been hoisted.';*/


/*hoisted();//Вывод:"This function has been hoisted."
function hoisted(){
    console.log('This function has been hoisted');
};*/


var f=function(параметры){
    //тело функции
};
var sayHi=function(person){
    alert("Привет,"+person);
};
sayHi('Вася');





