//enquanto
while (chute != numeroScreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    if (chute == numeroScreto) {
        alert(`Isso aí! você descobriu o número ${numeroScreto}`);
    } else {
        if (chute > numeroScreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }

    }
}
