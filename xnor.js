// validacio de campos de pesos y umbrar
function validarcampos() {
    miCampoTexto = document.getElementById("peso1").value;
    miCampoTexto2 = document.getElementById("peso2").value;
    miCampoTexto3 = document.getElementById("peso3").value;
    valordeagregados = document.getElementById("valordeagregado").value;
    document.getElementById("valordeagregados").innerHTML = valordeagregados;
    if (miCampoTexto == "" || miCampoTexto2 == "" || miCampoTexto3 == "") {
        alert("los pesos estan vacios");
    }
    if (miCampoTexto <= (-1, 1)) {

        document.getElementById("pesos1").innerHTML = miCampoTexto;
    } else {
        alert("Uno de los campos esta incorrecto valores de -1 a 1");
    }
    if (miCampoTexto2 <= (-1, 1)) {
        document.getElementById("pesos2").innerHTML = miCampoTexto2;
    } else {
        alert("Uno de los campos esta incorrecto valores de -1 a 1");
    }
    if (miCampoTexto3 <= (-1, 1)) {
        document.getElementById("pesos3").innerHTML = miCampoTexto3;
    } else {
        alert("Uno de los campos esta incorrecto valores de -1 a 1");
    }
    if (valordeagregados == "") {
        alert("Umbral vacio");
    } else if (valordeagregados != 1 && valordeagregados != -1) {
        alert("El umbrar debe ser de 1 o -1");
        document.getElementById("valordeagregados").innerHTML = "";
    } else {

    }

}

// fin validacion de campos y umbral

// validacion de compuerta and 0 0 0

