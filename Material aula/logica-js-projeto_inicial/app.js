alert('Boas vindas ao jogo do número secreto');
let numeroScreto = parseInt(Math.random() * 100 + 1);
console.log(numeroScreto);
let chute;
let tentativas = 1;

//enquanto
while (chute != numeroScreto) {
    chute = prompt('Escolha um número entre 1 e 100');

    if (chute == numeroScreto) {
        break;
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! você descobriu o número ${numeroScreto} com ${tentativas} ${palavraTentativa}`);
