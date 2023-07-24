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


let array1=[1,4,9,16];
let map1=array1.map(x=>x*2);
console.log(map1);
