/*
Задача 1*
Есть три вершины X, Y, Z.
    Их координаты (x1, x2), (y1, y2), (z1, z2) заданы как целые числа.
    Нужно определить - является ли треугольник с заданными координатами прямоугольным.
*/
console.log('Задача №1');
// a=x; b=y; c=z; - все из под выподверта)
let x1 = 1;
let x2 = 3;
let y1 = 4;
let y2 = 2;
let z1 = 1;
let z2 = 2;

let ab1 = y1 - x1;
let ab2 = y2 - x2;
let AB = ((ab1*ab1)+(ab2*ab2));
console.log(AB);
let ac1 = z1 - x1;
let ac2 = z2 - x2;
let AC = ((ac1*ac1)+(ac2*ac2));
console.log(AC);
let bc1 = z1 - x1;
let bc2 = z2 - y2;
let BC = ((bc1*bc1)+(bc2*bc2));
console.log(BC);
if (AC>BC>AB) {
    let C = AC;
    let A = BC;
    let B = AB;
} else if (BC>AC>AB){
    C = BC;
    A = AC;
    B = AB;
} else if (AB>AC>BC){
    C = AB;
    A = AC;
    B = BC;
}

if (C > (A + B) || C < (A + B)){
    console.log('Треугольник  не является прямоугольным');
}
else {
    console.log('Треугольник является прямоугольным');
}



/* ЭТО КОРОЧЕ НЕПРАВИЛЬНЫЙ ПОДХОД
let x1 = 10;
let x2 = 0;
let y1 = 0;
let y2 = 10;
let z1 = 0;
let z2 = 0;
if (x1 === y1 || x1 === z1 || y1 === z1 && x2 === y2 || x2 === z2 || y2 === z2) {
    console.log('Треугольник является прямоугольным');
} else console.log('Треугольник не является прямоугольным');
*/


/*Задача 2*
Вывести в консоль название соответствующего времени года (зима, весна и тд), в зависимости от текущего месяца.
Месяц можно получить с помощью метода объекта даты:
let monthNum = new Date().getMonth();
Получим номер месяца от 0 до 11 (где, 0 - это январь, 1 - февраль и тд)*/
console.log('Задача №2');
let monthNum = new Date().getMonth();
let dataNum = new Date().getDate();
if (monthNum === 0) {
    console.log('Сегодня ' + dataNum + ' января. Зима. Пора зимних развлечений');
} else if (monthNum === 1) {
    console.log('Сегодня ' + dataNum + ' февраля. Зима. Грейся везде, где тепло)');
} else if (monthNum === 2) {
    console.log('Сегодня ' + dataNum + ' март. Первый месяц весны');
} else if (monthNum === 3) {
    console.log('Сегодня ' + dataNum + ' апреля. Весна в самом расцвете');
} else if (monthNum === 4) {
    console.log('Сегодня ' + dataNum + 'мая. Весна в закате');
} else if (monthNum === 5) {
    console.log('Сегодня ' + dataNum + 'июня. Ура! Лето!');
} else if (monthNum === 6) {
    console.log('Сегодня ' + dataNum + ' июля.Середина лета');
} else if (monthNum === 7) {
    console.log('Сегодня ' + dataNum + ' августа.Конец лета');
} else if (monthNum === 8) {
    console.log('Сегодня ' + dataNum + ' сентября. Начало прекрасной осени');
} else if (monthNum === 9) {
    console.log('Сегодня ' + dataNum + ' октября. Прекрасная осень!');
} else if (monthNum === 10) {
    console.log('Сегодня ' + dataNum + ' ноября. Конец осени. Зима близко');
} else {
    console.log('Сегодня ' + dataNum + ' декабря. Суровая зима. Скоро Новый Год');
}


/*Задача 3
Вывести используя таблицу умножения чисел до 10.*/
console.log('Задача №3');
var i = 1;
var kit = '';
while (i < 10) {
    kit += i + ' x 1 = ' + (i * 1) + '  ';
    i++;
}
console.log(kit);
/*Задача 4
Создать массив из чисел.
    Выполнить сортировку массива по возрастанию методом пузырька.
    Запрещено использовать стандартные методы.*/

/*Задача 5
Создать таблицу соответствия между весом в фунтах и весом в килограммах для значений от 1 до 10.*/


/*Задача 6*
Задать количество тарелок и количество моющего средства.
    Моющее средство расходуется из расчета 0,5 на одну тарелку.
    В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.*/

console.log('Задача №6');
let plats = prompt('Введите количество тарелок, которое вы хотите помыть (в шт):');
let cleaner = prompt('Введите количество имеющегося моющего средства(в мл):');
for (; plats > 0 && cleaner > 0;) {
    console.log("Осталось тарелок: " + plats);
    console.log('Осталось моющего средства:' + cleaner);
    plats--;
    cleaner = cleaner - 0.5;
}

/*Задача 7
Создайте программу, выводящую на экран все четырехзначные числа последовательности 1000 1003 1006 1009 1012 1015.*/
console.log('Задача №7');
let thousand = 1000;
let step2 = 3;
while (10000 > thousand) {
    console.log("Арифметическая прогрессия = ", thousand);
    thousand = thousand + step2;
}
/*
Задача 8*
Создайте программу, выводящую на экран все неотрицательные элементы последовательности 90 85 80 75 70 65 60.
*/
console.log('Задача №8');
let Pos = 90;
let step = 5;
while (Pos > 0) {
    console.log("Арифметическая прогрессия = ", Pos);
    Pos = Pos - step;
}


/*Задача 9*
Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128.*/
console.log('Задача №9');
let j = 1;
let bit = 2;
while (j <= 20) {
    console.log("Геометрическая прогрессия = ", bit);
    bit = parseInt(bit * 2);
    j++;

}

/*
Задача 10
В городе N проезд в трамвае осуществляется по бумажным отрывным билетам.
    Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов с номерами от 000001 до 999999.
«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна сумме последних трёх цифр,
    как, например, в билетах с номерами 003102 или 567576.
Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и теперь раздумывает, как много сувениров потребуется.
    С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.*/
let bilet1 = 1



