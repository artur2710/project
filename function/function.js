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


let userName = 'Вася';
function showMessage() {
    let userName = "Петя";
    //объявляем локальную переменную
    let message = 'Привет,' + userName;//Петя
    alert(message);
}
/*функция создаст и будет использовать свою собственную
локальную переменную userName showMessage();*/
alert(userName);
//Вася, не изменилась, функция не трогала внешнюю переменную
showMessage()

