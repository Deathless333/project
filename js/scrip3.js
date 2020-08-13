    // 007 Простое общение с пользователем
    
"use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

/*const answer = prompt("Вам есть 18?", "");
console.log(typeof(answer)); // Тип данных string

const answer1 = prompt("Вам есть 18?", "");
console.log(answer1 + 5); // Тип данных string

const answer2 = +prompt("Вам есть 18?", ""); // Приобразовали в number
console.log(answer2 + 5);*/

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);
console.log(typeof(answers));
console.log(typeof(null)); // Показывает object - признанная ошибка JS

console.log(typeof 42); // expected output: "number"
console.log(typeof 'blubber'); // expected output: "string"
console.log(typeof true); // expected output: "boolean"
console.log(typeof undeclaredVariable); // expected output: "undefined"
