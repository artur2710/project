input.onblur = function() {
    if (!this.value.includes('@')) {//не email
    // показать ошибку
this.classList.add("error");
//...и вернуть фокус обратно
input.onfocus();
} else {
    this.classList.remove("error");
}
};