const button = document.querySelector('#btn');
const color = document.querySelector('.color')

let lightBlue;
let red ;
let lightGreen ;
let black;
let yellow;
let orange;
let violet;

const colorPalette = [
    lightBlue = '#abdbff',
    red = 'red',
    lightGreen = '#abd4a3',
    black = 'black',
    yellow = 'yellow',
    orange = 'orange',
    violet = 'violet'
]

button.addEventListener('click', () => {
    const ramdomNumber = getRamdomNumber();
    console.log(ramdomNumber)
    document.body.style.backgroundColor = colorPalette[ramdomNumber];
    color.textContent = colorPalette[ramdomNumber]
})

function getRamdomNumber() {
    return Math.floor(Math.random() * colorPalette.length)
}