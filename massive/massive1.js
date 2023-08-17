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


let mas = [11,45,88,9,0];
let N = 2, M = 50;
let filt = mas.filter(item=>(item>N&&item<M)).map(item=>console.log(item));
