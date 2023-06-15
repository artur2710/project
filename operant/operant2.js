console.log ('2'>1);//true, сравнивается как 2>1
console.log ('01'==1);//true, сравнивается как 1==1
console.log (false==0);//true, false становится числом 0
console.log (true==1);//true, т.к. true становится числом 1


console.log (0==false);//true
console.log (''==false);//true
console.log (0===false);//false, т.к. типы различны
console.log (0 !==false);//true, т.к. типы различны


console.log(null===undefined);//false
console.log(null==undefined);//true


console.log (null>0);//false
console.log (null==0);//false
console.log (null>=0);//true-сравнение преобразует в число


console.log (undefined>0);//false
console.log (undefined==0);//false
console.log (undefined>=0);//false