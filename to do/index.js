let div = document.querySelector('div');
console.log(div);


let h2 = document.createElement('h2');
h2.innerHTML = "TO DO"
div.prepend(h2);
let text = document.querySelector('h2');
text.style.background = "orange";
text.style.color = "white";
text.style.textAlign = "center"

let ul = document.createElement('ul');
div.append(ul);
ul.style.listStyle ="none";
ul.style.textAlight ="center";
ul.style.background = "lightyellow";
ul.style.color = "orange";
ul.style.fontWeight = "bold";

let liFirst = document.createElement('li');
liFirst.innerHTML = 'Swimming pool';
ul.prepend(liFirst);

let liSecond = document.createElement('li');
liSecond.innerHTML = 'Yoga';
ul.append(liSecond);

let liLast = document.createElement('li');
liLast.innerHTML = 'Basketball';
ul.append(liLast);

let div2 = document.createElement('div');
div.append(div2);

let input = document.createElement('input');
div2.append(input);

let button = document.createElement('button');
button.innerHTML = "add";
div2.append(button);

let all = document.querySelectorAll('*');
for(let i = 0 ; i < all.length; i++) {
    all[i].style.margin = "0";
}

button.onclick = function () {
    let li = document.createElement('li');
    let val = document.querySelector('input').value;

    li.innerHTML = val;
    ul. appendChild(li);
}

let h3 = document.createElement('h3');
h3.innerHTML = "Please, enter item";
h3.style.color = "gold";
div2.append(input);
