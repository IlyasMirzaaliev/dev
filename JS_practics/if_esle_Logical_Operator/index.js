//________________________________Конструкция if-else в JavaScript___________________


// /*if (операция сравнения) {
//     /*
//         расположенный здесь код выполниться,
//         если результат операция сравнения верный
//     */
// } else {
//     /*
//         расположенный здесь код выполниться,
//         если результат операция сравнения неверный
//     */
// }*/

// Операторы больше и меньше
// Для проверки того, которое из значений больше,
// а которое меньше, используются операторы больше >, больше или равно >=, меньше <, меньше или равно <=.
//
// Изучим их работу на практическом примере.


// let test = 0;
// (test > 10) ? console.log('true'): console.log('false');    //выведет false

// (test < 10) ? console.log('true'): console.log('false')     //выведет true

// (test >= 10) ? console.log('true'): console.log('false'); //выведет false

//________________________________________________________________________________________________________

//Проверка на равенство
// Для проверки двух значений на равенство
// используется оператор == (не путайте его с оператором =, который используется для присваивания).

// (test === 0) ? console.log('true'): console.log('false') //выведет true

//_______________________________________________________________________________________________________

// Проверка на неравенство
// Существует также оператор !=, который наоборот, проверяет на неравенство.

// let test = 1; // пусть значение переменной равно 1
//
// if (test != 0) {
//     console.log('верно'); // сработает этот alert, так как переменная НЕ равна 0
// } else {
//     console.log('неверно');
// };

//Сравнение переменных
// В примерах выше мы сравнивали переменную с каким-то числом. Но никто не запрещает нам сравнивать две переменные.
//
// Смотрите пример:
//
// let test1 = 1;
// let test2 = 2;
// //
// if (test2 > test1) {
//     alert('верно'); // сработает этот alert, так как test2 больше test1
// } else{
//     alert('неверно');
// };


// let test1;
// let test2;
//
//
// if (test1 === test2) {
//     console.log('true');
// }else {
//     console.log('false');
// };

//____________________Типы данных и конструкция if-else в JavaScript________________________________


// let test = 'abc';
//
// if (test == 'abc') {
//     console.log('верно'); // сработает этот alert, так как переменная равна 'abc'
// } else {
//     console.log('неверно');
// }

//_____________________Равенство по значению и типу____________________________________________________

//Для этого вместо оператора == следует использовать оператор ===

// if ('3' === 3) {
//     console.log('верно');
// } else {
//     console.log('неверно'); /* сработает этот alert*/
// }
//
//
// if ('3' === '3') {
//     console.log('верно'); // сработает этот alert
// } else {
//     console.log('неверно');
// }
//
//
// if (3 === 3) {
//     console.log('верно'); // сработает этот alert
// } else {
//     console.log('неверно');
// }

/*______________________________ЗАДАЧИ_______________________________________*/

// let test1 = '3'
// let test2 = '3'
//
// if (test1 === test2) {
//     console.log('true') /*сработает true*/
// }else {
//     console.log('false')
// }
//
// let num = 3;
// let str = '3';
//
// if (num == str) {
//     console.log('true')     /*сработает true*/
// }else {
//     console.log('false')
// }
//
//
// (num === str) ? console.log('true'): console.log('false'); /*сработает false*/

/*____________________________Неравенство по значению и типу______________________________________*/


/*Кроме оператора != существует также оператор !==, учитывающий тип при сравнении
* Пусть с помощью оператора != сравниваются два числа 3. Данный оператор сравнивает значения на то,
* что они НЕ равны. * Так как наши значения как раз-таки равны, то на экран выведется 'неверно':*/

// if (3 != 3) {
//     console.log('верно');
// } else {
//     console.log('неверно'); /*сработает этот alert, так как значения равны*/
// }
//
// if ('3' != 3) {
//     console.log('верно');
// } else {
//     console.log('неверно'); /* сработает этот alert, так как значения равны */
// }

// let test1 = '3';
// let test2 = '3';
//
// if (test1 != test2) {
//     console.log('true');
// }else {
//     console.log('false');  /* сработает этот false, так как значения равны */
// }
/*Короткая запись if-else*/
// (test1 != test2) ? console.log('true'): console.log('false');



// if (test1 !== test2) {
//     console.log('true');
// } else {
//     console.log('false');
// }

