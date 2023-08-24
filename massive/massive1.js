/*const arr = Array.from('дока');
console.log(arr);*/


/*let array = [1,1,2,3];
let setCollection = new Set(array);
array = Array.from(setCollection);
console.log(array);*/


/*const uniquelds = new Set()
uniquelds.add(123)
uniquelds.add(456)
uniquelds.add(111)
uniquelds.add(123)
console.log(uniquelds);
console.log(uniquelds.size);//3
console.log(uniquelds.has(111));//true
uniquelds.delete(111);
console.log(uniquelds.size);//2
uniquelds.clear();
console.log(uniquelds.size);//0*/


/*let recipeMap = new Map([["огурец, 500"], ["помидор, 350"], ["лук, 50"]]);
//перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); //огурец, помидор, лук
}
//перебор по значениям(числа)
for (let amount of recipeMap.values()) {
    alert(amount); //500. 350 .50
}
// перебор по элементам  в формате [ключ, значение]
for (let entry of recipeMap) {
    //то же самое, чтои recipeMap.entries()
    alert(entry);//огурец, 500 (и так далее)
}*/


/*const array = [1,-9,8,7,-15];
let sumPos = 0;
let sumNeg = 0;
let positive = array.filter(item=>item>0).map(item=>sumPos+=item);
let negative = array.filter(item=>item<0).map(item=>sumNeg+=item);
let comparison=sumPos>Math.abs(sumNeg) ? sumPos:sumNeg;
console.log(comparison);*/


/*const array = [1,4,5,0,7,0];
const array2 = array.filter(element => element !== 0);
console.log(array2);*/


/*let mas = [1,4,5,0,7,0];
let max = 0;
for(let item of mas) {
    max = item>max?item:max;
}
console.log(max);*/


/*let arr = [1, 4, 5, 0, 7, 0];
let max = 0, min = 0;
let maxInd, minInd
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
        max = arr[i];
        maxInd = i;
    }
    if (arr[i] <= min) {
        min = arr[i];
        minInd = i;
    }
}
arr[maxInd] = min;
arr[minInd] = max;
console.log(arr);*/


/*let arr = [1, 4, 5, 0, 7, 0];
for (let i=1; i<arr.length;i++) {
    arr[i]>arr[i-1]? console.log(arr[i]):"";
}*/


/*let mas = [11,45,88,9,0];
let N = 2, M = 50;
let filt = mas.filter(item=>(item>N&&item<M)).map(item=>console.log(item));*/


/*let mas = [11,45,88,9,0];
let temp = [];
let max = -Infinity;
mas.forEach(item=> {
    temp.push(String(item).split('').reduce((a,b)=>parseInt(a)+parseInt(b)));
})
for(let i = 0; i<temp.length;i++) {
    if(temp[i]>=max){
        max=temp[i];
        maxInd=i;
    }
}
console.log(mas[maxInd],max);*/


/*let array = [1,7,4,2,-9,8];
array = array.map((item, index)=>
item = index %2 !=0 ?0: item)
console.log(array);*/


/*let str = "Мама мыла раму";
console.log(str.split('').reverse().join(''));*/


/*let str = "Сегодня 1 был хороший 2 день";
let mas = str.split(' ');
let count = 0;
for (let i = 0; i < mas.length; i++) {
  if (!isNaN(mas[i]/1)) {
    count++;
  }
}

console.log(count);*/


/*let str = "водоворотоподобно"
let array = str.split(' ');
let set = new Set(array);
let newStr = Array.from(set).join('');
console.log(str.length = newStr.length)*/


/*let firstWord = "Мама";
let secondWord = "Папа";
let firstWordNew = firstWord.toLowerCase().split("").filter(item=>!secondWord.includes(item)).join("");
let secondWordNew = secondWord.toLowerCase().split("").filter(item=>!firstWord.includes(item)).join("");
console.log(firstWordNew, secondWordNew);*/


/*let sentence = "Мама       мыла        раму";
console.log(sentence);
sentence = sentence.split(" ");
console.log(sentence);
sentence = sentence.filter(item => item).join(' ');
console.log(sentence);*/