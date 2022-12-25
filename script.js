let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
// let div = document.querySelector('.out');

button.onclick = function () {
    console.log('Работает');
    let b = +inputIn.value;
    console.log(b + 20);
    div.innerHTML=b;
    inputIn.value = '';
}


let a = 6;
if ( a != 9 ) {
    console.log('Yes');
}
else {
    console.log('No')
}

const button = document.querySelector('button');
const input1 = document.querySelector('.age');
const input2 = document.querySelector('.yo');
let div = document.querySelector('.out');
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('Welcome');
    }
    else if (num >= 60) {
        console.log('Ого');
    }
    else {
        console.log('Sorry');
    }
    switch (num) {
        case 15:
          console.log("Еще год");
          break;
     
    case 16:
        console.log("Ураааа");
        break;
    
    default: 
        console.log('Oooooooooooook');
    
}
    let a = +input1.value;
    let b = +input2.value;
    if (a>b) {
        c=a
        console.log(a);
    }
    if (a<b) {
        c=b
        console.log(b);
}
div.innerHTML = c;
}