/*Короткая запись if-else*/
// (test1 !== test2) ? console.log('true'): console.log('false'); /* сработает этот false, так как значения равны */


/*_______________________________Сложные условия в if-else в JavaScript_______________________________*/


/*Иногда может быть нужно составить какое-то сложное условие.
Для этого существуют операторы && (логическое И) и || (логическое ИЛИ).*/


/*________________________________Логическое И "&&"________________________*/

/*Логическое И позволяет задать одновременность условий.
В следующем примере, если переменная num больше нуля и одновременно меньше 10,
только тогда выведется 'верно':*/

/*
false && true  ----> false
true  && false ----> false
false && false ----> false
true  && true  ----> true
*/

// let num = 3;
//
// if (num > 0 && num < 10) {
//     console.log('верно'); /*console.log выдаст true т.к. два сравнения сработали верно*/
// } else {
//     console.log('неверно');
// }


// let num1 = 2;
// let num2 = 3;
//
// if (num1 === 2 && num2 === 3) {
//     console.log('true'); /*console.log выдаст true т.к. два сравнения сработали верно*/
// }else {
//     console.log('false');
// }
/*коротакая запись*/
// (num1 === 2 && num2 === 3) ? console.log('true'): console.log('false');


/*          Задачи                     */

// let num = 3;

// if (num > 0 && num < 5 ) {
//     console.log('true'); /*console.log выдаст true т.к. два сравнения сработали верно*/
// }else {
//     console.log('false');
// }

/*коротакая запись*/
/*(num > 0 && num < 5) ? console.log('true'): console.log('false');*/

// let num = 3;
//
//
// if (num >= 10 && num <= 20) {
//     console.log('true');
// }else {
//     console.log('false'); /*console.log выдаст false т.к. сработало одно условие num <= 20 */
// }
/*коротакая запись*/
// (num >= 10 && num <= 20) ? console.log('true'): console.log('false')


/*Задача 23.3
Если переменная num1 равна или меньше 1, а переменная num2 больше или равна 3,
то выведите на экран слово 'верно', иначе выведите слово 'неверно'.*/
// let num1 = 2;
// let num2 = 3;
//
// if (num1 <= 1, num2 >= 3 ) {
//     console.log('true')
// }else {
//     console.log('false')
// }


/*_____________________________________________Логическое ИЛИ " || " ___________________________

Логическое ИЛИ требует выполнения хотя бы одного условия.*/

/*
false || true  ----> true
true  || false ----> true
true  || true  ----> true
false || false ----> false
*/

/*<<<>>><<Задачи>>>>>>>>*/
// function log(){
//     console.log()
// }
// log()

/*Задача 23.5*/
// let num1 = -10;
// let num2 = -10;
//
// if (num1 >= 0 || num2 >= 0) {
//     console.log('true')
// }else {
//     console.log('false')    /*Сработает false т.к. ни одно из условий не сработало*/
// }

/*Задача 23.6*/

// let num1 = 0;
// let num2 = 5;
//
// if (num1 >= 0 || num2 >= 0) {
//     console.log('true')     /*Сработает true т.к. выполнилось  два условия*/
// }else   {
//     console.log('false')
// }

/*Задача 23.7*/

// let num1 = 5;
// let num2 = 5;
//
// if (num1 >= 0 || num2 >= 0) {
//     console.log('true')     /*Сработает true т.к. выполнилось  два условия*/
// }else {
//     console.log('false')
// }
/*Короткая запись*/
/*(num1 >= 5 || num2 >= 0) ? console.log('true'): console.log('false')*/

/*Задача 23.8*/

// let num1 = -5;
// let num2 = 15;
//
// if (num1 >= 5 || num2 >= 0) {
//     console.log('true')         /*Сработает true т.к. сработало одно условие*/
// }else {
//     console.log('false')
// }
/*Короткая запись*/
// (num1 >= 5 || num2 >= 0) ? console.log('true'): console.log('false');

/*Задача 23.9*/

// let num = 1;
//
// if (num == 0 || num == 1) {
//     console.log('true');        /*Сработает true т.к. сработало одно условие*/
// }else {
//     console.log('false');
// }

/*Задача 23.10*/


// let num = 2;
//
// if (num == 0 || num == 1) {
//     console.log('true');
// }else {
//     console.log('false'); /* Сработает false т.е. не выполнилось ни одно условие */
// }

                                    /*Приоритет операций сравнения*/

