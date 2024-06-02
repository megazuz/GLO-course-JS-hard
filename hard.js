let num = 266219;
const str = num.toString();
const l = str.length;
// console.log(l);
let Z = 1;

for (let i = 0; i < l; i++) {
    // console.log('проход ' + i);
    Z *= str[i];
    // console.log(Z);
};
console.log('произведение всех цифр Z = ' + Z);
console.log('проверка: ' + 2 * 6 * 6 * 2 * 1 * 9);
const Z3 = Z ** 3;
console.log('Z в кубе = ' + Z3);
console.log('проверка: ' + (2 * 6 * 6 * 2 * 1 * 9) * (2 * 6 * 6 * 2 * 1 * 9) * (2 * 6 * 6 * 2 * 1 * 9));
console.log('первые две цифры числа "Z в кубе": ' + Z3.toString().substring(0, 2)); 