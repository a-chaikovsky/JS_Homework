(function() {

    var doc = document,
        elemTBody = doc.getElementById('tbody'),
        btnAddElem = doc.getElementById('btn');


    btnAddElem.addEventListener('click', function() {

        elemTBody.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>');
    });

    elemTBody.onclick = function(event) {
        var target = event.target;

        if (target.tagName !== 'TD' || target.id === 'btn') {
            return;
        }

        var value = target.innerHTML;

        target.innerHTML = '<input type="text" value="' + value + '">';

        var elemInput = doc.getElementsByTagName('input')[0];

        elemInput.focus();

        elemInput.onblur = function() {
            value = elemInput.value;
            elemInput.parentNode.innerHTML = value;
        };

        elemInput.onkeydown = function(event) {
            if (event.keyCode === 13) {
                elemInput.blur();
            }
        };
    };

})();
