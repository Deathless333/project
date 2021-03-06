    // 005 Переменные и строгий режим
    
"use strict"; // Строгий режим - объявление того, что мы работаем в современном режиме. Всегда использовать

// 3 варианта задания переменных: let, const, var
let number = 5; //создали коробочку c именем number и содержимым 5.
const leftBorderWidth = 1; //создали коробочку c именем и содержимым 1. Для переменных созданные через const нельзя повторно присваивать другие данные

number = 10;
console.log(number);

const obj = {  // прямых констант в JS не бывает
    a: 50
};
obj.a = 10;
console.log(obj);

console.log(name1);
var name1 = 'Ivan'; // устаревший способ. Проблема var в том, что эта переменная существует еще до того, как была объявлена в коде и видна везде - Хоистинг

// let и const видны тоьлко в блоке кода ограниченным фигурными скобками {}
{
    let result = 50;
}
console.log(result);

a = 15; // в строгом режиме нельзя объявлять переменные без ключевого слова
console.log(a);

alert(5);
[].push('a');