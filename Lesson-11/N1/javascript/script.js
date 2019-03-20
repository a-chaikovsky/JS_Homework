var doc = document,
    textX = doc.getElementById('x'),
    textY = doc.getElementById('y'),
    btnSub = doc.getElementById('sub'),
    numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


textX.addEventListener("keyup", input);
textY.addEventListener("keyup", input);

textX.addEventListener("keyup", function () {
    validation(textX)
});

textY.addEventListener("keyup", function () {
    validation(textY)
});

function input() {
    btnSub.disabled = !(textX.value && textY.value);
}

function validation(number) {
    if (numbersArr.indexOf(+number.value) === -1) {

        alert('Ошибка. Допустимые значения - числа от 1 до 10');
        number.value = '';
    }
}


btnSub.addEventListener("click", function () {
    var table = doc.createElement('table');

    for (var i = 1; i <= textX.value; i++) {
        var tr = doc.createElement('tr');

        for (var j = 1; j <= textY.value; j++) {
            var td = doc.createElement('td');

            if (i % 2 === j % 2) {
                td.className = 'white';
            } else {
                td.className = 'black';
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    doc.body.appendChild(table);

});

