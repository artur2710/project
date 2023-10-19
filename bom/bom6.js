/*function btnClick()
{
    if(document.Test1.Sex[0].checked){
        document.Test1.Sex[1].click();
    } else{
        document.Test1.Sex[0].click();
    }
}*/

input.onblur = function() {
    if (!input.value.includes('@')) {
        input.classList.add('invalid');
        error.innerHTML = "Пожалуйста, введите правильный email"
    }
};

input.onfocus = function(){
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
        error.innerHTML = "";
    }
};