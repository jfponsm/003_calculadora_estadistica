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
        resultadoFX.innerHTML = "The median is the mean of (" + medianNum1 + " and " 
        + medianNum2 + "): " + medianNum;
    }
    else {
        var medianNum = userArrayOrdered[parseInt(userArrayOrdered.length / 2)];
        console.log(medianNum);
        resultadoFX.innerHTML = "The median is: " + medianNum;
    }

}


function mode(userArray) {
    var userInput = document.getElementById("inputArray");      //hace un call del elemento de html
    var userString = userInput.value;                           //saca solo el string de numeros
    var userArray = userString.split(',');                      //crea un array con los numeros entre comas
    console.log(userArray);
    var userArrayOrdered = userArray.sort(compareNumbers);      //ordena de menor a mayor los numeros en el array
    console.log(userArrayOrdered);
    var posicion = 0;             //variable posicion
    var contador = [];            //array con la cantidad de veces que aparece cada numero
    var nombres = [];             //array con los nombres de los numeros asociados al array contador
    contador[posicion] = 1;       //para cada posicion, asigna un 1 al contador. si encuentra mas los sumara luego
    nombres[posicion] = userArrayOrdered[posicion];         //registra el numero que estamos analizando
    //ciclo que recorre todos los valores, y si encuentra uno que es igual al anterior, registra como suma en el 
    //contador de ese numero. si son distintos, sigue recorriendo.
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
    var serieOrdenada = [];         //crea un objeto con el nombre del numero, y la frecuencia como cantidad.
    for (let j = 0; j < contador.length; j++) {
        serieOrdenada[j]={nombre:nombres[j], cantidad:contador[j]};
    }
    console.log(serieOrdenada);
    var contadorOrdenado = contador.sort(compareNumbers);       //ordena el array contador de menor a mayor
    console.log(contadorOrdenado)
    console.log(contadorOrdenado.length);
    var cantModes = 1;                                          //el ciclo for revisa cuantas frecuencias max existen.
    for (let h = (contadorOrdenado.length-1); h > 0; h--) {
        if (contadorOrdenado[h] == contadorOrdenado[h-1]) {
            cantModes += 1;
        }
        else {
            break;
        }
    }
    console.log("Cantidad de modas: " + cantModes);         //imprime la cantidad de modas que hay.
    //del contador ordenado obtiene la frecuencia maxima
    var modeCantidad = contadorOrdenado.pop()
    var modeResults = [];
    var posn = 0;                   //el ciclo for busca los numeros cuya frecuencia es igual a la moda, y los guarda en modeResults
    for (let i = 0; i < serieOrdenada.length; i++) {
        if (serieOrdenada[i].cantidad == modeCantidad) {
            modeResults[posn] = serieOrdenada[i].nombre;
            posn += 1;
            console.log(serieOrdenada[i].nombre)
        }
    }
    console.log(modeResults)           //saca la moda por pantalla en el html
    if (cantModes == 1) {
        resultadoFX.innerHTML = "The mode is: " + modeResults;
    }
    else {
        resultadoFX.innerHTML = "There are " + cantModes + " modes: " + modeResults;
    }
    
}