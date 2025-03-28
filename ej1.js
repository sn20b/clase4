/* Ejercicio 1: "Calculadora de Potencias"
Implementa una función que calcule potencias usando recursividad.
El programa debe:
- Crear una función que reciba base y exponente
- Usar recursividad para calcular la potencia
- Manejar casos especiales (exponente 0, negativo)
*/


var base = -10;
var exponente = -2;
var resultado = 1;   

function calcularPotencia (base,exponente,resultado){
    if(exponente<0){base=1/base};
    if(exponente==0){return resultado}
    else{return(calcularPotencia(base,Math.abs(exponente)-1,resultado*base))}}


console.log(calcularPotencia(base,exponente,resultado))

//node ej1.js














