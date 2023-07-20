/*let guestlist = `Guests:
*John
*Pete
*Mary`;
alert (guestlist);//список гостей, состоящий из нескольких строк*/


/*let guestlist = "Guests:\n * John\n * Pete\n * Mary";
alert(guestlist);


let str ="hello";// 5символов
alert(str.length);//5


let str2 = "My\n";//3 символа. Третий - перевод строки
alert(str2.length);//3


let str = "jQuery";
alert(str.charAt(0));//j*/


/*let str = "Я - современный браузер!";
alert(str[0]);//"Я"*/


/*var str = "строка";
str = str[3] + str[4] + str[5];
alert(str);//ока*/


/*let str = 'Hi';
str[0] = 'h';
// ошибка alert(str[0]);
//не работает*/

/*let str = 'Hi';
str = 'h' + str[1];
alert(str)
// заменяем строку
// alert(str);
// hi*/


/*alert("Интерфейс".toUpperCase());
//ИНТЕРФЕЙС
alert("Интерфейс"[0].toUpperCase());
//'и'*/


/*var str = "Widget with id";
alert(str.indexOf("Widget"));//0
alert(str.indexOf("id"));//1
alert(str.indexOf("widget"));//-1

alert(str.indexOf("id",2));//12*/


/*let str = "Widgetwith id";
alert(str.includes("Widget"));//true
alert("Hello".includes("Bye"));//false

alert("Midget".includes("id",3));//false, поиск начат с позиции 3


alert("Widget".startsWith("Wid"));//true, "Wid" - начало "Widget"
alert("Widget".endsWith("get"));// true, "get" - окончание "Widget"*/


/*let str = "stringfy";
///'strin' символы от 0 до 5 (не включая 5)
alert(str.slice(0,5));
///'s' от 0 до 1, невключая 1, т.е. только один символ на позиции 0
alert(str.slice(0,1));*/

/*let str = "stringify";
alert(str.slice(2));//ringify, с позиции 2 и до конца
alert(str.slice(-4, -1));//gif*/


/*let str = "stringify";
//для substring эти два примера - одинаковы
alert(str.substring(2,6));//"ring"
alert(str.substring(6,2));//"ring"

alert(str.substring(6,-2));//"sring" так не делать*/


/*let str = "stringify";
//ring, получаем 4 символа, начиная с позии 2
alert(str.substr(2,4));
//gi, получаем 2 символа, начиная с позиции 4 с конца строки
alert(str.substr(-4,2));*/


/*let str = "Please visit Microsoft!";
let n = str.replace("Microsoft","W3Schools");*/

/*let str = "Please visit Microsoft and Microsoft!";
let n = str.replace("Microsoft","W3Schools");
console.log(n);*/


/*const greeting = '  Hello world!  ';
console.log(greeting);
//"  Hello world!  "
console.log(greeting.trim());
//"Hello world!"*/


/*let str = "5";
str = str.padStart(4,0);
//result is 0005

let str2 = "5";
str2 = str2.padEnd(4,0);
//result is 5000*/


/*let importanceSkills = "React,TypeScript,CSS,HTML,JavaScript";
importanceSkills = importanceSkills.split(',')
console.log(importanceSkills);

let importanceSkills = "React,TypeScript,CSS,HTML,JavaScript";
importanceSkills = importanceSkills.split("");
console.log(importanceSkills);*/


/*let fruits = ["Яблоко", "Апельсин", "Груша"];
alert(fruits.shift()); //удаляем Яблоко и выводим его
alert (fruits);// Апельсин, Груша
fruits.unshift('Яблоко');
alert(fruits);
//Яблоко, Апельсин, Груша*/


/*var arr = [];
console.log(arr);
for(i=0; i<10;i++)
{
    arr[i]=i+1;
}
console.log(arr);//[1.2.3.4.5.6.7.8.9.10]*/

/*var arr=["Яблоко", "Апельсин", "Груша"];
for(i=0; i<arr.length; i++)
{
    alert(arr[i]);
}*/


/*let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
alert(matrix[1][2]);
//5, центральный элемент*/


/*const array1= ['a','b','c'];
const array2= ['d','e','f'];
const array3= array1.concat(array2);
console.log(array3);*/


/*const array1 = ['one','two','three'];
console.log('array1:', array1);
const reversed = array1.reverse();
console.log('reversed:',reversed);*/


/*const elements = ['Fire','Air','Water'];
console.log(elements.join());//"Fire,Air,Water"
console.log(elements.join(''));//"FireAirWater"
console.log(elements.join('-'));//"Fire-Air-Water"*/


/*const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = array1.concat(array2);
console.log(array3);


const array4 = ['one','two','three'];
const reversed = array4.reverse();
console.log('reversed:',reversed);


const array5 = [1,2,3];
array5.push(4,5,6);
console.log(array5);


const array6 = [1,2,3];
array6.unshift(4,5,6);
console.log(array6);


let matrix = 
    [7,9,3]
;
alert(matrix[1]);


let matrix1 = 
    [7,9,3]
;
alert(matrix1[2]);*/


/*let arr = ["Я","Изучаю","JavaScript"];
arr.splice(1,1)// начиная с индекса 1, удалить 1 элемент
alert(arr);// осталось ["Я","JavaScript"]*/


/*let arr = ["Я","Изучаю","JavaScript","прямо","сейчас"];
//удалить 3 первых элемента и заменить другими
arr.splice (0,3,"Давай","танцевать");
alert(arr)
//теперь ["Давай","танцевать","прямо","сейчас"];*/


/*let arr = ["Я","Изучаю","JavaScript"];
//с индекса 2
//удалить 0 элементов
//вставить "сложный", "язык"
arr.splice(2,0,"сложный","язык");
alert(arr);
//Я изучаю сложный язык JavaScript*/


/*let arr = ["t","e","s","t"];
alert(arr.slice(1,3));
//e,s (копирует с 1 до 3)
alert(arr.slice(-2));
//s,t (копирует с -2 до конца)*/


let arr = [1,2,3,4,5];
let newarr = arr.slice(0,3);
alert(newarr);

let arr1 = [1,2,3,4,5];
alert(arr1.slice(-2));


let arr2 = [1,2,3,4,5];
alert(arr2.splice(1,2));


let arr3 = [1,2,3,4,5];
let newarr3 = arr3.splice(1,3);
alert(newarr3);


let arr4 = ["1","2","3","4","5"];
arr4.splice (3,0,"a","b","c");
alert(arr4);


let arr5 = ["1","2","3","4","5"];
arr5.splice(1,0,"a","b");
arr5.splice(6,0,"c");
arr5.splice(8,0,"e");
alert(arr5);









