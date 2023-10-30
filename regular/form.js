form.addEventListener("submit", function(e) {
    e.preventDefault();
    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
    tbody.appendChild(tr);

    let tdOne = document.createElement('td');
    tdOne.innerHTML = namet.value;
    tr.append(tdOne);

    let tdTwo = document.createElement('td');
    tdTwo.innerHTML = select.value;
    tr.append(tdTwo);

    let tdThree = document.createElement('td');
    let radios = document.querySelectorAll('#radios input');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            tdThree.innerHTML = radios[i].value
        }
    }
    tr.append(tdThree);

    let tdFour = document.createElement('td');
    tr.append(tdFour);
    let tdEdit = document.createElement('button');
    let tdDel = document.createElement('button');
    tdFour.append(tdEdit);
    tdFour.append(tdDel);

    tdEdit.innerHTML = document.querySelector('.edit-button').innerHTML;
    tdDel.innerHTML = document.querySelector('.delete-button').innerHTML;

    tr.append(tdFour);

    tdEdit.onclick = function(e) {
        let editTr2 = document.querySelector('.edit');
        if (editTr2) {
            editTr2.classList.remove('.edit');
        }
        e.target.closest('tr').classList.add('edit');
        namet.value = this.closest('tr').children[0].innerText;
        select.value = this.closest('tr').children[1].innerText;
        document.querySelector(`input[value="${this.closest("tr").children[2].innerText}"]`).checked = true;
    }
    
    tdDel.onclick = function (event) {
        let deleteButton = event.target.closest('tr');
        deleteButton.remove();
    }


})

save.addEventListener('click', function(e) {
    e.preventDefault();

    let editTr = document.querySelector('.edit');
    console.log(editTr);
    if (editTr) {

        editTr.firstChild.innerHTML = namet.value;
        editTr.children[1].innerHTML = select.value;

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                editTr.children[2].innerHTML = radios[i].value;
            }
        }

        editTr.classList.remove('edit');
    }
})
