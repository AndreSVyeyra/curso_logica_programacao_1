alert ('Boas-vindas ao site');
let nome ='Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro preencha todos os campos';
alert (mensagemDeErro);

let nomeDousuário = prompt ('Digite seu nome');
let idadeDoUsuário = prompt ('Digite sua idade');
if (idadeDoUsuário>=18) {
   alert ('Pode tirar a habilitação!');
}