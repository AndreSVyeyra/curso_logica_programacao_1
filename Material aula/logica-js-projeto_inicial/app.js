alert('Boas vindas ao jogo do número secreto');
let numeroScreto = 5;
console.log(numeroScreto);
let chute;
let tentativas = 1;

//enquanto
while (chute != numeroScreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    if (chute == numeroScreto) {
        alert(`Isso aí! você descobriu o número ${numeroScreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroScreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
    }
}
