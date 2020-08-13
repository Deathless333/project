    // 009 Операторы в JS
    
"use strict";

console.log('arr' + " - object");
console.log(4 + +"5"); // 9 исрользуеться унарный плюс
console.log(4 + "5"); // 45

let z = 1;
z = -z;
console.log(z); // -1, применили унарный минус

let x = 1, y = 3;
console.log(y - x); // 2, бинарный минус

let incr = 10,
    decr = 10;

++incr; // Инкремент - увеличивает на 1
--decr; // Декремент - уменьшает на 1

console.log(incr);
console.log(decr);

incr++; // Постфиксная форма - вначале возвращает старое значение, а потом его увеличивает
++incr; // Префиксная форма - возвращает увеличенное значение

let incr1 = 10,
    decr1 = 10;

console.log(incr1++); // 10
console.log(decr1--); // 10

let incr2 = 10,
    decr2 = 10;

console.log(++incr2); // 11
console.log(--decr2); // 9

console.log(5%2); // Результат 1. % - оператор остаток от деления

console.log(2*4 == 8); // Оператор равно выдает булевое значение true
console.log(2*4 == '8'); // true. Сравнение по значениею, а не по типу данных (приводит операнды к одному типу)
console.log(2*4 === '8'); // false. Строгое сравнение и по значению и по типу

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose); // Логическое И возвращает true, если оба операнда true, иначе false
console.log(isChecked || isClose); // Логическое ИЛИ возвращает true, если хотя бы один операнд true, иначе false

const not = false;

console.log(!not); // Логическое НЕ. Оператор отрицания

console.log(2 + 2 * 2 === 8); // false. Приоритет операторов. Вначале *, потом +, потом ===

console.log(2 + 2 * 2 != '6'); // Не равно. Возвращает false, так как операнды равны
console.log(2 + 2 * 2 !== '6'); // Строго не равно. Возвращает true, так как типы не равны