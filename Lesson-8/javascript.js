function Animal(name) {

    var foodAmount = 50;

    var self = this;


    function _getFormattedFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function () {
        console.log('Насыпаем в миску ' + _getFormattedFoodAmount() + ' грамм корма.');
        self.animalFeed();
        return this;
    };

    this.animalFeed = function () {
        alert('Кот доволен ^_^');
        return this;
    };

    this.stroke = function () {
        alert('Гладим кота.');
        return this;
    };

}


function Cat(name) {
    Animal.apply(this, arguments);
}


var animal = new Animal();

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.dailyNorm(150));
console.log(barsik.stroke().feed().stroke().feed().feed().stroke());


