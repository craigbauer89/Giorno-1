// // var a = 'hello';
// // let b = 'bye';
// // const c 'yup';

// // function numeFunc() {

// // }

// // let nomeFunc2 = function() {

// // }


// // (function nomeFunc3 () {

// // } )();


// // function nomeFunc4 () {
// //     function innerFunc () {

// //     }
// //     innerFunc ();

// // } 

// // function nomeFunc5 () {
// //     function innerFunc () {

// //     }
// //     return innerFunc;

// // } 

// // let arr = new Array(); // []
// // arr.push(ele);
// // arr.pop();
// // arr.shift();
// // arr.unshift(ele);
// // arr.splice(index, remov); //2 argumets = remove
// // arr.splice(index, remove, newele); //3 arguments = substitue
// // arr.slice(start,end);
// // arr.indexof(ele);
// // arr.length;
// // arr.sort()
// // arr.toString;
// // arr.join();
// // arr.reverse();
// // arr.includes(ele);

// // let num = new Number();
// // let num2 = 25;
// // num2.toFixed(2);
// // let str = new String();
// // let str2 = 'ciao';
// // str2.charAt(2);
// // str2.length;
// // str2.indexof('i');
// // str.trim();
// // str2.includes('c') // true of fals it includes a c
// // str2.replace('i', 'x'); // find i and replace with x
// // str2.toUpperCase();
// // str2.toLowerCase();

// // if (condizione) {
// //  //istuzioni
// // } else if {
// // //istuzioni
// // } else {
// // //istuzioni
// // }

// // let op = (eta > 18) ? 'Maggiore' : 'Minore'; 


// // control.log();
// // document.write();
// // alert();
// // document.getElementById('id').innerHTML;


// // Math.abs(num);
// // Math.ceil(num);
// // Math.floor(num);
// // Math.round(num);
// // Math.max(num, num2);
// // Math.power(num, exp)
// // Math.sqrt(num);


// /// NUovo


// let data = new Date();
// console.log(data);

// let datanascita = new Date(2000, 06 ,12);
// console.log(datanascita);


// console.log(data.getDay());  // = 1 for monday 0-6 for days, 0-11 for months
// console.log(data.getHours()); // if time is 10:12 this reutrns 10

// data.setHours(14);
// data.setDate(25);
// data.setFullYear(2025);
// console.log(data);


// //dopo 4 if else,  usa switch:

// // switch (valore) {
// //     case 1:
// //         // istruzioni
// //     case 2:
// //         // istruzioni
// //     case 3:
// //         // istruzioni
// //     case 4:
// //         // istruzioni
// //     case 5:
// //         // istruzioni
// // }


// let val  = 4;

// switch(val) {
//     case 1:
//         console.log("Jan");
//     case 2:
//         console.log("feb");
//     case 3:
//         console.log("mar");
//         break;  // senza questa stampa tutii dopo
//     case 4:
//         console.log("apr");
//     case 5:
//         console.log("may");

// }


// switch(val) {
//     case 1:

//     case 2:

//     case 12:
//         console.log("Inverno");
//         break;
//     case 3:
        
//     case 4:
        
//     case 5:
//         console.log("prima");
//         break;
//     case 6:
        
//     case 7:
        
//     case 8:
//         console.log("esta");
//         break;
//     case 9:
       
//     case 10:
       
//     case 11:
//         console.log("aut");
//         break;
    
//     default: 
//         console.log("errore");

// }


// // for (forin, forof)- while - do while

// let array = ['ciao', 'epicode', 'abc','12345', 'maggio' , 'nuovo']
// console.log(array[2]);


// for(let i = 0; i < array.length; i++) {

// console.log(array[i]);

// }
// console.log('FINE');

// // post  e pre incremento
// let count = 0;
// let test = count++;                     // count +1     //++count
// console.log(count); // =1                0              1
// console.log(test); // = 0               1               1


// for(let i = 0; i < array.length; i++) {
//     if (i === 4) {
//         break;
//     } else if (i === 2 ) {
//         continue;
//     }
//     console.log(array[i]);

//  }

//  let i = 0;
//  while(i < array.length) {
//     console.log(array[i]);
//     i++;

//  }

// //  while(true) {
// //     let num = 1;
// //  }


// // let num = 3;
// //  do {
// //     console.log(num);
// //     num++;

// //  } while(num <5);  // = 3
    
// // num = 3;
// //  while(num <5); {
// //     console.log(num);
// //     num++;
// // setInterval
// //  } // = 4
    
// //  setTimeout(() => {console.log('funzione esempio')}, 3000)


// setTimeout(() => {console.log('funzione esempio')}, 3000)

// setTimeout(function(){
//     console.log('funzione esempio')
// }, 3000)  // s`me as above

// // setInterval(() => {console.log('funzione interval')}, 3000) // keeps going


// let data = new Date().toLocaleDateString();
function time() {
    let data = new Date();
    let day = data.getUTCDate();
    let month = data.getUTCMonth() +1;
    let year = data.getFullYear();
    let hours = data.getUTCHours();
    let mins = data.getUTCMinutes();
    let secs = data.getUTCSeconds();
    h = leadingzero(hours);
    m = leadingzero(mins);
    s = leadingzero(secs);
document.getElementById('time').innerHTML = day + '/' + month + '/' + year + '    '+ hours + '-' + m + '-' + secs;

} 

function leadingzero(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }

setInterval(time, 1000);

let data = new Date(0);
let hours1 = data.getUTCHours();
let mins1 = data.getUTCMinutes();
let secs1 = data.getUTCSeconds();
h1 = leadingzero(hours1);
m1 = leadingzero(mins1);
s1 = leadingzero(secs1);
document.getElementById('crono').innerHTML = h1 + ' : ' + m1 + ' : ' + s1;

function update_secs() {
    s1++;
    if (s1 >=60) {

        s1 = 0;
        m1++;
    }
    document.getElementById('crono').innerHTML = h1 + ' : ' + m1 + ' : ' + s1;
        
}

var myInterval;

function start() {

    myInterval = setInterval(update_secs, 1000);
    console.log(s1)
    
    
   
}

function reset() {
    clearInterval(myInterval);
    let data = new Date(0);
    let hours1 = data.getUTCHours();
    let mins1 = data.getUTCMinutes();
    let secs1 = data.getUTCSeconds();
    h1 = leadingzero(hours1);
    m1 = leadingzero(mins1);
    s1 = leadingzero(secs1);
    document.getElementById('crono').innerHTML = h1 + ' : ' + m1 + ' : ' + s1;
}


function stop() {
    clearInterval(myInterval);
}

