// var dog = { nameDog: "Оладушек", ageDog: 6, colorDog: "белый",
// bark: "Гав тяф тяф!" };

// var cat = { nameCat: "Гармония", ageCat: 8, colorCat: "черепаховый" };

// console.log(dog.nameDog, dog.ageDog + ' лет') // Оладушек 6 лет
// console.log("Cat's name " + cat.nameCat) // Cat's name Гармония

// ________________________________________________________________________________


// let anna = { name: 'Anna', age: 11, luckyNumbers: [2, 4 ,8, 16]};
// let dave = { name: 'Dave', age: 5, luckyNumbers: [3, 9, 40]};
// let kate = { name: 'Kate', age: 9, luckyNumbers: [1, 2,3]};

// let friends = [anna, dave, kate];

// console.log(friends[1].name,', ' + friends[1].age + 'yo'); // Ответ:Dave , 5yo

// ___________________________________________________________________________________

// var myCrazyObject = {
//     "name": "Нелепый объект",
//     "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
//     "random animal": "Банановая акула"
//     };

//     console.log(myCrazyObject)

// let arr = [1, true, 'string', 4, 5.7, 0, -100];
// arr[0] = 'word';
// console.log(arr.length);


// let matrix = [
//     [36, 7, 5], ['Ilyas', 'Iskandar', 'Jovid'], ['Mama', 'Dilafruz'], ['Markiz', '2 goda']
// ];


// console.log (matrix)

// var a = ['Сыр', 'Мышь', 15, 'Кот', 18];
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[4]);



// var a = {'Мышь': 'Большая', 'Кот': 'Маленький', 'Сыр': '100гр'};
// console.log(a['Мышь']);
// console.log(a['Кот']);
// console.log(a['Сыр']);


// let arr = ['Кот', 'Лис'];
// arr[0] = 'Кот';
// arr[1] = 'Лис';
// arr[-1] = 'Bear'
// //Заменяем массивы

// arr[0] = 'Cat';
// arr[1] = 'wolf';


// console.log(arr)

// var arr = ['Сыр', 'Мышь'];

// arr[2] = 'Кот';
// arr[3] = 15;


// console.log(arr)

// Есть функции, которые добавляют элементы в конец или начало массива. 
// Это удобно, потому что не надо высчитывать порядковые номера:

// let arr = ['Сыр', 'Мышь'];

// arr.push(['hello', 'GoodBuy']);
// arr.unshift


// console.log(arr[2[0]])


// let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { console.log('привет'); } ]



// console.log(arr.length)


// let fruits = [];
// fruits[10] = 5
// fruits.age = 25;
// fruits.push = 'Mango'


// console.log(fruits[4])



// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];


// console.log(arr[0], arr[1], arr[2]); //пн вт ср


// let arr = ['a', 'b', 'c',];

// console.log(arr[0], arr[1], arr[2]);


// ____________________________________________________________________
// let arr = [1, 2, 3];

// console.log(arr[0] + arr[1] + arr[2]); // ответ 6
// ______________________________________________________________________


// ___________________________________________________________________

// let arr = [2, 5, 3, 9];

// let result = (arr[0] * arr[1]) + (arr[2] * arr[3]);

// console.log(result) // Результат 37
// ________________________________________________________________________

// ___________________________________________________________________________

// let arr2 = [10, 20, 30, 40];


// let res = ((arr2[0] * arr[1]) + (arr[2] * arr[3])); результат 77

// console.log((arr2[0] * arr[1]) + (arr[2] * arr[3])); результат 77

// __________________________________________________________________________________

// let arr = [1, 2, 3]
// // console.log(arr.length)


// console.log(arr[arr.length -3]);

// ___________________________________________________________________________

// let perants = [1 :'kaskader', 'turist', 'jovidon', 'dilafruz'];

// // console.log(perants.length) // у нас 4 объекта
// // console.log(perants[0].length) // 8 букв в 0-ом объекте массива
// // console.log(perants[0]); // значение 0 объекта в массива 

// console.log(perants[perants[0].length -1])



// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 
//         4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};

//         console.log(obj[1], obj[2]);        //пн вт
//         console.log(obj[1]+obj[2]);        //пнвт конкатинация



//  let obj0 = {'a': 1, 'b': 2, 'c': 3};

// console.log(obj0['a'] + obj0['b'] + obj0['c']);





// let obj0 = {'1b': 1, '2b': 2, 'c': 3};

// console.log(obj0['1b'] + obj0['2b'] + obj0['c'])



// let obj1 = {'1a': 1, 'b2': 2, 'с-с': 3, 'd4': 4};

// console.log(obj1) // вывод{ '1a': 1, b2: 2, 'с-с': 3, d4: 4 }


// let obj = {'1a': 1, b2: 2, 'с-с': 3, d4: 4};

// console.log(obj) // 

// let obj1 = {key1 : 1, key2: 2, key3: 3}

// console.log(obj1.key1 + obj1.key1 + obj1.key1)


// let obj = {'1a': 1, b2: 2, 'eee-': 3, d4: 4};


// console.log(obj["1a"] + obj.b2 + obj["eee-"] + obj.d4);


// let user = {'name': 'Ilyas', 'surename': 'Mirzaaliev', 'patronymic': 'Makmudovich'}


// console.log(user['surename'], user['name'], user['patronymic']); // Первый вариант
// console.log(user.surename, user.name, user.patronymic) // Альтернативный вариант


// let date = {'year': 1985, 'month': 11, 'day' : 06};


// console.log(date['year'], date['month'], date['day'])
// console.log(date.year, date.month, date.day); // Альтернативный вариант




// console.log( typeof {a: 1, b: 2, c: 3} ); //    Object


// console.log( typeof [1, 2, 3] ); // Object


// let arr = [1, 2, 3];
// console.log( typeof arr ); // Object


// let arr = [1, 2, 3];
// console.log( typeof arr[0] ); // Number



// let arr = ['mama', 2, 3];
// console.log( typeof arr[0] ); //    String


// console.log( Array.isArray({1: 'a', 2: 'b', 3: 'c'}) );


// let a = [1, 2, 3];

// a[0] = '!';

// console.log(a[0])


// let a = [1, 2, 3];
// let b = a; // на объект ссылается и a, и b


// a = 'primitive' ; // запишем в a какой-то примитив
// console.log(b); // выведет [1, 2, 3]



// let a = [1, 2, 3];
// let b = a;

// a = [3, 4, 5]; // запишем в a массив

// console.log(b); // выведет [1, 2, 3]
// console.log(a); // выведет [3, 4, 5]


// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// console.log(arr2); // [ 'a', 2, 3 ]





let arr = [1, 2, 3];
console.log( typeof arr[0] );


console.log( Array.isArray([1, 2, 3]) );

console.log( Array.isArray({a: 1, b: 2, c: 3}) );