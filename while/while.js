/*let i = 0;
debugger;
while (i < 3) {
    //выводит 0, затем 1, затем 2
    console.log(i); i++;
}*/


/*let i = 3;
debugger;
while (i != 0) {
    //когда i будет равно 0, условие станет ложным, и цикл остановится
    console.log(i); i--;
}*/


/*let i = 0;
debugger;
do {
    alert(i);
    i++;
}
while (i < 3);*/

/*debugger;
for (let i = 0; i < 3; i++) {
    console.log("number", i);
}*/


/*for (let i = 0; i < 5; i++) alert(i);

let i = 0; while (i != 5) { alert(i++) }*/ //Это одно и тоже с верхним примером


/*for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}*/


/*let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);*/


/*for (let i = 0; i <= 10; i++) {
    console.log(i)
}*/


/*for (let i = 20; i >= 11; i--) {
    console.log(i)
}*/


/*for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}*/

/*let N = 100;
let sum = 0;
for (let i = 1; i <=N; i++) {
    if (i%2==0) {
        sum +=i
    }
}
console.log(sum)*/


/*let N = 100;
let sum = 0;
let i = 1;
while (i <= N) {
    if (i % 2 == 0) {
        sum += i
    }
    i++;
}
console.log(sum);*/


/*let num = 5;
let multiplication;
let i = 1;
while (i<=10) {
    multiplication=num*1;
    i++
}
console.log (multiplication)*/

/*let arg;
do {
   arg = prompt("Введите число больше 100");
  
} while (arg <= 100);*/


/*var sum = 0
debugger;
while (true) 
{
    var value = +prompt("Введите число",'');
    if (!value)
        {break;}
    sum += value;
}
alert('Сумма:' + sum);*/


let n = +prompt('Введите число');
let isPrime = true;
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
console.log (n, " - Простое число");
}
else {
    console.log (n, "- Составное число")
}
