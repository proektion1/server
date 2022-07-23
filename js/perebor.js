'use strict';


// filter - 1 способ
const names = ['Ivan', 'Ann', 'Ksenya', 'Voldemart'];
// получаем имена меньше 5 символов
const shortNames = names.filter(function(name) {
    return name.length < 5;
});
console.log(shortNames); // [ 'Ivan', 'Ann' ]


// map - 2 способ
const answers = ['IvAn', 'AnnA', 'Ksenya'];
const result = answers.map(item => item.toLowerCase());
console.log(result); // [ 'ivan', 'anna', 'ksenya' ]

// или не создавая 2 переменную
let otvet = ['IvAn', 'AnnA', 'Ksenya'];
otvet = otvet.map(item => item.toLowerCase());
console.log(otvet);

//every/some - 3 метод - возвращают булиновые значения
//some - перебирает, если хотябы 1 совпадает, то возвращает true
const some = [4, 'sdsds', 'sdfsdfs'];
console.log(some.some(item => typeof(item) === 'number')); //true
console.log(some.every(item => typeof(item) === 'number')); //false

// reduce - 4 метод - схлопывать или собирать массив в 1 целое
const arr = [4, 5, 1, 3, 2, 6];
//взять сумму всех элементов

                        //0    //4
                        //4    //5
                        //9    //1
                        //10   //3
                        //13   //2
                        //15   //6
                        //21   //
const res = arr.reduce((sum, current) => sum + current);
//может принимать ещё 1 значениеё
//const res = arr.reduce((sum, current) => sum + current, 3);
//console.log(res); //24
console.log(res); //21


const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2); // apple, pear, plum


// ПРИМЕР - вытащить имена людей
const oobj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
let newArr = Object.entries(oobj);
console.log(newArr); // здесь мы получим массив
/* 
[
    [ 'ivan', 'persone' ],
    [ 'ann', 'persone' ],
    [ 'dog', 'animal' ],
    [ 'cat', 'animal' ]
  ] 
  */
newArr = Object.entries(oobj)
.filter(item => item[1] === 'persone'); // Фильтруем, те, у которых 2 значение = персон
console.log(newArr); 
// [ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]

newArr = Object.entries(oobj)
.filter(item => item[1] === 'persone')
.map(item => item[0]); //трансформирующий метод. берем 1 элемент массива
console.log(newArr); 
//[ 'ivan', 'ann' ]

//в 1 строку будет так:
newArr = Object.entries(oobj).filter(item => item[1] === 'persone').map(item => item[0]);
console.log(newArr); 