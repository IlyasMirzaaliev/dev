// Работа с переменными 


// let firstName = 'Ilyas';
// let lastName = 'MIrzaaliev'; //string (str)
// let age = 35; // Number
// let isProgrammer = true //boolen (2 типа true and false)

// let son1Name = 'Iskandar';
// let son1LastName  = 'Mirzaaliev';
// let son1age = 7;


// console.log('Меня зовут: ' + firstName + ' И мне: ' + age + ' лет! ');
// console.log('Сына зовут: ' + son1Name  + son1LastName  + ' Ему ' + son1age + ' лет! ' );


// Интерактивное окно
// let greetingName = prompt('Привет назови свое имя и фамилию?')
// let greetinglastName = prompt()
// window.alert(greetingName + ' Приветсвую тебя! ' + ' А я, ' + firstName + ' - твой личный трененр!')
// window.alert('А я, ' + firstName + ' - твой личный трененр!')
// window.alert


// ___________________________________________________________________________________________________________________
// Операторы 

// let currentYear = 2021;
// let birthDay = 1985;

// let age = currentYear - birthDay

// const a = 10;
// const b = 5;

// let c = 60;

// c += b;




// window.alert(c);



// ___________________________________________________________________________________________


// 4 Типы данных

// let isProgrammer = false;
// let firstName = 'Ilyas';
// let age = 26;
// let x

// console.log(typeof isProgrammer);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

// ____________________________________________________________________________________________

// 5 Приоритет операторов(операторы сравнения)

// let fullAge = 35;
// let birthDay = 1985;
// let currentYear = 2021;

// let isFullAge = currentYear - birthDay >= fullAge; // 35 >= 36
// console.log(isFullAge);


// _____________________________________________________________________________________________

// 6.Условные операторы

// let courseStatus = 'fail'

// if (courseStatus === 'ready') {
//     console.log('Курсу уже готов!');
// }else if (courseStatus === 'panding') {
//     console.log('Курс находится в разработке!');
// }else {
//     console.log('курс не получился')
// }



// let isReady = true;


//  if (isReady) {
//     console.log('Все работает')
//  } else {
//      console.log('все не готово!')
//  }



//Тернарное вырожение для простых вырожений
// isReady ? console.log('Все работает') : console.log('Все не готово!');



// let num1 = 31;
// let num2 = '31';

// console.log(num1 === num2);
// _________________________________________________________________________

// 7. Булевая логика

// Смотреть на  MDN - Mozillahttps://developer.mozilla.org



// _______________________________________________________________________________
// 8. Функции

// function calculateMyAge(year) {
//     return 2021 - year
// };

// function calculateIskaAge(year) {
//     return 2021 - year

// };

// function calculateJovidAge(year) {
//     return 2021 - year

// };

// function calculeMamaAge(year) {
//     return 2021 - year

// };
// console.log(calculateMyAge(1985));
// console.log(calculateIskaAge(2014));
// console.log(calculateJovidAge(2016));
// console.log(calculeMamaAge(1965));



// function logInfoAbout(name, year) {
//     let jovidAge = calculateJovidAge(year);
//     let iskaAge = calculateIskaAge(year);
//     let myAge = calculateMyAge(year);
//     let mamaAge = calculeMamaAge(year);

//     if (myAge > 0) {
//         console.log('Я ' + name + ' и мне сейчас ' + myAge + ' лет' );
//     } else {
//         console.log('Вообще-то это будущее!');
//     }



// }

// logInfoAbout('Jovid', 2016);
// logInfoAbout('Iska', 2014);
// logInfoAbout('Ilyas', 1985);
// logInfoAbout('MaMa', 1965);
// logInfoAbout(' ', 2222);

// ___________________________________________________________________________

// 9 Массивы (Array)

// let cars = ['BMW' , 'Mersedes-Benz', 'Audi']; //а можно записать по другому
// let cars = new Array ('BMW' , 'Mersedes-Benz', 'Audi'); НО ПРАВИЛЬНЕЙ ПИСАТЬ КАК НАПТСАНО ВЫШЕ
// console.log(cars)

// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);


//проверим длину массива (Array)
// console.log(cars.length);

// добавляем элимент в array
// cars[3] = 'Porsche'
// console.log(cars)

// _________________________________________________________________________

// 10. Циклы (while $$ for) $$ = И

// let cars = ['BMW' , 'Mersedes-Benz', 'Audi', 'Porsche'];

// // for (let i = 0; i < cars.length; i++) {
// //     let car = cars[i]
// //     console.log(car);
// // }

// for (let car of cars){
//     console.log(car);
// }

// _________________________________________
// ПОВТОРИТЬ!!
// _________________________________________


// ___________________________________________________________




// 11. Объекты (Jbjects)

 let isIlyas = {
     fistName:  'Ilyas',
     lastName: 'Mirzaaliev',
     birthYear:  1985,
     languages: ['ru', 'tj', 'en'],
     hasWife: true,
     hasKid: true,
              
     } 



 console.log(isIlyas.languages)

