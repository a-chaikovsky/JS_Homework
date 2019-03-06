function Animal(name) {

    var foodAmount = 50;

    var self = this;


    this._getFormattedFoodAmount = function() {
        return foodAmount + 'гр.';
    };


    this.dailyNorm = function (amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function () {
        return 'Насыпаем в миску ' + self._getFormattedFoodAmount() + ' грамм корма.';
    };

}


function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        console.log(animalFeed() + '\n' + 'Кот доволен ^_^');
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };
}


var animal = new Animal();

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm(150));

console.log(barsik.stroke().feed().stroke().feed().feed().stroke());

barsik = null;


