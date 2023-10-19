/*function sayHi(phrase, who){
    alert(phrase + ',' +who);
}
setTimeout(sayHi, 1000, "Hello", "John");

let timerId = setTimeout(()=>alert("ничего не происходит"),1000);
alert(timerId);
clearTimeout(timerId);
alert(timerId);*/

/*let timerId = setInterval(()=>alert('tick'),2000);
setTimeout(()=>{clearInterval(timerId);
alert('stop');},5000);*/

let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000);
}, 2000);