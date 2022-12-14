'use strict';

let btn = document.querySelector('.btnClick');
let errors = [];
let modalWindow = document.querySelector('.modal-window');

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('The ' + input.id + ' field is not filled in');
    }

    if (validity.patternMismatch) {
        errors.push('Invalid format');
    }

}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");
    let input = document.querySelector("input");

    for (input of inputs) {
        checkValidity(input);
    }
}

btn.addEventListener("click", function (event) {
    event.preventDefault();

    checkAll();

    if(errors.length === 0){ 
        
    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        tasks: document.getElementById('tasks').value,
        consultation : document.getElementById ('consultation').value,
        rate : document.getElementById ('rate').value,
        estimation : document.getElementById ('estimation').value
    }

    modalWindow.style.display = 'block';


    fetch("https://httpbin.org/post",
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));


    document.querySelectorAll("input").forEach (function (input) {
        input.value = '';
    });

    document.querySelectorAll("textarea").forEach (function (input) {
        input.value = '';  
    });

    console.log(user);
}

else {
    alert('Ошибка при отправке данных, заполните поле');
}

});