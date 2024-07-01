
const student = 'Igor';
// student = 'Oleg';

const number = 10;

// console.log(number % 3); // 1
// console.log(number); // 10

// МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ
// +
// -
// /
// *
// **
// %


// Пример использования %
// 76 яиц
// в упаковке помещается 10 яиц

// 7 полных коробок
// 6 яиц без коробки

// console.log(76 % 10); // 6


// ОПЕРАТОРЫ СТРАВНЕНИЯ
// >
// >=
// <
// <=
// ==
// ===
// !=
// !==


// УСЛОВНЫЙ ОПЕРАТОР

const greeting = 'hello, world!';

// console.log(greeting.length);

// IF ELSE
// if(greeting.length > 10) {
//   console.log('string length greater than 10')
// } else if (greeting.length < 10) {
//   console.log('string length less than 10')
// } else {
//   console.log('string length equal to 10')
// }


// ТЕРНАРНЫЙ ОПЕРАТОР
// Условие ? true : false

// greeting.length > 10 ? console.log('string length greater than 10') : console.log('string length less than or equal to 10');

// console.log(greeting.length > 10 ? 'string length greater than 10' : 'string length less than or equal to 10');


// ПРАКТИКА

// 1. Дана строка. Если строка начинается с буквы L то выводить в консоль 'L string', если нет - 'not L string'

const sentence = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// console.log(sentence);
// console.log(sentence[0]); // 'L'

// if(sentence[0] === 'L') {
//   console.log('L string')
// } else {
//   console.log('not L string')
// }

// console.log(sentence[0] === 'L' ? 'L string' : 'not L string');


// 2. Дана строка. Если строка начинается с буквы L/l то выводить в консоль 'L string', если нет - 'not L string'

// console.log(sentence[0] === 'L' || sentence[0] === 'l' ? 'L string' : 'not L string');

// console.log(sentence.startsWith('L') || sentence.startsWith('l') ? 'L string' : 'not L string');

// console.log(sentence[0].toUpperCase() === 'L' ? 'L string' : 'not L string');
