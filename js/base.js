//задача №1
/*
let shir = 12; //ширина
let dlina = 15; //длина
let visota = 16; // высота
var S = 2*((shir*dline)+(dlina*visota)+(shir*visota));

if (shir>visota){alert('Ширина больше высоты.' + 'Площадь: ' + S);
}
else {alert('Высота больше ширины.'+ 'Площадь: ' + S);}
*/



//задача №2
let hr =10*100;
let d = '15';
let sh = '25';
var f = hr % (d*sh);
console.log('Остальсь свободно ' + f + ' квадратных метров');
//результат должен быть 400м. но выдает NuN

//задача №3
var a = 15*100
var b = 600
var R = b-a;
console.log(R);
//задача №4
let x = 11;
let y =9;
while (x>=y) {
    x--; y++;
}
console.log('x = '+ x, 'y = ' + y);



//Задача №5
let m = prompt('Введите M');
let n = prompt('Введите N');
n = parseFloat(n);
m = parseFloat(m);
10 - m > 10 - (-n) ? console.log(m + ' ближе к 10, чем ' + n) :console.log(n + ' ближе к 10, чем ' + m);

//Задача №6

