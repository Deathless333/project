    // 006 Классификация типов данных в JavaScript
    
"use strict";

    // Число «number»
let number = 4.6; // может быть целым или не целым числом

console.log(4/0); // Infinity
console.log(-4/0); // -Infinity
console.log('string' * 9); // NaN (Not-a-Number - не число)

    // Строка «string»
const persone = `Pavel 5`; // `можно и такие кавычки`

    // Булевый (логический) тип «boolean»
const bool = true; // либо true либо false

    // Специальное значение «null» - «ничего», «пусто» или «значение неизвестно».
console.log(something); // something is not defined. Мы не можем сослаться на не существующий объект

    // Специальное значение «undefined» - что-то существует, но у него нет ни каого значения, «значение не было присвоено». 
let und;
console.log(und); // undefined. Холодильник в котором ничего нет

    // Тип object (объект)
const obj = {
    name: "Jone", // свойства объекта. name - ключ;  Jone - значение
    age: 25,
    isMarried: false
}

console.log(obj.name);
console.log(obj["name"]); // два вида обращение к объектам, но лучше обращаться через точку

    // Массивы - это не отдельный тип данных, это часный случай объекта. Используется для хранения данных, которые идут строго по порядку
//ключи     0           1            2   3           4   5   - У массивов для каждого значения фиксированный ключ, которые начинаеться с 0
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; // можно перечислять разный тип данных и другие массивы. 
console.log(arr[1]); // orange.jpg
