var a = "моя", b = "5", c = 4, d = 6;
console.log("a+b", a + b);//моя5
console.log(b + c);//54
console.log(c + b);//45
console.log(c + d);//10


console.log(5 % 2);//1 остаток от деления 5 на 2
console.log(8 % 3);//2 остаток от деления 8 на 3
console.log(6 % 3);//0 остаток от деления 6 на 3


console.log(2 ** 2); //2 в степени 2 = 4
console.log(2 ** 3); //2 в степени 3 = 8
console.log(2 ** 4); //2 в степени 4 = 16


var x = 2 * 2 + 1;
alert(x);//5


var a, b, c;
a = b = c = 2 + 2;
alert(a);//4
alert(b);//4
alert(c);//4


var i = 2;
i++;//более короткая запись для i=i+1
alert(i);//3


var i = 2;
i--;//более короткая запись для i=i-1
alert(i);//1


var n = 2;
n += 5;//теперь n=7 (работает как n=n+5)
n *= 2;//теперь n=14 (работает как n=n*2)
console.log(n);//14


console.log("2>1", 2 > 1);//true верно
console.log("пояснение", 2 !== 1);//false, неверно
console.log("2!=1", 2 != 1);//true

console.log('А'>'Б');//true
console.log('а'>'А');//строчные буквы больше прописных
console.log('Банан'>'аят');//true
console.log('Вася'>'Ваня');//true, т.к. 'c'>'н'
console.log('Привет'>'Прив');//true, т.к. 'е' больше чем ничего
console.log("2">"14");//true, но ведь 2 не больше 14
console.log(+"2">"14");//false, теперь правильно
