let area = null;
let view = document.getElementById('view');

view.onclick = function () {
    editStart();
};

function editStart() {
    area = document.createElement('textarea');
    area.className = 'edit';
    area.value = view.innerHTML;

    area.onkeydown = function (event) {
        if (event.key == 'Enter') {
            this.onblur();
        }
    };

    area.onblur = function () {
        editEnd();
    };

    view.replaceWith(area);
    area.focus();
}

function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
}

input.oninput = function () {
    result.innerHTML = input.value;
};

let form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';

form.innerHTML = '<input name = "q" value = "test">';
document.body.append(form);
form.submit();