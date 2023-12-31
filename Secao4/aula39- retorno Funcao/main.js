// // return
// // retorna um valor
// // termina uma função

// function soma(a, b) {
//     return a + b;
// }

// function soma2(a, b) {
//     console.log(a + b);
// }

// soma2(5, 2);

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome: nome, sobrenome: sobrenome
//     };
// }

// const p1 = criaPessoa("Matheus", "Miguel");
// const p2 = {
//     nome: "Matheus", sobrenome: "Miguel"
// };

// console.log(p1);
// console.log(p2);

// function falarFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falarFrase("Olá");

// console.log(olaMundo("mundo!"));

function criaMultiplicador(multiplicador) {
    // multiplicador 
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));