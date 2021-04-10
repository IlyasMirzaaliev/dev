document.querySelector('button').onclick = () => {
    console.log(document.querySelector('#putPassword').value);
    // Style
    document.querySelector('button').style.backgroundColor = 
    document.querySelector('#putPassword').value
};


document.querySelector('#putPassword').oninput = () => {
    console.log(document.querySelector('#putPassword').value);
    document.querySelector('span').innerHTML = 
    document.querySelector('#putPassword').value
}


// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#putUrColor').value);
// };