three.onclick = function() {
    let tbody = document.querySelector('tbody');
    let tr = document.createElement('tr');
tbody.appendChild(tr);

let tdOne = document.createElement('td');
tdOne.innerHTML = food.value;
tr.append(tdOne);

let tdTwo = document.createElement('td');
tdTwo.innerHTML = weight.value;
tr.append(tdTwo);

let tdThree = document.createElement('td');
let tdEdit = document.createElement('button');
let tdDel = document.createElement('button');
tdThree.append(tdEdit);
tdThree.append(tdDel);

tdEdit.innerHTML = document.querySelector('.edit-button').innerHTML;
tdDel.innerHTML = document.querySelector('.delete-button').innerHTML;
tr.append(tdThree);

tdDel.onclick = function(event) {
let deletButton = event.target.closest('tr');
deletButton.remove();
}

tdEdit.onclick = function(event) {
food.value = tdOne.innerHTML;
weight.value = tdTwo.innerHTML;
let editTr = document.querySelector('.edit')
if(editTr){
    editTr.classList.remove('edit');
}
event.target.closest('tr').classList.add('edit');
}

save.onclick = function(){
    let editTr = document.querySelector('.edit');
    if (editTr) {
        editTr.firstChild.innerHTML = food.value;
        editTr.children[1].innerHTML = weight.value;
        editTr.classList.remove('edit');
    }
}
}