
//"Встроенное" объявление переменноей (let num = 0)

// for (let num0 = 0; num < 5; num0++) {
//     console.log(num0);
    
// }
// __________________________________________________________________________

// Можно убрать часть цикла


// let num01 = 0;
// for (; num01 < 5; num01++) {
//     console.log(num01)
// }

// console.log(`Ввывод вне цикла ${num01}`)

// _________________________________________________________________________

// Деректива BREAK

let i = 1;

for (; i < 5; i++) {
    console.log(i)
    if (i === 5) break;
}

//так же console.log можно вывести снаружу

console.log(i)