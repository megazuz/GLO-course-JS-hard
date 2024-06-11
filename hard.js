'use strict';
// lesson01

// let num = 266219;
// const str = num.toString();
// const l = str.length;
// // console.log(l);
// let Z = 1;

// for (let i = 0; i < l; i++) {
//     // console.log('проход ' + i);
//     Z *= str[i];
//     // console.log(Z);
// };
// console.log('произведение всех цифр Z = ' + Z);
// console.log('проверка: ' + 2 * 6 * 6 * 2 * 1 * 9);
// const Z3 = Z ** 3;
// console.log('Z в кубе = ' + Z3);
// console.log('проверка: ' + (2 * 6 * 6 * 2 * 1 * 9) * (2 * 6 * 6 * 2 * 1 * 9) * (2 * 6 * 6 * 2 * 1 * 9));
// console.log('первые две цифры числа "Z в кубе": ' + Z3.toString().substring(0, 2));

// lesson02

// const enWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// const ruWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

// let lang = 'en';
// if (lang == 'en') {
//     enWeek.forEach((day) => console.log(day));
// } else if (lang == 'ru') {
//     ruWeek.forEach((day) => console.log(day));
// } else {
//     console.log('Такого языка не найдено');
// }

// switch (true) {
//     case lang == 'en':
//         enWeek.forEach((day) => console.log(day));
//         break;
//     case lang == 'ru':
//         ruWeek.forEach((day) => console.log(day));
//         break;
//     default:
//         console.log('Такого языка не найдено');
// }

// const langWeek = [enWeek, ruWeek];
// lang == 'en' ? langWeek[0].forEach((day) => console.log(day)) : langWeek[1].forEach((day) => console.log(day));

// lesson03

// // 'Артём' = 'директор'
// // 'Александр' = 'преподаватель'
// // остальные = 'студент'
// let namePerson = 'Артём';
// namePerson == 'Артём' ? console.log('директор') : namePerson == 'Александр' ? console.log('преподаватель') : console.log('студент');

// lesson04

// let someText = prompt('Введите строку', 'куцолаитукаидужкажйцу');

// function trimText30(text) {
//     if ((typeof text) != 'string') {
//         alert('Переданный тип данных не строка!');
//     };
//     text = text.trimLeft().trimRight();
//     if (text.length > 30) {
//         return text.slice(0, 30) + '…';
//     } else return text;
// }

// console.log('"' + trimText30(someText) + '"');

// lesson05

// const arr = ['3475656.5466456', '-44534534', '234', '.534543', '-.42313', '345465465423423534654', '400'];
// arr.forEach(x => {
//     if (String(Math.abs(parseFloat(x)))[0] === '4') {
//         console.log(x);
//     };
//     if (String(Math.abs(parseFloat(x)))[0] === '2') {
//         console.log(x);
//     };
// });

// // console.log(String(Math.abs(parseFloat('-44534534')))[0]);

// for (let num = 1; num < 101; num++) {
//     let simple = false;
//     for (let i = 2; i < num; i++) {
//         if ((num % i) == 0) {
//             break;
//         } else {
//             simple = true;
//         };
//     };
//     if (simple) {
//         console.log(num);
//     };
// };

// lesson06 находится в отдельном репозитории

// lesson07

// let body = document.body;
// console.log(body);

const week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// const startText = ['<h3>Календарь на текущую неделю</h3>', '<ul>'];
// const endText = ['</ul>'];
const date = new Date();
const day = date.getDay() - 1;
// console.log(day);

week.forEach(function (item, index) {
    let style = '';
    if (index == day) {
        style += 'font-weight: bold;'
    };
    if ((index == 5) || (index == 6)) {
        style += 'font-style: italic;';
    }
    console.log('%c' + item, style);
});

// body.textContent = startText.join('\n') + calendar.join('\n') + endText.join('\n');
// console.log(body);