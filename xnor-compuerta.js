let peso1 = document.querySelector('#peso1');
let peso2 = document.querySelector('#peso2');
let peso3 = document.querySelector('#peso3');
let valordeagregado = document.querySelector('#valordeagregado');
const validarcampos = () => {
        //pesos de los imputs
        //mostrar pesos en la tabla
        let pesos1 = document.querySelector('#pesos1')
        let pesos2 = document.querySelector('#pesos2')
        let pesos3 = document.querySelector('#pesos3')
        let valordeagregados = document.querySelector('#valordeagregados')

        //validaciones respectivas
        //validacion de que los campos no esten vacios
        if (peso1.value === '' || peso2.value === '' || peso3.value === '' || valordeagregado.value === '') {
            //libreria externa
            Swal.fire({
                title: 'Error!',
                text: 'NO se puede tener campos vacios',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        }
        //validacion de que los campos esten en el rango de 1 a -1, si es correcto se le asigan los valores ca las variables let
        if (peso1.value <= (-1, 1) && peso2.value <= (-1, 1) && peso3.value <= (-1, 1) && valordeagregado.value <= (-1, 1)) {
            //asignacion de pesos
            pesos1.innerHTML = peso1.value;
            pesos2.innerHTML = peso2.value;
            pesos3.innerHTML = peso3.value;
            valordeagregados.innerHTML = valordeagregado.value;
        } else {
            //libreria
            Swal.fire({
                title: 'Error!',
                text: 'Uno de los campos esta incorrecto valores de 1 a -1',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        }

    }
    //and fila 1
const enviodatosand1 = () => {

        //validacion compuerta and 0 0 0 salida esperada = 0
        //guardamos en una variable la salida esperada
        let variabledesalida = 0;
        let salidaesperada = document.querySelector('#esperadaand');
        let pruebaand = document.querySelector('#pruebaand');
        //operación
        let sumatoriapesos, x1 = 0,
            x2 = 0
        sumatoriapesos = (parseInt(x1) * parseFloat(peso1.value)) + (parseInt(x2) * parseFloat(peso2.value)) + (parseInt(valordeagregado.value) * parseFloat(peso3.value));
        //asiganmos a un campo del html la sumatoria de pesos
        pruebaand.innerHTML = sumatoriapesos.toFixed(1)
            //validaciones de la sumatoria de pesos
        if (sumatoriapesos > 0.5) {
            document.querySelector('#pruebaand2').innerHTML = '1'
            document.querySelector('#pruebaand2').className = 'badge badge-danger'
            document.querySelector('#resultadoand').innerHTML = 'no cumple'
            document.querySelector('#resultadoand').className = 'badge badge-danger'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = "badge badge-danger"
            return false
        } else {
            document.querySelector('#pruebaand2').innerHTML = '0'
            document.querySelector('#pruebaand2').className = 'badge badge-primary'
            document.querySelector('#resultadoand').innerHTML = 'cumple'
            document.querySelector('#resultadoand').className = 'badge badge-primary'
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = "badge badge-primary"
            return true
        }
    }
    //nand fila 1
const enviodatosnand1 = () => {

        //validacion compuerta and 0 0 1 salida esperada = 1
        //guardamos en una variable la salida esperada
        let variabledesalida = 1;
        let salidaesperada = document.querySelector('#esperadanand');
        let pruebaand = document.querySelector('#pruebanand');
        //operación
        let sumatoriapesos, x1 = 0,
            x2 = 0
        sumatoriapesos = (parseInt(x1) * parseFloat(peso1.value)) + (parseInt(x2) * parseFloat(peso2.value)) + (parseInt(valordeagregado.value) * parseFloat(peso3.value));
        console.log({ sumatoriapesos });
        //asiganmos a un campo del html la sumatoria de pesos
        pruebaand.innerHTML = sumatoriapesos.toFixed(1)
            //validaciones de la sumatoria de pesos
        if (sumatoriapesos > 0.5) {
            document.querySelector('#pruebanand2').innerHTML = '1'
            document.querySelector('#pruebanand2').className = 'badge badge-primary'
            document.querySelector('#resultadonand').innerHTML = 'cumple'
            document.querySelector('#resultadonand').className = 'badge badge-primary'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = 'badge badge-primary'
            return true
        } else {
            document.querySelector('#pruebanand2').innerHTML = '0'
            document.querySelector('#pruebanand2').className = 'badge badge-danger'
            document.querySelector('#resultadonand').innerHTML = 'no cumple'
            document.querySelector('#resultadonand').className = 'badge badge-danger'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = 'badge badge-danger'
            return false
        }
    }
    //or fila 1
const enviodatosor1 = () => {

        //validacion compuerta and 0 0 0 salida esperada = 0
        //guardamos en una variable la salida esperada
        let variabledesalida = 0;
        let salidaesperada = document.querySelector('#esperadaor');
        let pruebaand = document.querySelector('#pruebaor');
        //operación
        let sumatoriapesos, x1 = 0,
            x2 = 0
        sumatoriapesos = (parseInt(x1) + parseFloat(peso1.value)) + (parseInt(x2) + parseFloat(peso2.value)) + (parseInt(valordeagregado.value) + parseFloat(peso3.value));
        //asiganmos a un campo del html la sumatoria de pesos
        pruebaand.innerHTML = sumatoriapesos.toFixed(1)
            //validaciones de la sumatoria de pesos
        if (sumatoriapesos > 0.5) {
            document.querySelector('#pruebaor2').innerHTML = '1'
            document.querySelector('#pruebaor2').className = 'badge badge-danger'
            document.querySelector('#resultadoor').innerHTML = 'no cumple'
            document.querySelector('#resultadoor').className = 'badge badge-danger'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = 'badge badge-danger'
            return false
        } else {
            document.querySelector('#pruebaor2').innerHTML = '0'
            document.querySelector('#pruebaor2').className = 'badge badge-primary'
            document.querySelector('#resultadoor').innerHTML = 'cumple'
            document.querySelector('#resultadoor').className = 'badge badge-primary'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = 'badge badge-primary'
            return true
        }
    }
    //and fila 2
const enviodatosand2 = () => {

    //validacion compuerta and 0 1 0 salida esperada = 0
    //guardamos en una variable la salida esperada
    let variabledesalida = 0;
    let salidaesperada = document.querySelector('#esperadaand');
    let pruebaand = document.querySelector('#pruebaand');
    //operación
    let sumatoriapesos, x1 = 0,
        x2 = 1
    sumatoriapesos = (parseInt(x1) * parseFloat(peso1.value)) + (parseInt(x2) * parseFloat(peso2.value)) + (parseInt(valordeagregado.value) * parseFloat(peso3.value));
    //asiganmos a un campo del html la sumatoria de pesos
    pruebaand.innerHTML = sumatoriapesos.toFixed(1)
        //validaciones de la sumatoria de pesos
    if (sumatoriapesos > 0.5) {
        document.querySelector('#pruebaand2').innerHTML = '1'
        document.querySelector('#pruebaand2').className = 'badge badge-danger'
        document.querySelector('#resultadoand').innerHTML = 'no cumple'
        document.querySelector('#resultadoand').className = 'badge badge-danger'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = "badge badge-danger"
        return false
    } else {
        document.querySelector('#pruebaand2').innerHTML = '0'
        document.querySelector('#pruebaand2').className = 'badge badge-primary'
        document.querySelector('#resultadoand').innerHTML = 'cumple'
        document.querySelector('#resultadoand').className = 'badge badge-primary'
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = "badge badge-primary"
        return true
    }
}

//nand fila 2
const enviodatosnand2 = () => {

        //validacion compuerta and 0 1 1 salida esperada = 1
        //guardamos en una variable la salida esperada
        let variabledesalida = 1;
        let salidaesperada = document.querySelector('#esperadanand');
        let pruebaand = document.querySelector('#pruebanand');
        //operación
        let sumatoriapesos, x1 = 0,
            x2 = 1
        sumatoriapesos = (parseInt(x1) + parseFloat(peso1.value)) + (parseInt(x2) + parseFloat(peso2.value)) + (parseInt(valordeagregado.value) + parseFloat(peso3.value));
        console.log({ sumatoriapesos });
        //asiganmos a un campo del html la sumatoria de pesos
        pruebaand.innerHTML = sumatoriapesos.toFixed(1)
            //validaciones de la sumatoria de pesos
        if (sumatoriapesos > 0.5) {
            document.querySelector('#pruebanand2').innerHTML = '1'
            document.querySelector('#pruebanand2').className = 'badge badge-primary'
            document.querySelector('#resultadonand').innerHTML = 'cumple'
            document.querySelector('#resultadonand').className = 'badge badge-primary'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = 'badge badge-primary'
            return true
        } else {
            document.querySelector('#pruebanand2').innerHTML = '0'
            document.querySelector('#pruebanand2').className = 'badge badge-danger'
            document.querySelector('#resultadonand').innerHTML = 'no cumple'
            document.querySelector('#resultadonand').className = 'badge badge-danger'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = 'badge badge-danger'
            return false
        }
    }
    //or fila 2
const enviodatosor2 = () => {

    //validacion compuerta and 0 1 1 salida esperada = 1
    //guardamos en una variable la salida esperada
    let variabledesalida = 1;
    let salidaesperada = document.querySelector('#esperadaor');
    let pruebaand = document.querySelector('#pruebaor');
    //operación
    let sumatoriapesos, x1 = 0,
        x2 = 1
    sumatoriapesos = (parseInt(x1) + parseFloat(peso1.value)) + (parseInt(x2) + parseFloat(peso2.value)) + (parseInt(valordeagregado.value) + parseFloat(peso3.value));
    //asiganmos a un campo del html la sumatoria de pesos
    pruebaand.innerHTML = sumatoriapesos.toFixed(1)
        //validaciones de la sumatoria de pesos
    if (sumatoriapesos > 0.5) {
        document.querySelector('#pruebaor2').innerHTML = '1'
        document.querySelector('#pruebaor2').className = 'badge badge-primary'
        document.querySelector('#resultadoor').innerHTML = 'cumple'
        document.querySelector('#resultadoor').className = 'badge badge-primary'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-primary'
        return true
    } else {
        document.querySelector('#pruebaor2').innerHTML = '0'
        document.querySelector('#pruebaor2').className = 'badge badge-danger'
        document.querySelector('#resultadoor').innerHTML = 'no cumple'
        document.querySelector('#resultadoor').className = 'badge badge-danger'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-danger'
        return false
    }
}

//and fila 3
const enviodatosand3 = () => {

        //validacion compuerta and 1 0 0 salida esperada = 0
        //guardamos en una variable la salida esperada
        let variabledesalida = 0;
        let salidaesperada = document.querySelector('#esperadaand');
        let pruebaand = document.querySelector('#pruebaand');
        //operación
        let sumatoriapesos, x1 = 1,
            x2 = 0
        sumatoriapesos = (parseInt(x1) * parseFloat(peso1.value)) + (parseInt(x2) * parseFloat(peso2.value)) + (parseInt(valordeagregado.value) * parseFloat(peso3.value));
        //asiganmos a un campo del html la sumatoria de pesos
        pruebaand.innerHTML = sumatoriapesos.toFixed(1)
            //validaciones de la sumatoria de pesos
        if (sumatoriapesos > 0.5) {
            document.querySelector('#pruebaand2').innerHTML = '1'
            document.querySelector('#pruebaand2').className = 'badge badge-danger'
            document.querySelector('#resultadoand').innerHTML = 'no cumple'
            document.querySelector('#resultadoand').className = 'badge badge-danger'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = "badge badge-danger"
            return false
        } else {
            document.querySelector('#pruebaand2').innerHTML = '0'
            document.querySelector('#pruebaand2').className = 'badge badge-primary'
            document.querySelector('#resultadoand').innerHTML = 'cumple'
            document.querySelector('#resultadoand').className = 'badge badge-primary'
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = "badge badge-primary"
            return true
        }
    }
    //nand fila 3
const enviodatosnand3 = () => {

    //validacion compuerta and 1 0 1 salida esperada = 1
    //guardamos en una variable la salida esperada
    let variabledesalida = 1;
    let salidaesperada = document.querySelector('#esperadanand');
    let pruebaand = document.querySelector('#pruebanand');
    //operación
    let sumatoriapesos, x1 = 1,
        x2 = 0
    sumatoriapesos = (parseInt(x1) + parseFloat(peso1.value)) + (parseInt(x2) + parseFloat(peso2.value)) + (parseInt(valordeagregado.value) + parseFloat(peso3.value));
    console.log({ sumatoriapesos });
    //asiganmos a un campo del html la sumatoria de pesos
    pruebaand.innerHTML = sumatoriapesos.toFixed(1)
        //validaciones de la sumatoria de pesos
    if (sumatoriapesos > 0.5) {
        document.querySelector('#pruebanand2').innerHTML = '1'
        document.querySelector('#pruebanand2').className = 'badge badge-primary'
        document.querySelector('#resultadonand').innerHTML = 'cumple'
        document.querySelector('#resultadonand').className = 'badge badge-primary'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-primary'
        return true
    } else {
        document.querySelector('#pruebanand2').innerHTML = '0'
        document.querySelector('#pruebanand2').className = 'badge badge-danger'
        document.querySelector('#resultadonand').innerHTML = 'no cumple'
        document.querySelector('#resultadonand').className = 'badge badge-danger'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-danger'
        return false
    }
}

//or fila 3
const enviodatosor3 = () => {

    //validacion compuerta and 1 0 1 salida esperada = 1
    //guardamos en una variable la salida esperada
    let variabledesalida = 1;
    let salidaesperada = document.querySelector('#esperadaor');
    let pruebaand = document.querySelector('#pruebaor');
    //operación
    let sumatoriapesos, x1 = 0,
        x2 = 1
    sumatoriapesos = (parseInt(x1) + parseFloat(peso1.value)) + (parseInt(x2) + parseFloat(peso2.value)) + (parseInt(valordeagregado.value) + parseFloat(peso3.value));
    //asiganmos a un campo del html la sumatoria de pesos
    pruebaand.innerHTML = sumatoriapesos.toFixed(1)
        //validaciones de la sumatoria de pesos
    if (sumatoriapesos > 0.5) {
        document.querySelector('#pruebaor2').innerHTML = '1'
        document.querySelector('#pruebaor2').className = 'badge badge-primary'
        document.querySelector('#resultadoor').innerHTML = 'cumple'
        document.querySelector('#resultadoor').className = 'badge badge-primary'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-primary'
        return true
    } else {
        document.querySelector('#pruebaor2').innerHTML = '0'
        document.querySelector('#pruebaor2').className = 'badge badge-danger'
        document.querySelector('#resultadoor').innerHTML = 'no cumple'
        document.querySelector('#resultadoor').className = 'badge badge-danger'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-danger'
        return false
    }
}

//and fila 4
const enviodatosand4 = () => {

        //validacion compuerta and 1 1 1 salida esperada = 1
        //guardamos en una variable la salida esperada
        let variabledesalida = 1;
        let salidaesperada = document.querySelector('#esperadaand');
        let pruebaand = document.querySelector('#pruebaand');
        //operación
        let sumatoriapesos, x1 = 1,
            x2 = 1
        sumatoriapesos = (parseInt(x1) * parseFloat(peso1.value)) + (parseInt(x2) * parseFloat(peso2.value)) + (parseInt(valordeagregado.value) * parseFloat(peso3.value));
        //asiganmos a un campo del html la sumatoria de pesos
        pruebaand.innerHTML = sumatoriapesos.toFixed(1)
            //validaciones de la sumatoria de pesos
        if (sumatoriapesos > 0.5) {
            document.querySelector('#pruebaand2').innerHTML = '1'
            document.querySelector('#pruebaand2').className = 'badge badge-primary'
            document.querySelector('#resultadoand').innerHTML = 'cumple'
            document.querySelector('#resultadoand').className = 'badge badge-primary'
                //asigno la variable de salida a un campo del html para mostrar
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = "badge badge-primary"
            return true
        } else {
            document.querySelector('#pruebaand2').innerHTML = '0'
            document.querySelector('#pruebaand2').className = 'badge badge-danger'
            document.querySelector('#resultadoand').innerHTML = 'no cumple'
            document.querySelector('#resultadoand').className = 'badge badge-danger'
            salidaesperada.innerHTML = variabledesalida;
            salidaesperada.className = "badge badge-danger"
            return false
        }
    }
    //nand fila 4
const enviodatosnand4 = () => {

    //validacion compuerta and 1 1 0 salida esperada = 0
    //guardamos en una variable la salida esperada
    let variabledesalida = 0;
    let salidaesperada = document.querySelector('#esperadanand');
    let pruebaand = document.querySelector('#pruebanand');
    //operación
    let sumatoriapesos, x1 = 1,
        x2 = 1
    sumatoriapesos = (parseInt(x1) + parseFloat(peso1.value)) + (parseInt(x2) + parseFloat(peso2.value)) + (parseInt(valordeagregado.value) + parseFloat(peso3.value));
    console.log({ sumatoriapesos });
    //asiganmos a un campo del html la sumatoria de pesos
    pruebaand.innerHTML = sumatoriapesos.toFixed(1)
        //validaciones de la sumatoria de pesos
    if (sumatoriapesos > 0.5) {
        document.querySelector('#pruebanand2').innerHTML = '1'
        document.querySelector('#pruebanand2').className = 'badge badge-danger'
        document.querySelector('#resultadonand').innerHTML = 'no cumple'
        document.querySelector('#resultadonand').className = 'badge badge-danger'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-danger'
        return false
    } else {
        document.querySelector('#pruebanand2').innerHTML = '0'
        document.querySelector('#pruebanand2').className = 'badge badge-primary'
        document.querySelector('#resultadonand').innerHTML = 'no cumple'
        document.querySelector('#resultadonand').className = 'badge badge-primary'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-primary'
        return true
    }
}

//or fila 4
const enviodatosor4 = () => {

    //validacion compuerta and 1 1 1 salida esperada = 1
    //guardamos en una variable la salida esperada
    let variabledesalida = 1;
    let salidaesperada = document.querySelector('#esperadaor');
    let pruebaand = document.querySelector('#pruebaor');
    //operación
    let sumatoriapesos, x1 = 1,
        x2 = 1
    sumatoriapesos = (parseInt(x1) + parseFloat(peso1.value)) + (parseInt(x2) + parseFloat(peso2.value)) + (parseInt(valordeagregado.value) + parseFloat(peso3.value));
    //asiganmos a un campo del html la sumatoria de pesos
    pruebaand.innerHTML = sumatoriapesos.toFixed(1)
        //validaciones de la sumatoria de pesos
    if (sumatoriapesos > 0.5) {
        document.querySelector('#pruebaor2').innerHTML = '1'
        document.querySelector('#pruebaor2').className = 'badge badge-primary'
        document.querySelector('#resultadoor').innerHTML = 'cumple'
        document.querySelector('#resultadoor').className = 'badge badge-primary'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-primary'
        return true
    } else {
        document.querySelector('#pruebaor2').innerHTML = '0'
        document.querySelector('#pruebaor2').className = 'badge badge-danger'
        document.querySelector('#resultadoor').innerHTML = 'no cumple'
        document.querySelector('#resultadoor').className = 'badge badge-danger'
            //asigno la variable de salida a un campo del html para mostrar
        salidaesperada.innerHTML = variabledesalida;
        salidaesperada.className = 'badge badge-danger'
        return false
    }
}