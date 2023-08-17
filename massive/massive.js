/*const array = [1,2,3];
for(let i = 0; i<array.length; i++) {
    console.log(i);//0,1,2
}*/


/*const array = [1,2,3];
while (array.length>0) {
    const elem = array.shift();
    console.log(elem); //1,2,3
}*/

/*const array = [1,2,3];
do{
    const elem = array.shift();
    console.log(elem); //1
} while (array.length>5)*/


/*const array = ['a','b','c'];
array1.forEach(elem=>console.log(element));

array1.forEach(function(element){
    console.log(element);
})*/


/*let items = ["item1","item2","item3"];
let copyitems = [];
//before
for (let i=0; i<items.length; i++) {
    copyitems.push(items[i]);
}
//after
items.forEach(item=>{copyitems.push(item);});
console.log(copyitems);*/


/*let numbers = [1,2,3,4,5];
let copynumbers = [];
numbers.forEach(number=>{copynumbers.push(number**2);});
console.log(copynumbers);*/


/*let array = [1,2,3,4,5];
let sum = 0;
array.forEach(item=>{sum+=item;});
console.log(sum);*/


/*let arr = [1,2,15];
arr.sort();
alert(arr);//1,15,2
arr.sort((a,b)=>a-b);//b-a*/


/*let arr = [3,4,1,2,7];
arr.sort();
alert(arr);


let arr2 = [3,4,1,2,7];
arr2.sort((a,b)=>b-a);
alert(arr2);*/


/*const array1=[5,12,8,130,44];
const found=array1.find(element=>element>10);
console.log(found);

const array2=[5,12,8,130,44];
const found2=array2.findLast((element)=>element>45);
console.log(found2);*/


/*const array1=[5,12,8,130,44];
const isLargeNumber=element=>element>13;
console.log(found1);*/

/*const array1=[5,12,8,130,44];
const isLargeNumber=element=>element>13;
console.log(array1.findLastIndexisLargeNumber());*/


/*const words=['spray','limit','elite','exuberant',
'destruction','present'];
const result=words.filter(word=>word.length>6);
console.log(result);*/


/*let array1=[1,4,9,16];
let map1=array1.map(x=>x*2);
console.log(map1);*/


/*Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");*/


/*const array1 = [1,30,39,29,10,13];
const isBelow = (currentValue)=>currentValue<40;
console.log(array1.every(isBelow));*/


/*const array = [1,2,3,4,5];
const even = (element)=>element%2===0;
console.log(array.some(even));*/


/*const array1 = [1,30,39,29,10,13];
const isBelow = (currentValue)=>currentValue>0;
console.log(array1.every(isBelow));*/


/*const array = [1,2,-3,4,-5];
const even = (element)=>element<0;
console.log(array.some(even));*/


/*let myAwesomeArray = [1,2,3,4,5];
let res = myAwesomeArray.reduce((total, value)=>total*value);
//1*2*3*4*5
console.log(res);*/


/*const array = [1,2,3,4,5];
let res = array.reduce((total, value)=>total+value);
console.log(res);*/


/*const array = [1,2,3,0,4,5];
let isNull = false;
let sum = array.reduce((sum,item)=>{
    if(item==0){
        isNull=true;
    }
    if(isNull){
        return sum+item;
    }
    else {
        return sum;
    }});
    console.log(sum);*/


/*const array1 = [1,2,3,4];
console.log(array1.fill(0,2,4));
console.log(array1.fill(5,1));
console.log(array1.fill(6));
let arr2=new Array(10);
console.log(arr2[0]);
console.log(arr2.length);
let arr = new Array(10).fill().map((item,index)=>index);*/


/*let items = 
[[1,2],
[3,4],
[5,6]];
console.log (items[0][0]);
console.log (items[0][1]);
console.log (items[1][0]);
console.log (items[1][1]);*/


/*et studentsData = [['Андрей',24],['Настя',23],];
studentsData.push(['Даня',24]);
console.log(studentsData);

let studentsDataNew = [['Андрей',24], ['Настя',23],];
studentsDataNew[1].push('привет');
console.log(studentsDataNew);*/


/*let studentsData = [['Андрей',24],['Настя',23],['Даня',24]];
console.log(studentsData);
let popped = studentsData.pop()
console.log(popped);*/


/*let studentsData = [['Андрей',24],['Настя',23]];
for(let i=0;i<studentsData.length;i++){
    let innerArrayLength=studentsData[i].length;
    for(let j=0; j<innerArrayLength;j++) {
        console.log(studentsData[i][j]);
    }
}


let studentsData2 = [['Андрей',24],['Настя',23]]; 
for (let i of studentsData2) {
    for (let j of i){       
    console.log(i)
}}*/


/*let studentsData2 = [['Андрей',24],['Настя',23]]; 
 studentsData2.forEach((student)=>{
     student.forEach((data)=>{
         console.log(data);
     });
 });*/


let studentsData = [['Андрей', 24], ['Настя', 23]];
let newArray = studentsData.flat();
console.log(newArray);