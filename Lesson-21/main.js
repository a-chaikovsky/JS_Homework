// 6
{
    const names = [
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ];

    function f1(names) {

        const age = names.filter(obj => obj.age < 40);
        const name = names.filter(obj => obj.name.includes('Fed'));

        const resul = {

            'пользователи младше 40': age,
            'пользователь с именем Федор': name

        };

        return resul;

    }

    console.log(f1(names))

}


// 7
{
    const arr = ['Артур', 'Леша'];

    let obj = arr.map((name, i) => ({['Пользователь ' + (i + 1)]: name}));

    console.log(obj)
}


//8
{
    const arr = [
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ];

    function f2(arr) {

        return arr.reduce((a, b) => (Object.assign(a, b)));
    }

    console.log(f2(arr));
}


//9
{
    class Animal {
        constructor(name) {
            this._foodAmount = 50;
            this.name = name;
        }


        _getFormattedFoodAmount() {
            return `${this._foodAmount} гр.`;
        }

        dailyNorm(amount) {
            if (!arguments.length) return this._foodAmount;

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            return `Насыпаем в миску ${this._getFormattedFoodAmount()} корма.`;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }

        feed() {
            console.log(`${super.feed()}
            Кот доволен ^_^`);
            return this;
        };

        stroke() {
            console.log('Гладим кота.');
            return this;
        }
    }

    var barsik = new Cat('Барсик');

    console.log(barsik.feed().feed().stroke().stroke().feed().stroke().feed());

    barsik = null;
}