let button = document.querySelector('.input-button');
let input = document.querySelector('.application_input-item');
let titleId = 1;
let count = 1;

button.addEventListener('click', function(){

    let content = input.value;

    if(content.length == 0) {
        alert('Заполните input');
    } else if (content.length > 0) {

        // new block

        var newDiv = document.createElement('div');
        newDiv.className = 'application_task-list_item';
        newDiv.id = 'task-item';

        let text = document.createElement('p');
        text.className = 'task-text_item';
        text.id = 'text_item';

        let imageBlock = document.createElement('div');
        imageBlock.className = 'application_task-list_item-nav';
        imageBlock.id = 'nav';

        // imageCheck

        let imageCheck = document.createElement('img');
        imageCheck.className = 'img-checkmark';
        imageCheck.id = 'changeColor';
        imageCheck.src = 'img/checkmark.svg';

        // imageCross

        let imageCross = document.createElement('img');
        imageCross.className = 'img-cross';
        imageCross.id = 'deleteItem';
        imageCross.src = 'img/cross.svg';

        // adding to dom structure

        spisok.appendChild(newDiv);
        newDiv.appendChild(text);
        newDiv.appendChild(imageBlock);
        imageBlock.appendChild(imageCheck);
        imageBlock.appendChild(imageCross);


        // content filling
        newDiv.id = 'taskItem' + count++;
        document.getElementById('taskItem' + titleId++).children[0].textContent = content;
        input.value = '';

    };

});

let spisok = document.querySelector(".application_task-list");
let changeColor = document.getElementsByClassName(".img-checkmark");

// change-color

spisok.addEventListener('click', function(event){

    let target = event.target.id;
    if(target == 'changeColor') {
        event.target.parentElement.parentElement.style.backgroundColor = (event.target.parentElement.parentElement.style.backgroundColor == 'teal') ? 'rgb(242,242,242)' : 'teal';
    } else {
        return;
    };

});

// delete item

let deleteItem = document.getElementsByClassName(".img-cross");

spisok.addEventListener('click', function(event){

    let doit = event.target.id;
    if(doit == 'deleteItem') {
        event.target.parentElement.parentElement.remove();
    } else {
        return;
    };
});

