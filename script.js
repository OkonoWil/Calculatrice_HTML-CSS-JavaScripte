const display = document.querySelector('#display');
const displayOut = document.querySelector('#displayOut');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear') {
            display.innerText = '';
            displayOut.innerText = '';
        }else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        }else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
            displayOut.innerText = '';
        }else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty';
            setTimeout(() => (display.innerText = ''), 2000);
        }else if (display.innerText != '' && item.id == '+') {
            displayOut.innerText = display.innerText.toString();
            displayOut.innerText = eval(displayOut.innerText);
            display.innerText += '+';
        }else if (display.innerText != '' && item.id == '-' ) {
            displayOut.innerText = display.innerText.toString();
            displayOut.innerText = eval(displayOut.innerText);
            display.innerText += '-';
        }else if (display.innerText != '' && item.id == '*' ) {
            displayOut.innerText = display.innerText.toString();
            displayOut.innerText = eval(displayOut.innerText);
            display.innerText += '*';
        }else if (display.innerText != '' && item.id == '/' ) {
            displayOut.innerText = display.innerText.toString();
            displayOut.innerText = eval(displayOut.innerText);
            display.innerText += '/';
        }else{
            display.innerText += item.id;
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}