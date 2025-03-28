/*
Ejercicio 2: "Gestor de Contactos"
Implementa un programa que gestione una lista de contactos.
El programa debe:
- Crear una función que reciba un array de contactos
- Cada contacto debe tener: nombre, teléfono, email, edad
- Ordenar los contactos por edad
- Agrupar los contactos por rango de edad (18-25, 26-35, etc.)
- Mostrar los grupos formados

Ejemplo de uso:
const contactos = [
    { nombre: "Ana", telefono: "123-456", email: "ana@email.com", edad: 25 },
    { nombre: "Juan", telefono: "789-012", email: "juan@email.com", edad: 30 }
];
*/


const contactos = [
    { nombre: "Ana", telefono: "123-456", email: "ana@email.com", edad: 25 },
    { nombre: "Juan", telefono: "789-012", email: "juan@email.com", edad: 30 },
    { nombre: "aa", telefono: "1", email: "aa@email.com", edad: -33 },
    { nombre: "bb", telefono: "2", email: "bb@email.com", edad: 999 }
];
const rangosEdades = {
    ["menorA18" : []],
    ["18A26" : []],
    ["26A35" : []],
    ["mayorA35" : []]
}

function agruparContactos (contactos){
    return(ordenarEdad(contactos),rangoEdad(contactos))
}

function ordenarEdad (contactos){
    var edadesOrdenadas = contactos.sort((a, b) => a.edad - b.edad );
    return edadesOrdenadas;}

/*function rangoEdad(contactos){
    if()
    else if
    else if
    else if


}
*/


console.log(agruparContactos(contactos));


//             node ej2.js