/*Задание 1
1.1. создать 2 объекта sity1 и sity2 со следующими свойствами:
    name, population, mayor
двумя разными способами (первый объект одним способом, второй другим)

1.2. sity1 добавить метод, который позволяет забирать какую-то часть населения sity2 (и соответственно добавлять к своему)

1.3. Написать функцию (вне этих объектов), которая показывает мэра города (в зависимости от объекта, переданного ей в качестве аргумента)

1.4. Создать объект president c методом changeCountryMayor(), благодаря которому он сможет менять мэра города (в зависимости от объекта, переданного в качестве аргумента)*/

let sity1 = {
    name: 'Калининград',
    population: 475056,
    mayor: 'Ярошук',

};
let popiki=100000;
const sity2 = {
    arifma: function add() {
    for (;sity1.population < sity2.population;) {
        sity2.population = sity2.population - popiki;
        sity1.population  = sity1.population + popiki;


    }console.log(sity1.population);
        console.log(sity2.population);


}
}; sity2.arifma();

let president = {
    change:function CountryMayor(sity1, sity2) {
        tovar.name = 'new name';
    }


};
sity2.name = 'Санкт-Петербург';
sity2.population = '5351935';
sity2.mayor = 'Полтавченко';
// console.log(addpop,delpop);
function fixu(who) {
    who = prompt('Введи город Калининград или Санкт-Петербург');
    if (who===sity1.name) {
        console.log('Мэр города ' + sity1.name + ' всеми любимый ' + sity1.mayor);
    } else if (who===sity2.name){
        console.log('Мэр города ' + sity2.name + ' всеми любимый ' +  sity2.mayor);
    } else {
        console.log('Дружище, такого города нет в нашем списке!');
    }
return who;
} console.log(fixu());

//не могу вывести в консоль ответы. решил правильно вроде как














/*

Задание 2
Написать функцию, которая на вход принимает строку и подстроку и ищет ВСЕ вхождения подстроки в строку
*/
let str = "forget your troubles common get happy, forget your";
let bookva='forget';

function fig(str, bookva) {
    let pop = 0;
    while (true) {
        let fbookva = str.indexOf(bookva, pop);
        if (fbookva === 0) {
            break;
        }
        pop = fbookva++;
    }
}; console.log(fig(str, bookva));

/*
Задание 3
Написать функцию - конвертер строки.
    Возможности:
перевод всех символов в верхний регистр,
    перевод всех символов в нижний регистр,
*/
let word ='просто пожелаю всем ДОБРА';
text(word);
function text() {
    console.log(word.toUpperCase());
    console.log(word.toLowerCase());

}


    /*Задание 4
В переменной $date лежит дата в формате '30-11-2017'. Преобразуйте эту дату в формат '2017.11.30'.*/
let $date = '30-11-2017';
console.log($date);
let invert = $date.split('-');
invert.reverse();
$date=invert.join('.');
console.log($date);
/*
    Задание 5
Допустим, пользователь вводит названия городов через пробел.
    Вы их присваиваете переменной.
    Переставьте названия так, чтобы они были упорядочены по алфавиту.*/
let massiv={};
let city = "питер москва архангельск гатчина выборг кингисепп";

console.log('Не отсортированно: '+city);
invert2 = city.split(' ');
invert2.sort();

console.log(invert2);



