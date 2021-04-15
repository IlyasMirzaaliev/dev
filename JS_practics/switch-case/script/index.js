
// let lang = 'ru';
//
// switch (lang) {
//     case 'ru':
//         console.log('Russian');
//     case 'en':
//         console.log('English');
//     case 'de':
//             console.log('Deutschland');
// }

//
// let seasons = 3;
//
// switch (seasons) {
//     case 1:
//         console.log('Winter - zima');
//         break;
//     case 2:
//         console.log('Spring - vesna');
//         break;
//     case 3:
//         console.log('Summer - Leto ');
//         break;
//     case 4:
//         console.log('Autum - Osen');
//         break;
//     default:
//         console.log('Net takogo vremeni goda');
//         break;
// };


let seasons2 = 12;
let result;

switch (seasons2) {
    case 12:
    case 1:
    case 2:
        result = 'Winter - zima'
        break;
    case 3:
    case 4:
    case 5:
        result = 'Spring - vesna';
        break
    case 6:
    case 7:
    case 8:
        result = 'Summer - Leto'
        break;
    case 9:
    case 10:
    case 11:
        result = 'Autum - Osen'
        break;
    default:
        break


}
console.log(result)