/*Операция && имеет приоритет над ||.*/

// let num = 3;
//
// if (num > 0 && num < 5 || num > 10 && num < 20) {
//
//     console.log('верно');            /*Сработает true*/
// } else {
//     console.log('неверно');
// }

                                        /*Группировка условий*/
/*Хотя операция && и имеет приоритет над ||,
часто удобнее использовать группирующие круглые скобки,
чтобы явно показать приоритет операций:*/

// let num = 3;
//
// if ( (num > 0 && num < 5) || (num > 10 && num < 20) ) {
//     console.log('верно');
// } else {
//     console.log('неверно');
// }


/*Задача 23.12*/

// let num = 3;
//
// if ((num > 5 && num < 10) || (num === 20)) {
//     console.log('true');
// }else {
//     console.log('false') /*сработает false т.к не сработало ни одно условие*/
// }

/*Задача 23.13*/

// let num = 3;
//
// if ((num > 5 || num > 0) && (num < 3)) {
//     console.log('true');
// }else {
//     console.log('false'); /*сработало false потому, что &&-'И' имеет приоритет над ||- 'ИЛИ' */
// }

/*Задача 23.14*/

// let num = 3;
//
// if ((num === 9 || num > 10) && (num < 20 || num > 20) && (num < 30)) {
//     console.log(true)
// }else {
//     console.log(false)
// }
//
//
// // console.log(num === 9)
// // console.log(num > 10)
// // console.log(num < 20)
// // console.log(num > 20)
// // console.log(num < 30)
//
// console.log((num === 9 || num > 10) && (num < 20 || num > 20) && (num < 30))

                            /*Инвертирование высказываний в if-else*/

/*Как вы видите, чтобы инвертировать условие, приходится несколько задуматься.
Гораздо проще будет использовать оператор "!", представляющий собой логическое НЕ.
С помощью логического НЕ нам достаточно поставить знак "!" перед изначальным условием - и оно инвертируется само:*/

/*ПРИМЕР*/

/*if ( !(num > 0 && num < 5) ) {
    alert('верно');
} else {
    alert('неверно');
}*/

/*То есть "!" превращает условие в свою противоположность.*/

/*Задача 24.1*/

// let num1 = 2;
// let num2 = 3;
//
// if ( !(num1 >= 0 || num2 <= 10) ) {
//     console.log(true)
// }else {
//     console.log(false) /*Сработало false т.к. условие превратилось в свою противоположность логическим НЕТ "!"*/
// }


// let num = 3;
//
// if ( !( (num > 5 || num > 0) && (num < 3) ) ) {
//     console.log('true'); /*Сработало true т.к. условие превратилось в свою противоположность логическим НЕТ "!"*/
// }else {
//     console.log('false');
// }


                                            /*Конструкция if-else и булевы значения*/

// let test = true;

// (test === true) ? console.log(true): console.log(false);



/*Задача 25.1*/
// (test == true) ? console.log(true): console.log(false);

/*Задача 25.2*/

// let test2 = false;
//
// (test2 === false) ? console.log('true'): console.log('false')

/* false: 0, -0, +0, null, false, NaN, undefined, '' (пустая строка).   */

/*Задача 25.3*/

// let num = 1;
// (num == true) ? console.log(true): console.log(false); /*true*/

/*Задача 25.4*/
// let num2 = 0;

// (num2 == true) ?console.log(true): console.log(false) /*false*/

/*Задача 25.5*/

// let num3 = 1;
// (num3 == false) ? console.log(true): console.log(false) /*false*/

/*Задача 25,10*/

// let test;
//
// if (test == true) {
//     console.log('верно');
// } else {
//     console.log('неверно');
// }


/*Задача 25,11*/

// let test = 3 * 'a';
//
// console.log(test)

// if (test == true) {
//     console.log('верно');
// } else {
//     console.log('неверно'); /*Сработает false т.к. 3 * 'a' это NaN(Not a number) */
// }

// let test = -0;
//
// if (test ) {
//     console.log('верно');
// } else {
//     console.log('неверно');
// }

/*Задача 27.1*/


// let day = 30;
//
//
// if (day <= 10) {
//     console.log('1 - декада');
// }else if (day <= 20) {
//     console.log('2 - декада');
// }else if (day <= 31) {
//     console.log('3 - декада')
// }else {
//     console.log('не верное значение')
// }


