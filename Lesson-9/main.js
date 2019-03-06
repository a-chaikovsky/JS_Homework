function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._getFormattedFoodAmount = function () {
    return this._foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._foodAmount;

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
};


function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    console.log(Animal.prototype.feed.call(this) + '\n' + 'Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function () {
    console.log("Гладим кота.");
    return this;
};


var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().feed().stroke().stroke().feed());

barsik = null;


function clone(object) {
    if (object == null || typeof (object) != "object") return object;

    var Obj = Array.isArray(object) ? [] : {};

    if (object instanceof Object) {
        for (var k in object) {
            if (object.hasOwnProperty(k)) {
                Obj[k] = clone(object[k]);
            } else {
                Obj[k] = object[k];
            }
        }
        return Obj;
    }
}

var object = {cat: 'barsik', array: [1, 2, 3, 4, {a: 1}], obj: {jump: 'rabbit', eats: true}};

var clonedObj = clone(object);

clonedObj.obj.eats = false;
clonedObj.array.push(2);

console.log(object);
console.log(clonedObj);

