// A simple program that calculates the mean, median and mode of a given set of numbers.

var resultadoFX = document.getElementById("resultadoFX");

function mean(userArray) {
    var userInput = document.getElementById("inputArray");
    var userString = userInput.value;
    var userArray = userString.split(',');
    console.log(userArray);
    suma = 0;
    for (let i = 0; i < userArray.length; i++) {
        var suma = suma + Number(userArray[i]);
    }
    prom = suma / userArray.length;
    console.log(prom);
    resultadoFX.innerHTML = "The mean is: " + prom;
}


function compareNumbers(a,b) {
    return a - b;
}

function median(userArray) {
    var userInput = document.getElementById("inputArray");
    var userString = userInput.value;
    var userArray = userString.split(',');
    console.log(userArray);
    var userArrayOrdered = userArray.sort(compareNumbers);
    console.log(userArrayOrdered);
    if (userArrayOrdered.length % 2 == 0) {
        var medianNum1 = userArrayOrdered[parseInt(userArrayOrdered.length / 2 - 1)];
        var medianNum2 = userArrayOrdered[parseInt(userArrayOrdered.length / 2)];
        var medianNum = (Number(medianNum1) + Number(medianNum2))/2
        resultadoFX.innerHTML = "The median is the average of (" + medianNum1 + " and " 
        + medianNum2 + "): " + medianNum;
    }
    else {
        var medianNum = userArrayOrdered[parseInt(userArrayOrdered.length / 2)];
        console.log(medianNum);
        resultadoFX.innerHTML = "The median is: " + medianNum;
    }

}


function mode(userArray) {
    var userInput = document.getElementById("inputArray");
    var userString = userInput.value;
    var userArray = userString.split(',');
    console.log(userArray);
    var userArrayOrdered = userArray.sort(compareNumbers);
    console.log(userArrayOrdered);
    var posicion = 0;
    var contador = [];
    var nombres = [];
    contador[posicion] = 1;
    nombres[posicion] = userArrayOrdered[posicion];
    for (let i = 1; i < userArrayOrdered.length; i++) {
        if (userArrayOrdered[i] == userArrayOrdered[(i-1)]) {
            contador[posicion] += 1;
        }
        else {
            posicion += 1;
            contador[posicion] = 0;
            contador[posicion] += 1;
            nombres[posicion] = userArrayOrdered[i];
        }
    }
    var serieOrdenada = [];
    for (let j = 0; j < contador.length; j++) {
        serieOrdenada[j]={nombre:nombres[j], cantidad:contador[j]};
    }
    console.log(serieOrdenada);
    var contadorOrdenado = contador.sort(compareNumbers);
    var cantModes = 1;
    for (let h = contadorOrdenado.length; h > 0; h--) {
        if (contadorOrdenado[h] == contadorOrdenado[h-1]) {
            cantModes += 1;
        }
    }
    console.log(cantModes);

    var modeCantidad = contadorOrdenado.pop()
    for (let i = 0; i < serieOrdenada.length; i++) {
        if (serieOrdenada[i].cantidad == modeCantidad) {
            console.log(serieOrdenada[i].nombre)
            resultadoFX.innerHTML = "The mode is: " + serieOrdenada[i].nombre;
        }
    }
}

  