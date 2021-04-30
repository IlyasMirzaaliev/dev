/ *Цикл while в JavaScript* /;

/*Циклы используются для того, чтобы некоторый участок кода выполнился несколько раз подряд.
Но это не нужно - у нас есть возможность сделать так, чтобы JavaScript за нас выполнил некоторую операцию нужное количество раз.
Например, возвел все элементы массива в квадрат.

let i = 1; // задаем какую-нибудь переменную

while (i <= 5) {
	console.log(i); // выводим содержимое i в консоль
	i++; // увеличиваем i на единицу при каждом проходе цикла
}*/

/*Задача 35.1 Выведите в консоль числа от 1 до 100. */

// let i  = 1;
// while ( i <= 100) {
//     console.log(i);
//     i++
// }

/*Задача 35.1 Выведите в консоль числа 11 до 33.    */

// let i = 11;
//
// while (i <= 33) {
//     console.log(i)
//     i++
// }

/*Задача 35.3 Выведите в консоль четные числа в промежутке от 0 до 100.*/

// let i = 0;
// while ( i <= 100) {
//     console.log(i)
//     i += 2
// }

/*Задача 35.4 Выведите в консоль нечетные числа в промежутке от 1 до 99.*/

// let k = 30;
// while ( k <= 99 ) {
//     console.log(k)
//     k += 3
// }

/*Задача 35.5 Выведите в консоль числа от 30 до 0.*/

// let i = 30;
//
// while (i  >= 0) {
//     console.log(i)
//     i --
// }

/*Цикл for в JavaScript*/

/*
	В начале цикла i будет равно нулю,
	цикл будет выполнятся пока i <= 9,
	после каждого прохода к i прибавляется единица:
*/
/*Задача 37.1 С помощью цикла for выведите в консоль числа от 1 до 100.*/
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

/*Задача 37.2 С помощью цикла for выведите в консоль числа от 11 до 33.*/

// for (let i = 11; i <= 33; i++) {
//     console.log(i)
// }

/*Задача 37.3 С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.*/

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i)
// }
//
//
// for (let i = 0; i <= 100; i += 50) {
//     console.log(i)
// }

/*Задача 37.4 С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.*/

// for (i = 1; i <= 99; i+=2) {
//     console.log(`Не четное число ${i}`)
// }
//
// for (i = 1; i <= 99; i+=6) {
//     console.log(`Не четное число ${i}`)
// }

/*Задача 37.5 С помощью цикла for выведите в консоль числа от 100 до 0.*/

// for (let i = 100; i >= 0; i-- ) {
//     console.log(i)
// }

/*не четные числа*/
// for (let i = 99; i >= 1; i-=2) {
//     console.log(i)
// }

/*__________________________________________________________________________________________________*/

/*Накопление результата в цикле JavaScript*/

// let result = 0;
//
// for (let i = 1; i <= 10; i++) {
//     result = result + i;
//
// }
//
// console.log(result); // искомая сумма 5050

/*Задача 38.1 Найдите произведение целых чисел от 1 до 20.*/

// let result1 = 0;
//
// for (let i = 1; i <= 20; i++) {
// result1 = result1 + i
// }
//
// console.log(result1) // искомая сумма 210

/*Задача 38.2 Найдите сумму четных чисел от 2 до 100.*/

// let res = 0;
//
// for (let i = 2; i <=100; i+=2) {
//     res = res + i
// }
// console.log(res)

/*Задача 38.3 Найдите сумму нечетных чисел от 1 до 99.*/

// let res = 0

// for (let i = 1; i <= 99; i+=2){
//     console.log(i)
// }

/*Цикл for для массивов в JavaScript*/

// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i <= arr.length -1; i++) {
//     console.log(arr[i]) /* выведет 1, 2, 3, 4, 5/ */
// }

/*Задача 39.1 Дан массив с элементами 'a', 'b', 'c', 'd', 'e'.
С помощью цикла for выведите все эти элементы на экран.*/

