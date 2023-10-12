var a = 1;
window.some = 2;

console.log(some);
console.log('a' in window);

let button1 = document.querySelector('.button_1');
button1.addEventListener('click', close);

let button2 = document.querySelector('.button_2');
//button2.addEventListener('click', open);
button2.onclick = function() {
		window.open("https://medium.com/@Harshit_Raj_14/what-is-the-dom-and-bom-in-javascript-cd01d1e94a42", "popup", "height=400", "width=400", "scrollbars=yes");
}

function close() {
	window.close();
	//window.print();

}

console.log(window);
console.log(navigator);
console.log(screen);