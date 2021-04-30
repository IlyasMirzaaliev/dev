// let out = document.querySelector(".out");

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++) {
//         out.innerHTML += k
//     }
//    out.innerHTML += '<br> ';
// }

// for (let i = 1; i <= 2; i++) {

//   for (let k = 1 ; k < 10; k++) {
//     out.innerHTML += `${i}*${k} = ${k * i} <br>`;
//   }
//   out.innerHTML += '<hr>';
// }

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		document.write(j);
// 	}

// }

// let result = ''
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         result = result + ' ' + i * j
//     }
// }
// document.write(result)

// let result = '';

// for (let i = 1; i <= 4; i++) {
//     for (let k = 1; k <= 4; k++) {
//         result = result + ' ' + i * k;
//     }
// }
// document.write(result)

/*Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.*/

// let arr = ['Ilyas', 'Mirzaaliev', 'Jovid', 'Mirzaaliev', 'Iskandar']

// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i]);
// }

/*Дан массив с элементами 1, 2, 3, 4, 5.
С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.*/

// for (let i = 2; i <= 9; i++) {
//   for (let k = 2; k <= 10; k++) {
//     document.write(`${i}* ${k}= ${i * k} <br>`);
//   }
//   document.write('<hr>')
// }

// for (let i = 1; i <= 9; i++) {
//     for (let k = 1; k <= 5; k++){
//         document.write(`${k} * ${i}= ${k * i} <br>`);
//     }
//     document.write('<hr>')
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue

//        document.write(i)
// }

// let day = new Date()
// let numberDay = day.getDay()
// // console.log(numberDay);

// const days = ['Воскресенье' ,'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// // console.log(days);

// for (let i = 0; i <= days.length; i++) {
//     if (i == numberDay) {
//         document.write(days + '<b>')
//         document.write(days[i] + '<p>');

//     }

// }

// let num = 500;

// while (num > 10) {
// 	num = num / 2;
// }

// console.log(num)

// let result = ''

// for (let i = 1; i <= 3; i++) {
//     for (let k = 1; k <= 3; k++) {
//         result = result + ' ' + i + k

//         // result = `${ result = i + k}`
//     }
// }

// console.log(result);

let array = [];

for (let i = 5, k = 0; i <= 100; i+=5, k++) {
    array[k] = i

}
console.log(array);