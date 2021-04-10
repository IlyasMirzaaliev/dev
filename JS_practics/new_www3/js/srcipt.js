let a = 6;


// // >= <= == !=
// if (a > 9) {
//     console.log('Yes');
// }else {
//     console.log('No');
// }



const button = document.querySelector('button');
const input = document.querySelector('.age')

//___  () =>  ___       Стрелочная функция - если функция анонимная и используется один раз

// button.onclick = () => {
//   let num = +input.value;
//   if (num >= 18 && num <= 60) {
//     alert("Welcome");
//   }else if (num >= 60) {
//       alert('Ты точно сюда?')
//   }else {
//     alert("Ты не пройдешь");
//   };

//   switch (num) {
//     case 15:
//       alert("Потерпи");
//       break;
//     case 18:
//       alert("Уже можно!");
//     default:
//       alert("Okkkk");
//   }
// };



let b = 3

console.log(b > 3 && b < 7) // && оператор "И"
console.log(b > 3 || b < 7) // || оператор "Или"
