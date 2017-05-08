const express = require('express')
const readline = require('readline');
const app = express();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var errores = ["El valor introducido es menor de lo permitido","El valor introducido es mayor de lo permitido","El valor introducido no es un entero validod"];

// Funció principal que ejecuta la pregunta por el terminal
function pregunta(valor){
    rl.question('Introdce un valor entre el 0  y el 10? ', (valor) => {
        let estado = testValor(valor, errores)
        if(estado!= true){
            pregunta();
        }else{
            console.log(conversor(valor));
            pregunta()
        }
    });
}

// Función conversora
function conversor(valor){

    var array =    ["1","2","3","4","5","6","7","8","9","10"];
    var romanos =  ["I","II","III","IV","V","VI","VII","VIII","IX","X"];

    if(array.indexOf(valor)!=-1){
       return romanos[array.indexOf(valor)]; 
    }
}

// Función de testeo de la entrada
function testValor(valor, errores){
    if(valor < 0){
        console.log( errores[0]);
        return false;
    }else if ( valor > 10){
        console.log( errores[1]);
        return false;
    }else if (isNaN(valor) || valor==0){
        console.log( errores[2]);
        return false;
    }else {
        return true;
    }
}

// Inicio la función
pregunta()