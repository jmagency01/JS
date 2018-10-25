
/*
Задача 1
Написать программу, которая будет генерировать игровое поле размером N x N .
    Где N - количество ячеек,
    каждая ячейка - отдельный div (размеры div на Ваше усмотрение).
Значение N  получаем от пользователя.
    Например, поле 4 x 4
*/
// размер поля нужно получать отдельно и передавать в функцию аргументом
let fieldSize = prompt("Введите размер поля");

generateField(fieldSize);

function generateField(fSize) {

    let field = document.createElement('div');
    let divbase = document.createElement('div');
    divbase.style.height = "600px";
    divbase.style.width = "600px";

    document.body.appendChild(divbase);
    for (i=0; i < fSize*fSize; i++) {
        let div = document.createElement('div');
        div.style.border = "1px solid black";
        div.style.height = divbase.offsetWidth/fSize + "px";
        div.style.width = divbase.offsetWidth/fSize + "px";
        div.style.cssFloat = "left";
        div.style.boxSizing = "border-box";
        divbase.appendChild(div); // добавление в родительский контейнер

    }

}




/*
let N = prompt('Введи количество');
let N2 = prompt('В ряду');
let divbase1 = document.createElement('div');
divbase1.style.display='inline-block';
for (let i=0; i<N; i++) {
    let div = document.createElement('div');
    divbase1.appendChild(div);
    div.style.background='green';
    div.style.width='100px';
    div.style.height='100px';
    div.style.margin='5px';

    }
let usebase = document.body;
usebase.appendChild(divbase1);
*/

/*
function createMatrix(number) {
    let matrixContainer;
    matrixContainer = document.createElement('div');
    let divh = prompt('Введите количество рядов: ');
    for (i = 0; i < divh; i++) {
        let div = document.createElement('div');
        div.style.background = 'red';
        div.style.height = '100px';
        div.style.width = '100px';
        div.style.display = 'inline-block';
        let text = document.createTextNode('Клеточка');
        div.appendChild(text);


        for (y = 0; y < divh; y++) {
            let div2 = document.createElement('div');
            div2.style.background = 'green';
            div2.style.height = '100px';
            div2.style.width = '100px';
            let text2 = document.createTextNode('Клеточка');
            div2.appendChild(text2);
            ParentElem = document.body;
            ParentElem.appendChild(div2);
        }
        matrixContainer.appendChild(div2);

    }
}
*/


/*
Задача 2
Написать программу, которая выводит текущее время в html и обновляет значения каждую секунду.
    Время в формате чч:мм:cc.
    Оформление на Ваше усмотрение.
*/
/*var timer = document.getElementById("clock");
function clock() {
    var datas = new Date();
    var hours=datas.getHours();
    var min=datas.getMinutes();
    var sec = datas.getSeconds();
    var zerom = zeros = '';
    if(min_ < 10) zerom = '0';
    if(sec_ < 10) zeros = '0';
    timer.innerHTML = hours + ':' + zerom+min + ':' + zeroc+sec;
   }
setInterval(clock, 100);*/
//самый большой прикол в том, что я написал код, который должен работать,
// потом нашел в интернете код , один в один. и мой не работает, а интернетовский работает. не понимаю в чем проблема"!!!!!!

var pos = document.getElementById("time");
function time() {
    var today = new Date();
    var hours_ = today.getHours();
    var min_ = today.getMinutes();
    var sec_ = today.getSeconds();
    var zerom = zeros = '';
    if(min_ < 10) zerom = '0';
    if(sec_ < 10) zeros = '0';
    pos.innerHTML = hours_+':'+zerom+min_+':'+zeros+sec_;
}
setInterval(time, 100);
pos.style.color='white';
pos.style.width='60px';
pos.style.background='blue';
pos.style.margin='10px';






