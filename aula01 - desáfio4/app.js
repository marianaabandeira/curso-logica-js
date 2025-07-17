// 1. Criar um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Hello, World. Seja bem-vindo(a) ao programa!');

// 2. Criar variável chamada "nome" com o meu nome, dps utilizar o console.log para exibir uma mensagem
let nome = 'Mariana';
console.log(`Olá, ${nome}. Seja bem-vinda ao programa.`);

// 3. Criar variável chamada "nome" com o meu nome, dps utilizar o alert para exibir uma mensagem
let nome = 'mariana';
alert(`Olá, ${nome}. Seja bem-vinda ao programa.`); 

// 4. Utilizar o prompt pra fazer uma pergunta, dps armazenar resposta em uma variável e mostrar no console
let programaçãoFavorita = prompt ('Qual é a sua linguagem de programação favorita?');
console.log(programaçãoFavorita);

// 5. Criar 3 variáveis, valor1, valor2 e resultado, atribuir valores a valor1 e valor2, dps fazer uma operação de soma e exibir o resultado no console
let valor1 = 19;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`A soma do ${valor1} e ${valor2} é igual a ${resultado}`);

// 6. Criar 3 variáveis, valor1, valor2 e resultado, atribuir valores a valor1 e valor2, dps fazer uma operação de subtração e exibir o resultado no console
let valor1 = 19;
let valor2 = 10;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}`);

// 7. Pedir ao usuário para inserir sua idade no prompt, utilizar if e else exibindo mensagem apropriada no console
let idade = Number(prompt('Qual é a sua idade?'));
if (idade >= 18){
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

// 8. Criar variável "numero", pedir valor com prompt e verificar se é positivo, negativo ou zero
let numero = Number(prompt('Digite um número:'));
if (numero > 0) {
  console.log('O número é positivo.');
} else if (numero < 0) {
  console.log('O número é negativo.');
} else {
  console.log('O número é zero.');
}

// 9. Usar um loop while para imprimir os números de 1 a 10 no console
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 10. Criar uma variável "nota", atribuir um valor e usar if e else para determinar se é maior ou igual a 7 dps disso exibir mensagem no console
let nota = Number(prompt('Digite uma nota de 0 a 10:'));
if (nota >= 7){
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// 11. Usar o Math.random para gerar qualquer número aleatório e exibir número no console.
let numeroAleatorio = Math.random() 
console.log(`${numeroAleatorio}`);

// 12. Usar o Math.random para gerar um número inteiro entre 1 e 10 e exibir número no console.
let numeroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(`${numeroAleatorio}`);

// 13. Usar o Math.random para gerar um número inteiro entre 1 e 1000 e exibir número no console.
let numeroAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(`${numeroAleatorio}`);