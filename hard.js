'use strict';
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

const enWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const ruWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let lang = 'en';
if (lang == 'en') {
    enWeek.forEach((day) => console.log(day));
} else if (lang == 'ru') {
    ruWeek.forEach((day) => console.log(day));
} else {
    console.log('Такого языка не найдено');
}

switch (true) {
    case lang == 'en':
        enWeek.forEach((day) => console.log(day));
        break;
    case lang == 'ru':
        ruWeek.forEach((day) => console.log(day));
        break;
    default:
        console.log('Такого языка не найдено');
}

const langWeek = [enWeek, ruWeek];
lang == 'en' ? langWeek[0].forEach((day) => console.log(day)) : langWeek[1].forEach((day) => console.log(day));


// 'Артём' = 'директор'
// 'Александр' = 'преподаватель'
// остальные = 'студент'
let namePerson = 'Артём';
namePerson == 'Артём' ? console.log('директор') : namePerson == 'Александр' ? console.log('преподаватель') : console.log('студент');