// let arr2 = ['a', 'b', 'c', 'd', 'e'];
//
// for (let i = 0; i < arr2.length -1; i++) {
//     console.log(arr2[i])
//
// }

/*                                          Перебор массива и if
Внутри цикла for можно использовать условие if.
Давайте, например, при переборе массива, будем выводить в консоль только элементы с четными числами:*/

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

/*Задача 39.3 Дан массив с элементами 1, 2, 3, 4, 5.
С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.*/

// let arr1 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr1.length ; i++) {
//     if (arr1[i] % 2 == 1) {
//         console.log(arr1[i]) // выдаст 1, 2, 3
//     }
// }

/*Нахождение суммы элементов*/
//
// let result = 0;
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i] * arr[i];
// }
//
// console.log(result);

/*Задача 39.6
Дан массив с элементами 2, 5, 9, 15, 1, 4.
С помощью цикла for и оператора if выведите в консоль те элементы массива,
которые больше 3-х, но меньше 10.   */

// let arr = [2, 5, 9, 15, 1, 4]
//
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10)  {
//         console.log(arr[i])
//     }
//     // console.log(arr[i])if
// }

// let res = 0;
// let num = '123456'
// // let numToStr = Number(num);
//
//
// for (let i = 0; i < +num.length; i++) {
//     // res = 0
//     res += Number(num[i]) //+ Number(num[i]);
//     // console.log(res)
// }
//
// console.log(res)

/*===============================Общий синтаксис цикла for в JavaScript============================== */

/* Вы уже знаете синтаксис цикла for:

for ( начальные команды; условие окончания
цикла; команды после прохода цикла ) {
    тело цикла
}
На самом деле начальные команды и команды после прохода цикла могут состоять не из одной, а из нескольких, разделяемых запятыми.

Для примера давайте сделаем два счетчика: первый пусть каждую итерацию цикла увеличивается на единицу, а второй - на двойку:

    for (let i = 0, j = 0; i <= 9; i++, j += 2) {
        console.log(i, j);
    }
*/

/* ========================== Перебор массива циклом for-of в JavaScript=================================

* В ES6 появился новый цикл for-of, предназначенный конкретно для перебора массивов.
* Он имеет следующий синтаксис:  */

// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     console.log(elem); // вывод  1, 2, 3, 4, 5,
// }

// let array = [2, 5, 9, 15, 1, 4]

// for (const elem of array) {
//     if (elem > 3 && elem < 10) {
//         console.log(elem);
//     }
// }

// let arr = [1, 2, 3, 4, 5, -5, -4, -3, -2, -1];
// let result = 0;

// for (const elem1 of arr) {
//     if (elem1 > 0 ) {
//         result += elem1
//     }
// };
// console.log(result);

// let array = [1, 2, 3, 4, 5];
// let res = 0;

// for (const elem of array) {
//     res += elem / 5
// }
// console.log(res);

// let arr = [1, 2, 6, 3, 8, 0, 6];

// for (const elem of arr) {
//     if (elem == arr) {
//         console.log(elem(arr));
//     }
// }

/*Задача 40.1 Дан массив с элементами 'a', 'b', 'c', 'd', 'e'.
С помощью цикла for-of выведите все эти элементы на экран.*/

// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let elemOfarr of arr) {
//     console.log(elemOfarr)
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

/*Задача 40.2 Дан массив с элементами 1, 2, 3, 4, 5.
С помощью цикла for-of найдите сумму элементов этого массива.*/

// let res= 0;
// let numArr = [1, 2, 3, 4, 5];
//
// for (let elem of numArr) {
//     // console.log(elem)
//     res += elem
//
// }
// console.log(res)

/*Задача 40.3 Пусть у вас есть массив с названиями месяцев.
С помощью цикла выведите на экран все месяцы из массива.
Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.*/

// let months = ['september', 'October', 'november'];
//
// for (let i = 0; i < months.length; i++) {
//     console.log(months[i])
// }
//
//
// for (let elemM of months) {
//     console.log(elemM)
// }

/*=====================================================================================================*/

/*Задача 40.4 Пусть у вас есть массив с названиями месяцев.
 Пусть в переменной month хранится номер текущего месяца, например, 10.
 С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом.
 Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.*/

// let month = 10 ;
//
// for (let i = 0; i < month.length; i++) {
//     console.log(month[i])
// }

/*КАК СДЕЛАТЬ?*/

/*=====================================================================================================*/

/*=================================Перебор объекта циклом for-in в JavaScript==========================*/

/*В предыдущем уроке мы с вами изучали цикл for-of для перебора массива.
Существует похожий цикл for-in, предназначенный для перебора объектов.
Он имеет следующий синтаксис:

for (let переменнаяДляКлюча in объект) {

}

*/

// Давайте с помощью цикла for-in выведем ключи этого объекта:

//     let obj1 = {a: 1, b: 2, c: 3};
//
// for (let key in obj1) {
//     console.log(key); // выведет 'a', 'b', 'c'
// }
// // А теперь выведем элементы:
//
//     let obj1 = {a: 1, b: 2, c: 3};
//
// for (let key in obj1) {
//     console.log(obj1[key]); // выведет 1, 2, 3
// }

// _____________________________________________________________________________________________________

/*Задача 41.1Дан объект следующий объект:
С помощью цикла for-in найдите сумму элементов этого объекта.*/

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let res = 0;
//
// // for (let item in obj) {
// //     res += obj[item]
// // }
// // console.log(res)
//
// let obj1 = {a: 54, b: 23, c:32, d: 42}
//
// for (let item in obj1) {
//     res += obj1[item]* obj1[item]
// }
//
// console.log(res)

/*==================================Инструкция break в JavaScript====================================*/
//
// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     if (elem == 1) {
//         console.log('we gave it ')
//         break;
//     }
// }

// let str = '1234567890'
// for (let elem of str.toString()) {
//     if (elem == 4) {
//         console.log('i got it')
//         break;
//     }
// }

/*=====================================Инструкция continue в JavaScript================================*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//
// for (let elem of arr) {
//     let result;
//
//     if (elem % 2 == 0) {
//         result = elem * elem;
//         console.log(result);
//
//     } else if (elem % 3 == 0) {
//         result = elem * elem * elem;
//         // console.log(result);
//
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// for (let elem of arr) {
//     let result;
//
//     if (elem % 2 == 0) {
//         result = elem * elem;
//     } else if (elem % 3 == 0) {
//         result = elem * elem * elem;
//     } else {
//         continue; // перейдем на новую итерацию цикла
//     }
//
//     console.log(result); // выполнится, если делится на 2 или 3
// }

/*=====================================Работа с флагами в JavaScript===================================*/

// let arr = [1, 2, 3, 4, 3, 5];
//
// for (let elem of arr) {
//     if (elem == 3) {
//         console.log('есть'); // выведет несколько раз
//     }
// }
//
//
// let arr2 = [1, 2, 3, 4, 3, 5];
//
// for (let elem of arr2) {
//     if (elem == 3) {
//         console.log('есть');
//         break; //завершим цикл
//     }
// }
//
// let str  = 'mirzaaliev';
// for (let ele of str) {
//     if (str.charAt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9) == 'z') {
//         console.log('we have')
//         break;
//     }
// }

// console.log(str.charAt('0'))

/*Давайте теперь попробуем сделать так, чтобы,
если в массиве вообще нет элементов со значением 3, выводилось 'нет'.
Распространенным заблуждением будет добавить else
 к нашему ифу - в этом случае 'нет' будет выводиться на все элементы, не являющиеся 3:*/

// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     if (elem == 3) {
//         console.log('есть'); // выведет на элементе 3
//     } else {
//         console.log('нет'); // выведет на элементах 1, 2, 4, 5
//     }
// }

// let arr = [1, 2, 3, 4, 5];
// let flag = false; // считаем, что элемента 3 нет в массиве
//
// for (let elem of arr) {
//     if (elem == 3) {
//         flag = true; // элемент есть - переопределим переменную flag
//         break; // выйдем из цикла
//     }
// }

// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     if (elem == 3) {
//         console.log('есть'); // выведет на элементе 3
//     } else {
//         console.log('нет'); // выведет на элементах 1, 2, 4, 5
//     }
// }

// let arr = [1, 2, 3, 4, 5];
// let flag = false;
//
// for (let elem of arr) {
//     if (elem === 3) {
//         flag = true;
//         break;
//     }
// }
//
// if (flag === true) {
//     console.log('есть');
// } else {
//     console.log('нет');
// }

// let str = ['Ilyas', 'Iskandar', 'Mama', 'd', 'e'];
//
//
// let flag = false;
//
// for (let letters of str ) {
//     if (letters ===  str[0]) {
//         flag = true;
//         break;
//     }
// }
// if (flag === true) {
//     console.log('we have')
// }else {
//     console.log('we have not')
// }

/*=================================Нахождение простых чисел на JavaScript=============================*/

// const array= [1, 2, 3, 4, 5]
// let result = 0;
// 3 > 1
// // for (let i = 0; i < array.length; i++) {
// //     result += array[i];

// // }
// // console.log(result);

// let res = 1;

// for (let i = 0; i < array.length; i++) {
//     res = array[i] * array[i];

// }

// console.log(res);

// let num = [2, 5, 9, 15, 1, 4]

// for (let i = 0; i < num.length; i++) {
//     if (num[i] > 3 && num[i] < 10) {
//         console.log(num[i]);
//     }
// }

// const array = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5 ];
// let result = 0

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0 ) {
//         result += array[i];
//     }
// }
// console.log(result);

// for (let i = 0, j = 0; i <= 9; i++, j += 2) {
// 	console.log(i, j);
// }

// const array = [1, 2, 3, 4, 5, 0, -1, -2, -3, -4, -5, 0]

// for (elem of array) {
//     if (elem == 3) {

//         break
//     }
//     console.log('est');
// }

// for (let i = 0; i < array.length; i++) {
//     if (array[i] == 3) {
//         console.log('set');
//         break
//     }

// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arr.length; i++) {
//     let result
//     if (arr[i] % 2 == 0) {
//         result = arr[i] * arr[i]
//     } else if (arr[i] == 3) {
//         result = arr[i] * arr[i] * arr[i]

//     }

//     console.log(result);
// }

// for (let elem of arr) {
// 	let result;

// 	if (elem % 2 == 0) {
// 		result = elem * elem;
// 	} else if (elem % 3 == 0) {
// 		result = elem * elem * elem;
// 	} else {
// 		continue; // перейдем на новую итерацию цикла
// 	}

// 	console.log(result); // выполнится, если делится на 2 или 3
// }

// let num = 500;

// while (num > 10) {
// 	num = num / 2;
// }

// console.log(num)

// let str = '';

// for (let i = 0; i < 5; i++) {
//     str = str + '0'

// }

// console.log(str);

// let num = ''

// for (let i = 1; i < 10; i++) {
//     num = num + i

// }
// console.log(num);

// let str  = '';

// for (let i = 9 ; i > 0 ; i--) {
//     str = str + i
// }

// console.log(str);

// for (let i = 10; i < 1000; i++){
//     let toStr = String(i)
//     console.log(toStr(i));
//     if (toStr[10] == 5 || toStr[10] == 5)  {
//         console.log(i);
//         continue
//     }
// }

/*Задача 51.1

Переберите циклом числа от 10 до 1000
и выведите на экран те числа, сумма двух первых цифр которых равна 5.*/

// for (let i = 1; i <= 1000; i++) {
// 	let str = String(i); // преобразуем число в строку

// 	if (str[0] == 5 || str[1] == 5) {
// 		console.log(i);
// 	}
// }

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     if (+str[0] + +(str[1]) == 5) {
//         console.log(i);
//     }
// }

// for (let i = 10; i <= 1000; i++) {
//     let str = toString(i);
//     if ((parseInt(str[0]) + parseInt(str[1])) == 5) {
//         console.log(i);
//     }
// }

// for (let i = 10; i < 1000; i++) {
//     let doStr = String(i);
//     if (doStr[0] + +(doStr[1]) == 5) {
//         console.log(i);
//     }

// }

// for (let i = 0; i < 1000; i++) {
//     let makeStr = String(i)
//     if (Number(makeStr[0]) + Number(makeStr[1]) == 15)
//         console.log(i);

// }

// console.log(60 * 60 * 24);

// console.log(84600 * 365);

// for (let i = 0; i < 1000; i++) {
//     let doStr = String(i)
//         if (Number(doStr[0]) + Number(doStr[1]) == 6) {
//             console.log(i);
//         }

// }

// let result = 0;

// for (let i = 1; i <= 9; i++) {
// 	result = result + i;
// }

// console.log(result);

// let res = ''

// for (let i = 0; i <= 9; i++) {
//     res += i

// }
// console.log(res);

// let result = '';

// for (let i = 1; i <= 30; i++) {
//     result += i

// }
// console.log(result);

// let result = ''

// for (let i = 1; i <= 3; i++) {
//     for (let k = 1; k <= 3; k++) {
//         result = result + ' ' + i + k

//         // result = `${ result = i + k}`
//     }
// }

// console.log(result);

// let arr = '';

// for (let i = 0; i <= 5; i++) {
//         arr += '0'
// }

// console.log(arr);

// let arr2 = '';

// for (let i = 1; i < 10; i++) {
//     arr2 +=  '-' + i
// }

// arr2 = arr2 + '-'
// console.log(arr2);

// let str = ''

// for (let i = 0; i < 10; i++) {
//     str += ` Ilyas${i}`
//     str += i
//     // str += ' Ilyas'
// }

// console.log(str);

// for (let i = 10; i < 1000; i++) {
//   let str = String(i);
//   if (+str[0] + +str[1] == 5) {
//     console.log(i);
//   }
// }

// let result = " ";

// for (let i = 1; i <= 30; i++) {
//   result += i;
// }

// console.log(result);

// let arr = []

// for (let i = 0; i <= 5; i++) {
//     arr[i] =  i + 1
// }

// console.log(arr);

// let arr2 = [];

// for (let i = 0; i < 100; i++) {
//   arr2[i] = i + 1;
// }

// console.log(arr2);

// let arr = []

// for (let i = 2, k = 0; i <= 100; i+=1, k++) {
//     arr[k] = i

// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] +=10
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     arr[i]--
// }

// let result = [];

// for (let i = 1; i <= 10; i++) {
//     result.push(` x `)
// }
// console.log(result);

// str += ` Ilyas${i}`
//     str += i

// let arr = [ 2, 8, -6, 7, 9, -3, 1, 8, -9, 5 ];
// let resultArray = []

// for (const elem of arr) {
//     if (elem > 0) {
//         resultArray.push(elem)
//     }
// }

// console.log(resultArray);

// let array = [1, 2, 3, 4, 5];
// let result = []

// for (let i = array.length -1; i >= 0; i--) {
//     result.push(array[i])
// }
// console.log(result);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = []

// for (let i = arr.length -1; i >-0;i -- ) {
//     res.push(arr[i])
// }

// console.log(res)
// let arr = []

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);

// }

// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let result = []

// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		result.push(elem);
// 	}
// }

// console.log(result);

// console.log(a);
// var a = 7
// let b = 6
// console.log(b);
// let b = 6