/*              Область видимости let и var в if-else       */

// if (true) {
//     let result = '!';
// }

// console.log(result); /*ReferenceError: result is not defined*/

/*Дело в том, что переменные, объявленные внутри фигурных скобок,
видны только внутри этих скобок, и не видны снаружи.*/

/*/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

/*let result; // переменная объявлена снаружи

if (true) {
    result = '!';
}

console.log(result); // выведет '!'*/

/*Задача 28.1*/

// let age = 17;
//
// if (age >= 18) {
//     let adult = true
// }else {
//     let adult = false
// }
// console.log(adult)          /*ReferenceError: adult is not defined */

// let age = 17;
// let adult;                      /* объявим переменную снаружи условия*/
//
// if (age >= 18) {
//     adult = true
// }else {
//     adult = false
// }
// console.log(adult)            /* сработает false*/


/*Все, однако, поменяется, если внутри условия также объявить переменную result через let:*/

// let result = 1;
//
// if (true) {
//     let result = 2; // объявим переменную через let
// }
//
// console.log(result); // выведет 1, а не 2!

/*Здесь все дело в том, что объявление переменой через let внутри условия создало локальную переменную result.
То есть внутри условия существует одна переменная result, а снаружи условия - другая.*/


/*Задача 28,2*/

/*Вариант - 1*/
// let age = 17;
// let adult;

// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
//
// console.log(adult);
//
// /*Вариант - 2*/
// // let age = 17;
//
//
// if (age >= 18) {
//     let adult = true;
//     console.log(adult);
// } else {
//     let adult = false;
//     console.log(adult);
// }

/*Задача 28,3*/

// let age = 17
// let adult;
//
// if (age >=18) {
//     adult = true
//
// }else {
//     adult = false
//     // console.log(adult)
// }
// console.log(adult)

/*Задача 28,4*/

// let age = 17;
// let result;
//
// if (age >= 18) {
//     if (age <= 23) {
//         result = 'от 18 до 23';
//     } else {
//         result = 'больше 23';
//     }
// } else {
//         result = 'меньше 18';
// }
//
// console.log(result);

/*Задача 28,5*/

// let age = 19;
// let result;
//
// if (age >= 18) {
//
//     if (age <= 23) {
//         result = 'от 18 до 23';
//     } else {
//         result = 'больше 23';
//     }
// } else {
//     result = 'меньше 18';
// }
//
// console.log(result);


            /*               Область видимости var       */

/*В следующем примере переменная объявлена через let внутри условия и поэтому не видна снаружи условия:

    if (true) {
        let result = '!';
    }

console.log(result); // выдаст ошибку



А вот если объявить переменную через var - то переменная будет видна снаружи условия:

    if (true) {
        var result = '!';
    }

console.log(result); // выведет '!'*/

// let num = 1;
//
// if (num == 1) {
//     var result = 'верно';
// } else {
//     var result = 'неверно';
// }
//
// console.log(result);

                                /*  Длина строк и массивов    */

// let str = '12345'
// if (str.length >= 10){
//     console.log('!')
// }else {
//     console.log(false) /*сработает false т.к. длина строки-"str" меньше 10*/
// }


/*Задача 29,2*/

// let arr = [12, 54, 81, 36, 78];

// if (arr.length >= 3) {
//     console.log(arr.length)
// }else {
//     console.log('то не так')
// }


// console.log(arr[arr[0].toString()])

                                    /*Проверка символа строки*/

/*Проверим теперь последний символ на равенство числу 5:*/

// let str = '12345';
// let lasStr = str[str.length -1] /*Проверяем последний символ*/
//
// if (lasStr == 5) {
//     console.log(true) /*Сработало true т.е. последний символ равен 5*/
// }else {
//     console.log(false)
// }

/*Проверим теперь последний символ на строгое === равенство числу 5:*/

// let str = '12345';
// let lasStr = str[str.length -1] /*Проверяем последний символ*/
//
// if (lasStr === 5) {
//     console.log(true)
// }else {
//     console.log(false) /*Сработало false на стргое равенство т.к. последний символ  не равен 5*/
// }

// let arr = [1, 2, 3, 4, 5];
//
// let lastArr = arr[arr.length -2]
//
// if (lastArr === 4){
//     console.log(true) /*В обоих случаях будет выводит TRUE т.к. оба числа равны*/
// }else {
//     console.log(false)
// }

                            /*Проверка символа числа*/
