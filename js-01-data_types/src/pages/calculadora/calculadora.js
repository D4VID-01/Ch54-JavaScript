/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300
*/



const obtenerEdadEnAños = () => {

    let años = document.getElementById('birthdate').value;
    let conversion = parseInt(años);
    return conversion;
}

const conversionAMeses = () => {

    let edadMeses = obtenerEdadEnAños() * 12;
    return edadMeses;
}

const mostrarEdadEnMeses = () => {

    let edadEnMeses = conversionAMeses();
    let resultado = `Tu edad en meses es de: ${edadEnMeses}`
    document.getElementById('result').innerHTML = resultado;
    return resultado;
}



