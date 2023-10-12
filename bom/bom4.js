console.log('product' in navigator)

let per;

let button1 = document.querySelector('.button_1');

button1.onclick = function() {
		per = window.open("https://itstep.org", "popup", "height=480", "width=640");
}

let button2 = document.querySelector('.button_2');
button2.addEventListener('click', close);
function close(){
    per.close()
}

let languages = navigator.languages;

window.onload = function() {
    for (let i = 0; i < languages.length; i++) {
        let span = document.createElement ('span');
        document.body.append(span);
        span.innerHTML = languages[i];
        span.style.padding = "10px";
        if(i==1) {
            span.style.fontWeight = 900;
        }
    }
}



