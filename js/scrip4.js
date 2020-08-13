    // 008 Интерполяция (ES6)
    
"use strict";

const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4'); // сатрый метод
console.log(`https://someurl.com/${category}/4`); // прием интерполяции, работает только с ``

const user = "Pavel";

alert(`Привет, ${user}`);