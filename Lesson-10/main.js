//************** 1 ***************

function isShifter(a) {
    return a.toLowerCase() === a.toLowerCase().split('').reverse().join('');
}

isShifter('заказ');

//************** 2 ***************

function isAnagram(a, b) {
    return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('')
}

isAnagram('кукла', 'кулак');

//************** 3 ***************

function shareArr(a, b) {
    var newArray = [];
    for (var i = 0; i < a.length; i += b) {
        newArray.push(a.slice(i, i + b));
    }
    return newArray;
}

shareArr([1, 2, 3, 4, 5, 6, 7], 3);

//************** 4 ***************

function vowels(text) {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я', 'a', 'e', 'i', 'o', 'u', 'y'],
        counter = 0;
    for (var i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i]) !== -1) {
            counter++;
        }
    }
    return counter;
}

//************** 5 ***************

function repeatingWords(text) {
    var textArr = text.toLowerCase().split(/[.,!?]/).join('').split(' '),
        repeatCounter = 0,
        repeatWord = '';

    for (var i = 0; i < textArr.length; i++) {
        var counter = 1;

        for (var j = i + 1; j < textArr.length; j++) {
            if (textArr[i] === textArr[j]) {
                counter++;
            }
        }

        if (counter > repeatCounter) {
            repeatCounter = counter;
            repeatWord = textArr[i];
        }
    }
    return 'Повторяющееся слово \"' + repeatWord + '\" - ' + repeatCounter + '.';
}

repeatingWords('Вот дом,\n' +
    'Который построил Джек.\n' +
    'А это пшеница,\n' +
    'Которая в темном чулане хранится\n' +
    'В доме,\n' +
    'Который построил Джек.\n' +
    'А это веселая птица-синица,\n' +
    'Которая часто ворует пшеницу,\n' +
    'Которая в темном чулане хранится\n' +
    'В доме,\n' +
    'Который построил он.');

//************** 6 ***************

function numberOfLetters(text) {

    var offer = text.split(/[.!?]/),
        abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

    if (!offer[offer.length - 1].length) {
        offer.pop(offer[offer.length - 1]);
    }

    for (var i = 0; i < offer.length; i++) {
        var count = 0;
        var str = offer[i].trim();

        for (var j = 0; j < str.length; j++) {
            if (abc.indexOf(str[j].toLowerCase()) >= 0) {
                count++;
            }
        }
        console.log(str + ': Количество букв : ' + count);
    }
}

numberOfLetters('Вот дом,\n' +
    'Который построил Джек.\n' +
    'А это пшеница,\n' +
    'Которая в темном чулане хранится\n' +
    'В доме,\n' +
    'Который построил Джек.\n' +
    'А это веселая птица-синица,\n' +
    'Которая часто ворует пшеницу,\n' +
    'Которая в темном чулане хранится\n' +
    'В доме,\n' +
    'Который построил он.');
