alert('Boas vindas ao jogo do número secreto');
let numeroScreto = 5;
console.log(numeroScreto);
let chute = prompt ('Escolha um número entre 1 e 10');

if (chute == numeroScreto ){
    alert('Isso aí! você descobriu o número secreto (5)')
} else {
    alert('Você errou :(')
}