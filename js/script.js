const input = document.getElementById("input-text");
const numbers = document.getElementById("numbers");
const btn = document.querySelectorAll('.button');
const numberBtn = document.querySelectorAll('.btn-number');
const btnOperator = document.querySelectorAll('.operator');
const btnClear = document.querySelectorAll('.clear');
const btnEqual = document.getElementById("equal");
const btnReset = document.getElementById("reset");
const btnDel = document.getElementById("del");
const btnOne = document.getElementById("btn-theme-1");
const btnTwo = document.getElementById("btn-theme-2");
const btnThree = document.getElementById("btn-theme-3");


let currentTheme = 'light';
let output = '';

function appendToIutput(value) {
    output += value;
    input.value = output;
}

function appendOperator(operator) {
    output += operator;
    input.value = output;
}

function clearOutput() {
    output = '';
    input.value = output;
}

function deleteNumber () {
    output = output.slice(0, -1);
    input.value = output;
};

function calculate() {
    try {
        output = eval(output);
        input.value = output;
    } catch (error) {
        input.value = 'Error';
    }
}

function themeOne () {
    document.body.classList.remove('fuchsia');
    document.body.classList.remove('white');
    document.body.classList.add('blue');

    input.classList.add('placeholder:text-white', 'bg-black/50')
    input.classList.remove('placeholder:text-yellow-500', 'bg-fuchsia-900/30')
    input.classList.remove('placeholder:text-black', 'bg-white')

    numbers.classList.add ('bg-black/30')
    numbers.classList.remove ('bg-black/20')

    btn.forEach(button => {
        button.classList.add('text-slate-600','bg-gray-200')
        button.classList.remove('text-black','bg-gray-100')
        button.classList.remove('fuchsia')
    })

    btnClear.forEach(button => {
        button.classList.add('bg-indigo-300', 'text-gray-100')
        button.classList.remove('text-gray-200', 'bg-teal-500')
        button.classList.remove('bg-fuchsia-900','text-white')
    })

    btnEqual.classList.add('bg-red-700')
    btnEqual.classList.remove('bg-orange-500')
    btnEqual.classList.remove('bg-teal-300')
}

function themeTwo () {
    document.body.classList.remove('fuchsia');
    document.body.classList.add('white');
    document.body.classList.remove('blue');

    input.classList.remove('placeholder:text-white', 'bg-black/50')
    input.classList.remove('placeholder:text-yellow-500', 'bg-fuchsia-900/30')
    input.classList.add('placeholder:text-black', 'bg-white')

    numbers.classList.remove ('bg-black/30')
    numbers.classList.add ('bg-black/20')

    btn.forEach(button => {
        button.classList.remove('text-slate-600','bg-gray-200')
        button.classList.add('text-black','bg-gray-200')
        button.classList.remove('fuchsia')
    })

    btnClear.forEach(button => {
        button.classList.remove('bg-indigo-300', 'text-gray-100')
        button.classList.add('text-gray-100', 'bg-teal-500')
        button.classList.remove('bg-fuchsia-900','text-white')
    })
   
    btnEqual.classList.remove('bg-red-700')
    btnEqual.classList.add('bg-orange-500')
    btnEqual.classList.remove('bg-teal-300')
}

function themeThree () {
    document.body.classList.add('fuchsia');
    document.body.classList.remove('white');
    document.body.classList.remove('blue');

    input.classList.remove('placeholder:text-white', 'bg-black/50')
    input.classList.remove('placeholder:text-black', 'bg-white')
    input.classList.add('placeholder:text-yellow-500', 'bg-black/50')

    numbers.classList.add ('bg-black/30')
    numbers.classList.remove ('bg-black/20')

    btn.forEach(button => {
        button.classList.remove('text-slate-600','bg-gray-200')
        button.classList.remove('text-black','bg-gray-100')
        button.classList.add('fuchsia')
    });
    
    btnClear.forEach(button => {
        button.classList.remove('bg-indigo-300', 'text-gray-100')
        button.classList.remove('text-gray-200', 'bg-teal-500')
        button.classList.add('bg-fuchsia-900','text-white')
    })

    btnEqual.classList.remove('bg-red-700')
    btnEqual.classList.remove('bg-orange-500')
    btnEqual.classList.add('bg-teal-300')
}



numberBtn.forEach(number => {
    number.addEventListener('click', function() {
        appendToIutput(number.textContent);
    });
});

btnOperator.forEach(operator => {
    operator.addEventListener('click', function() {
        appendToIutput(operator.textContent);
    });
});

btnReset.addEventListener('click', clearOutput);
btnEqual.addEventListener('click', calculate);
btnDel.addEventListener('click', deleteNumber);
btnOne.addEventListener('click', themeOne)
btnTwo.addEventListener('click', themeTwo)
btnThree.addEventListener('click', themeThree)