/*Попытка обратиться к первому символу числа приведет к неожиданному поведению:*/


// let num = 12345;
//
// if (num[0] == 1) {
//     console.log('верно');
// } else {
//     console.log('неверно'); // выведет 'неверно'
// }
/*Как вы уже должны знать, проблема в том, что можно обращаться к символам строки,
но нельзя - к цифрам числа*/


// let birthYear = 1985;
// let birthYearToStr = String(birthYear)


// if (birthYearToStr[3] == 5) {
//     console.log(true)
// }else {
//     console.log(false  )
// }

/*Коротакая запись IF-ELSE*/
// (birthYearToStr[3] == 5) ? console.log(true): console.log(false) /*Не работает ззапись спросить у учителя*/




/*Не обязательно вводить новую переменную,
можно применить [0] непосредственно к результату функции String:*/

// if (String(birthYear[3] == 5)) {
//     console.log(true)
// }else {
//     console.log(false)
// }


/*
1. Есть число
2. Переводим в строку в  новой переменной или в функции
3. Проверяем значение цифры */

// let sum = 1544722441; /*10 цифр*/
// let strSum = String(sum)
//
// if (strSum[0] == 1) {
//     console.log(true) /*true т.е. 0 строка равна 1*/
// }else {
//     console.log(false)
// }
// (String(sum)[8] == 4) ? console.log(true): console.log(false)




// let num = 2151132131223462384;  /*19*/
//
// (String(num)[8] == 3) ? console.log(true): console.log(false)


/*Задача 29.3*/

// let numbers = 12548521181221
// let str = String(numbers) /*14*/
//
// if (str[13]  == 0) {
//     console.log(true)
// }else {
//     console.log(false)
// }
//
// /*Короткая запись*/
// (str[13 == 0]) ? console.log(true): console.log(false)

                                    /*Остаток от деления*/

/*Давайте напишем скрипт, который будет проверять, делится ли нацело одно число на второе:*/
// let i = 10;
// let k = 5;
//
// if (i % k == 0) {
//     console.log('делится нацело')
// }else {
//     console.log('делится с остатком')
// }


/*Пусть теперь требуется, если число делится с остатком, вывести этот остаток на экран:*/
// let a = 10;
// let b = 3;

// if (a % b == 0) {
//     console.log('делится нацело')
// }else {
//     console.log('делится с остатком ' + a % b)
// }

/*В приведенном выше коде получается, что остаток вычисляется в двух местах, а это не оптимально.
Поправим проблему:*/
 // let rest = a % b;
 //
 // if (rest == 0) {
 //     console.log('делится нацело')
 // }else {
 //     console.log('делится с остатком ' + rest)
 // }


//
// let i = 57
// let k = 17
// let result = i % k ;
//
//  if (result == 0) {
//      console.log('дделится нацело ')
//  }else {
//      console.log('делится с остатком ' + result)
//  }
//
// let num1 = 52174;
// let num2 = 20
// let total = num1 % num2
//
// console.log('остаток ' +total)


/*Практика на условия if-else в JavaScript*/

// let month = prompt("Введите номер месяца");
//
// if (month >= 1 && month <=2) {
//     alert('Зима');
// }else if (month >= 3 && month <= 5) {
//     alert('Весна');
// }else if (month >= 6 && month <= 8) {
//     alert('Лето')
// }else if (month >= 9 && month <= 11) {
//     alert('Осень')
// }else if (month == 12){
//     alert('Зима')
// }else {
//     alert('нет такого веремени года')
// }

/*Тернарный оператор if-else*/

let age = 17;
console.log( age >= 18 ? true: false );
/*Или*/
(age >= 18) ? console.log('YES'): console.log('NO')
/*Тернарный оператор следует использовать только в самых простых случаях,
так как его использование затрудняет понимание кода.*/



                            /*Логические операции в JavaScript*/

/*      console.log(1 == 1); // выведет true
        console.log(1 == 2); // выведет false

Исходя из написанного, код из начала урока можно переписать более простым образом:

let a = 1;
let b = 2;

console.log(a == b);
Можно не выводить результат сразу в консоль, а присвоить его какой-нибудь переменной:

    let a = 1;
let b = 2;

let result = a == b;
console.log(result);

*/