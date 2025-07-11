//1
alert('Qual o dia da semana?');
let diaDaSemana = prompt('Digite o dia da semana:');

if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
    alert( 'Bom fim de semana!');
} else {
    alert('Boa semana!')
}

//2
let numero = Number(prompt('Digire um número:'))
if (numero > 0) {
    alert('O número é positivo!');
} else if (numero < 0) {
    alert('O número é negativo!');
} else {
    alert('O número é zero!');
}

//3
let pontuacao = Number(prompt('Digite sua pontuação:'));
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
}  else {
    alert('Tente novamente para ganhar.');
}

//4
let saldo = 10000;
alert(`Seu saldo atual é de R$ ${saldo}.`);

//5
let nome = (prompt('Digite seu nome:'));
alert(`Olá, ${nome}!`);



