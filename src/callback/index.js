function sum(number1, number2){
    return number1 + number2;
}

//call back que recibe como argumento la funcion anterior creada
// asignacion de call es para identifcar que este es un calback
function operation(number1, number2, callback){
    return callback(number1, number2);
}

//crear el llamdo o la ejecucion
console.log(operation(3,5, sum));


// ____________________//
//function solo recibe un callback, paso 1
function date(callback){
    console.log(new Date);

    //esperar n tiempo para ser llamada nuevamente, paso 4
    setTimeout(function (){ 
        let date =  new Date;
        callback(date);
    }, 3000)
}

//ejecutar, paso 3
function printDate(dateNow){
    console.log(dateNow)
}

//pasando valor, paso 2
date(printDate);