/*  Задача 3
От сервера пришел массив с объектами (данные о пользователях).
Каждый объект обладает следующими свойствами: id, name, email, phone, position.

  Необходимо написать программу, которая будет генерировать таблицу для вывода информации о пользователях в html
Для генерации такого массива пользуйтесь функцией createUserArr.
  let users = createUserArr();//  данные для вывода в таблицу
function createUserArr() {
  let arr = [];
  for (let i = 0; i < 100; i++){
      arr.push(
          {
              id: i,
              name: "Какое-то имя",
              email: "Email",
              phone: "+79991112233",
              position: "Должность"
          }
      )
  }
  return arr;
}

В результате должна получиться таблица вида:

  №
Имя
E-mail
Номер телефона
Должность
1
Какое-то имя
Email
+79991112233
Должность
2
Какое-то имя
Email
+79991112233
Должность
3
Какое-то имя
Email
+79991112233
Должность

И так далее, пока информация обо всех пользователях не будет выведена.*/
let users = createUserArr(105, 'Vlad', 'jimmy@jimmy.ru', '+7920202020', 'гасторбайтер');
function createUserArr() {
    let arr = [];
    for (let i = 0; i < 4; i++){
        arr.push(
            {
                id: i,
                name: "Какое-то имя",
                email: "Email",
                phone: "+79991112233",
                position: "Должность"
            }
        )
    }
    return arr;
}
let table = '<table>';
table = table + '<thead>';
table += '<tr>';
table += '<td class="head">' + 'id' + '</td>';
table += '<td class="head">' + 'Имя' + '</td>';
table += '<td class="head">' + 'email' + '</td>';
table += '<td class="head">' + 'phone' + '</td>';
table += '<td class="head">' + 'position' + '</td>';
table += '</thead>';
for (let i = 0; i<users.length; i++){
    table += '<tbody>';
    table += '<tr>';
    table += '<td>' + users[i].id + '</td>';
    table += '<td>' + users[i].name + '</td>';
    table += '<td>' + users[i].email + '</td>';
    table += '<td>' + users[i].phone + '</td>';
    table += '<td>' + users[i].position + '</td>';
    table += '</tbody>';
}
window.onload = function () {
    document.getElementById('table').innerHTML = table + '</table>';
};


//ДЗ№6. Задание 1


let click = document.getElementById('click');
addEventListener('change', showElem);
function showElem(evt) {
        console.log(evt.target);
        let container = document.getElementById('container');
        if (evt.target.checked) {
            container.innerHTML = '<h3>Мошенники, остерегайся!</h3>';
        }else {
            container.innerHTML = "";
        }
};

//ДЗ№6. Задание 2

/*Реализовать возможность добавления комментариев
к статье. Текст комментария пользователь вводит в <textarea>,
добавление происходит по нажатию на кнопку Комментировать.*/

window.onload = function(){
    document.getElementById('add').onclick = startKomm;

};
function startKomm(){
    var text = document.getElementById('txt').value;
    var komm = document.createElement('p');
    var newText = document.createTextNode(text);
    komm.appendChild(newText);
    document.getElementById('komments').appendChild(komm);
    return true;
 }


   /* Задача 3
Написать программу, которая будет осуществлять сортировку строк таблицы
из задачи 3 (предыдущего дз) по значениям столбца
по нажатию на название этого столбца.
*/


   /* Задача 4
Сгенерировать игровое поле (задача 1 предыдущего дз),
в ячейки рандомно спрятать несколько призов.
    Пользователю дается 3 попытки найти их -
по нажатию на ячейку либо открывается приз (иконка, изменения цвета и тд),
либо иконка, сообщающая, что приза нет.
    Количество оставшихся попыток выводим рядом с игровым полем.*/


/*let container = document.getElementById('container');
container.style.display= 'none';
let divclick = document.getElementById('click');
divclick.appendChild(radio);
divclick.addEventListener('container', showElemInfo);
function showElemInfo(event) {
if (divclick ===true) {
    let elem = event.target;
    container.style.display= 'block';
}
};*/
/*

let container = document.getElementById('container');
container.addEventListener('click', showElemInfo);

function showElemInfo(event) {
    // console.log(this);
    let elem = event.target;
    console.log(elem);
    let index = elem.dataset.index;
    if (index) {
        elem.appendChild(document.createTextNode("" + index));
    }
}


*/

/*

let sorty = prompt('Укажите желаемое количество клиентов на странице');
var tables = document.getElementById('table');
var td = document.createElement('td');
var tr = document.createElement('tr');
tables.appendChild(tr);
tr=createUserArr;
var counter = 0;
for (var key in push) {
    counter++;
}
function createUserArr() {
    let arr = [];
    for (let i = 0; i < sorty; i++){
        arr.push(
            {
                id: i,
                name: "Какое-то имя",
                email: "Email",
                phone: "+79991112233",
                position: "Должность"
            }
        )
    }
    return arr;
}


parents = document.body;
parents.appendChild(createUserArr);
*/






   /* И подумайте над Задачей 4: Написать программу, которая будет осуществлять сортировку строк таблицы из задачи 3 по значениям столбца. */
