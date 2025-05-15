console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.
*/

saludar('David');

function saludar( nombre ) {
  console.log("Qué te gustaría de regalo en cumpleaños " + nombre );
}




/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function (nombre, regalo) {
  console.log(`Felicidades ${nombre}, te traje un ${regalo}`);
}

darRegalo('David', 'Automovil');

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

function sumaDosNumeros (num1, num2) {
  let resultado = console.log(`La resta de ${num1} y ${num2} es: ${num1 + num2}`);
  return resultado;
}

sumaDosNumeros(10, 34);


const restaDosNumeros = function (num1, num2) {
  let resultado = console.log(`La suma de ${num1} y ${num2} es: ${num1 - num2}`);
  return resultado;
}

restaDosNumeros(34, 8);





/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp () {
  console.log('Configuración inicial');
})();



/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule al área de un triángulo
// La función debe retornar el resultado.

function calaculaArea(base, altura) {
  return (base*altura)/2;
}

console.log(calaculaArea(12, 20));


// Realizar una función expresada que calcule al área de un triángulo
// La función debe retornar el resultado.

const calculaArea2 = function (base, altura) {
  return (base*altura)/2;
}

console.log(calculaArea2(12, 20));

//Realizar una arrow function que calcule al área de un triángulo
// al función debe retornar el resultado.

const calaculaArea3 = (base, altura) => (base*altura)/2;

console.log(calaculaArea3(12, 20));

// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

const calaculaAreaCirculo = radio => Math.PI * (radio**2);


const mostraeResultado = (radio) => {
  let parrafo = document.getElementById('area-circulo').innerText = calaculaAreaCirculo(radio);
  return parrafo;
} 

mostraeResultado(10);


/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const saludarPersona = ( nombre="persona invitada" ) => console.log(`Hola ${nombre}, ya nos vamos a descansar`);

saludarPersona(); // Hola persona invitada, ya nos vamos a descansar
saludarPersona("Mich"); // Hola Mich, ya nos vamos a descansar

console.log( parseInt("5") ); // 5 (base 10: 0,1,2,3,4,5,6,7,8,9)
console.log( parseInt("1000") ); // 1000 (base 10)
console.log( parseInt("1000", 10) ); // 1000 (base 10)
console.log( parseInt("1000", 2) ); // 8 (base 10)
console.log( parseInt("D2042D") ); // NaN (base 10)
console.log( parseInt("D2042D", 16) ); // 13763629





/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");
                                            // 18("Hola Ch54");
                                            // "patito"("Hola Ch54");
                                            // console.log("Hola Ch54");
                                            // undefined("Hola Ch54");
                                            // enviarAParrafo("Hola Ch54")

 // imprimirMensaje( 18 ); // fncCallBack is not a function
 // imprimirMensaje( "Patito" ); // fncCallBack is not a function
 imprimirMensaje( console.log ); // "Hola Ch54"
 // imprimirMensaje( console.log("Luis") ); //  fncCallBack is not a function
 // imprimirMensaje( undefined ); //  fncCallBack is not a function

 const enviarAParrafo = ( mensaje ) => {
    const saluda = "Hola, buen día";
    const referencia = document.getElementById("saludo-callback");
    referencia.innerHTML = `${saluda} ${mensaje}`;
 };

 imprimirMensaje( enviarAParrafo ); // El saludo es: Hola, buen día Hola Ch54
 
 // usando la función imprimirMensaje, enviar un callback para que
 // imprima con alert
 // imprimirMensaje( alert );

 // =========================================================
/*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/
const sumarDosNumeros = ( a, b) => a  + b;
/*
const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;

    //imprimir en consola
   if( opcion === "consola") console.log(mensaje);
   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
   else if (opcion === "h2")document.getElementById("resultadoH2-sumatoria").innerText = mensaje;
   else alert(mensaje)
}
sumarEImprimir( 10, 14); // se imprimr en consola 
sumarEImprimir( 50, 50, "parrafo"); // Se imprime en el párrafo
*/

const sumarEImprimir = ( a, b , imprimir = console.log) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
}

sumarEImprimir( 10, 14); // se imprimr en consola 

const imprimirEnDOMParagraph = (mensaje) =>{
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje;
}

const imprimirEnDOMH2 = (mensaje) =>{
  const refParagraph = document.getElementById("resultadoH2-sumatoria");
  refParagraph.innerText = mensaje;
}

sumarEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph
sumarEImprimir( 10, 14, imprimirEnDOMH2); // se imprime en h2
  

// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120


/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/


const saludos = numeroDeSaludos => {
  if (numeroDeSaludos === 0) return;
  saludos(numeroDeSaludos - 1);
  console.log(`Saludo ${numeroDeSaludos}`);
}

saludos(10);