function enviodatosand1() {
    // var valordeagregados;
    var variabledesalida = 0; // esperado
    document.getElementById("esperadaand").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 0,
        x2 = 0;
    var sumatoriapesos = (parseInt(x1) * parseFloat(miCampoTexto)) + (parseInt(x2) * parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) * parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebaand").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebaand2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleand = document.getElementById("resultadoand").innerHTML = "no cumple";
    } else {
        document.getElementById("pruebaand2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleand = document.getElementById("resultadoand").innerHTML = "cumple";
    }
    if (cumpleand == "cumple" && cumplenor == "cumple" && cumpleor == "cumple") {
        alert("todo cumplio felicitaciones :)");
    }
}
// validacion de compuerta nand 0 0 1
function enviodatosnand1() {
    //var valordeagregados;
    var variabledesalida = 1; // esperado
    document.getElementById("esperadanor").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 0,
        x2 = 0;
    var sumatoriapesos = (parseInt(x1) * parseFloat(miCampoTexto)) + (parseInt(x2) * parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) * parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebanor").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebanor2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumplenand = document.getElementById("resultadonor").innerHTML = "cumple";
    } else {
        document.getElementById("pruebanor2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumplenand = document.getElementById("resultadonor").innerHTML = "No cumple";
    }
    if (cumpleand == "cumple" && cumpleand == "cumple" && cumpleor == "cumple") {
        alert("todo cumplio felicitaciones :)");
    }
}
// validacion de compuerta or 0 0 0
function enviodatosor1() {
    //var valordeagregados;
    var variabledesalida = 0; // esperado
    document.getElementById("esperadaor").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 0,
        x2 = 0;
    var sumatoriapesos = (parseInt(x1) + parseFloat(miCampoTexto)) + (parseInt(x2) + parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) + parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebaor").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebaor2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleor = document.getElementById("resultadoor").innerHTML = "no cumple";
    } else {
        document.getElementById("pruebaor2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleor = document.getElementById("resultadoor").innerHTML = "cumple";
    }
    if (cumpleand == "cumple" && cumplenor == "cumple" && cumpleor == "cumple") {
        alert("todo cumplio felicitaciones :)");
    }
}
// validacion de compuerta and 0 1 0
function enviodatosand2() {
    //var valordeagregados;
    var variabledesalida = 0; // esperado
    document.getElementById("esperadaand").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 0,
        x2 = 1;
    var sumatoriapesos = (parseInt(x1) * parseFloat(miCampoTexto)) + (parseInt(x2) * parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) * parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebaand").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebaand2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleand = document.getElementById("resultadoand").innerHTML = "no cumple";
    } else {
        document.getElementById("pruebaand2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleand = document.getElementById("resultadoand").innerHTML = "cumple";
    }
    if (cumpleand == "cumple" && cumpleand == "cumple" && cumpleor == "cumple") {
        alert("todo cumplio felicitaciones :)");
    }
}
// validacion de compuerta nand 0 1 1
function enviodatosnand2() {
    //var valordeagregados;
    var variabledesalida = 1; // esperado
    document.getElementById("esperadanor").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 0,
        x2 = 1;
    var sumatoriapesos = (parseInt(x1) + parseFloat(miCampoTexto)) + (parseInt(x2) + parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) + parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebanor").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebanor2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumplenand = document.getElementById("resultadonor").innerHTML = "cumple";
    } else {
        document.getElementById("pruebanor2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumplenand = document.getElementById("resultadonor").innerHTML = "no cumple";
        if (cumpleand == "cumple" && cumpleand == "cumple" && cumpleor == "cumple") {
            alert("todo cumplio felicitaciones :)");
        }
    }
}
// validacion de compuerta or 0 1 1
function enviodatosor2() {
    //var valordeagregados;
    var variabledesalida = 1; // esperado
    document.getElementById("esperadaor").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 0,
        x2 = 1;
    var sumatoriapesos = (parseInt(x1) + parseFloat(miCampoTexto)) + (parseInt(x2) + parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) + parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebaor").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebaor2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleor = document.getElementById("resultadoor").innerHTML = "cumple";
    } else {
        document.getElementById("pruebaor2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleor = document.getElementById("resultadoor").innerHTML = "no cumple";
    }
    if (cumpleand == "cumple" && cumplenor == "cumple" && cumpleor == "cumple") {
        alert("todo cumplio felicitaciones :)");
    }
}
// validacion de compuerta and 1 0 0
function enviodatosand3() {
    // var valordeagregados;
    var variabledesalida = 0; // esperado
    document.getElementById("esperadaand").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 1,
        x2 = 0;
    var sumatoriapesos = (parseInt(x1) * parseFloat(miCampoTexto)) + (parseInt(x2) * parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) * parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebaand").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebaand2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleand = document.getElementById("resultadoand").innerHTML = "no cumple";
    } else {
        document.getElementById("pruebaand2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleand = document.getElementById("resultadoand").innerHTML = "cumple";
    }
    if (cumpleand == "cumple" && cumpleand == "cumple" && cumpleor == "cumple") {
        alert("todo cumplio felicitaciones :)");
    }
}
// validacion de compuerta nand 1 0 1
//esta es la funcion de nand 3 
function enviodatosnand3() {
    //var valordeagregados;
    var variabledesalida = 1; // esperado
    document.getElementById("esperadanor").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 1,
        x2 = 0;
    var sumatoriapesos = (parseInt(x1) + parseFloat(miCampoTexto)) + (parseInt(x2) + parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) + parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebanor").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebanor2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumplenand = document.getElementById("resultadonor").innerHTML = "cumple";
    } else {
        document.getElementById("pruebanor2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumplenand = document.getElementById("resultadonor").innerHTML = "no cumple";
        if (cumpleand == "cumple" && cumpleand == "cumple" && cumpleor == "cumple") {
            alert("todo cumplio felicitaciones :)");
        }
    }
}
// validacion de compuerta or 1 0 1
function enviodatosor3() {
    //var valordeagregados;
    var variabledesalida = 1; // esperado
    document.getElementById("esperadaor").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 1,
        x2 = 0;
    var sumatoriapesos = (parseInt(x1) + parseFloat(miCampoTexto)) + (parseInt(x2) + parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) + parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebaor").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebaor2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleor = document.getElementById("resultadoor").innerHTML = "cumple";
    } else {
        document.getElementById("pruebaor2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleor = document.getElementById("resultadoor").innerHTML = "no cumple";
    }
    if (cumpleand == "cumple" && cumplenor == "cumple" && cumpleor == "cumple") {
        alert("todo cumplio felicitaciones :)");
    }
}
// validacion de compuerta and 1 1 1
function enviodatosand4() {
    //var valordeagregados;
    var variabledesalida = 1; // esperado
    document.getElementById("esperadaand").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 1,
        x2 = 1;
    var sumatoriapesos = (parseInt(x1) * parseFloat(miCampoTexto)) + (parseInt(x2) * parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) * parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebaand").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebaand2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleand = document.getElementById("resultadoand").innerHTML = "cumple";
    } else {
        document.getElementById("pruebaand2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleand = document.getElementById("resultadoand").innerHTML = "NO cumple";
    }
    if (cumpleand == "cumple" && cumpleand == "cumple" && cumpleor == "cumple") {
        alert("todo cumplio felicitaciones :)");
    }
}
// validacion de compuerta nand 1 1 0
function enviodatosnand4() {
    //var valordeagregados;
    var variabledesalida = 0; // esperado
    document.getElementById("esperadanor").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 1,
        x2 = 1;
    var sumatoriapesos = (parseInt(x1) + parseFloat(miCampoTexto)) + (parseInt(x2) + parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) + parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebanor").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebanor2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumplenand = document.getElementById("resultadonor").innerHTML = "no cumple";
    } else {
        document.getElementById("pruebanor2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumplenand = document.getElementById("resultadonor").innerHTML = "cumple";
        if (cumpleand == "cumple" && cumpleand == "cumple" && cumpleor == "cumple") {
            alert("todo cumplio felicitaciones :)");
        }
    }
}
// validacion de compuerta or 1 1 1
function enviodatosor4() {
    //var valordeagregados;
    var variabledesalida = 1; // esperado
    document.getElementById("esperadaor").innerHTML = variabledesalida;

    var sumatoriapesos, x1 = 1,
        x2 = 1;
    var sumatoriapesos = (parseInt(x1) + parseFloat(miCampoTexto)) + (parseInt(x2) + parseFloat(miCampoTexto2)) + (parseInt(valordeagregados) + parseFloat(miCampoTexto3));
    var nsumatoriatotal = sumatoriapesos.toFixed(1);
    document.getElementById("pruebaor").innerHTML = nsumatoriatotal;

    if (sumatoriapesos > 0.5) {
        document.getElementById("pruebaor2").innerHTML = "1";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleor = document.getElementById("resultadoor").innerHTML = "cumple";
    } else {
        document.getElementById("pruebaor2").innerHTML = "0";
        //validamos el error
        //var error = variabledesalida - 1;
        //document.getElementById("error").innerHTML = error ;
        cumpleor = document.getElementById("resultadoor").innerHTML = "no cumple";
    }
    if (cumpleand == "cumple" && cumplenor == "cumple" && cumpleor == "cumple") {
        alert("El puto amo");
    }
}