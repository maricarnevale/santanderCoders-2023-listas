// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

/* const base = prompt("Digite o valor da base do retângulo.")
const altura = prompt("Digite o valor da altura do retângulo.")

let resultado = base * altura

alert(`A área do retângulo é ${resultado.toFixed(2)}`) */

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

/* const numero = prompt("Digite um número")

if ((parseInt(numero) % 2) == 0) {
  alert(`${numero} é um número par`)
} else {
  alert(`${numero} é um número ímpar`)
} */

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

/* function verificaFrase() {

  const frase = prompt("Digite uma frase")

  if(frase.includes("JavaScript")) {
    return alert(`A frase contém a palavra "JavaScript`)
  } else {
    return alert(`A frase não contém a palavra "JavaScript"`)
  }

}

verificaFrase(); */

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

/* const palavra1 = prompt("Digite uma palavra")
const palavra2 = prompt("Digite uma palavra")

if (palavra1.toLowerCase() == palavra2.toLowerCase()) {
  alert(`As palavras são iguais`)
} else {
  alert(`As palavras são diferentes`)
} */

// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

/* let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = ["a", "b", "c", "d", "e"]

resultado = vetor1 + "," + vetor2

console.log(resultado); */

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

/* let vetor1 = [1, 2, 3, 4, 5, 6]

const initialValue = 0;
let soma = vetor1.reduce((acumulador, currentValue) => acumulador + currentValue, initialValue);
console.log(soma)
let resultado = soma / (vetor1.length);

console.log(resultado); */

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".

/* function dataAtual() {
  let data = new Date()
  let dia = data.getDate();
  let mes = data.getMonth();
  let ano = data.getFullYear();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();

  return (`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`)
  
}

console.log(dataAtual()); */

// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().

/* let arr = [5, 98, 72, 1, 3, 69];
let max = Math.max(...arr)

console.log(max); */

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.

/* function valorRandom(valor1, valor2) {
  return Math.floor(Math.random() * (valor2 - valor1 + 1)) + valor1;

}

const valor1 = 20;
const valor2 = 50;

alert(valorRandom(valor1, valor2)); */

// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.

/* const numero = prompt('Digite um número (ele deve ser inteiro e positivo): ')
const numeroInteiro = parseInt(numero)
let divisoresNumeros = 0

for(let i = 1; i <= numeroInteiro; i++){

  if(numeroInteiro  % i === 0) {

    divisoresNumeros++
  }
}

if(divisoresNumeros === 2){
    alert(`O número ${numeroInteiro} é primo, pois é divisível por 1 e por ele mesmo!`)
} else {
    alert(`O número ${numeroInteiro} não é primo.`)
} */

// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.

/* const valor1 = "5";
const valor2 = 2;

mult = valor1 * valor2;

console.log(typeof mult);
console.log(mult); */

//Explicação: como estamos utilizando o operador matemático de multiplicação, o sistema converte diretamente a variável "string" em "numérica" 
//para que seja possível realizar o cálculo

// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável.

/* const string = "123";
const stringNumerica = Number(string);

console.log(typeof string)
console.log(typeof stringNumerica)
console.log(stringNumerica) */

// 13- Escreva um programa que adicione um número e uma string. 

/* const numero = 5;
const string = "Mari";

resultado = string + numero;
console.log(resultado);  */

// 14- Explique o resultado e discuta a coerção que ocorre.

//O símbolo de adição (+) é utilizado para concatenar strings, por isso que quando o programa identifica que uma das variáveis é uma "string", 
//automaticamente utilizando a coerção implícita, ele concatena o valor numérico à string, ao invés de realizar a soma, pois existe um valor do 
//qual é uma string e quando usado o "+" é concatenado ao outro valor. 

// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.

/* const valor1 = null;
const valor2 = undefined;

console.log(typeof valor1)
console.log(typeof valor2)

if (valor1 === valor2) {
  console.log("são iguais em valor e tipo")
} else {
  console.log("são diferentes")
} */

// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

/* function variavelTipo(variavel) {
  return typeof variavel === "function"
}

let variavel = "5"
console.log(variavelTipo(variavel)) */

// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

/* function expressao() {

  exp = (10 + 5) * 3 / 20
  return exp

}

console.log(expressao()) */

// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.

/* function positivoImpar(numero) {
  if (numero >= 0) {
    if (numero % 2 != 0) {
      console.log("O número é posito e ímpar.")
    } else {
      console.log("O número é par.")
    }
  } else {
    console.log("O número não é positivo.")
  }
}

let numero = Number(prompt("Digite um número"))
positivoImpar(numero) */

// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, 
//considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.

/* function anoBissexto(ano) {
  if (ano % 4 == 0) {
    if (ano % 100 != 0 || ano % 400 == 0) {
      console.log("O ano é bissexto.")
    } else {
      console.log("O ano não é bissexto")
    }
  } else {
    console.log("O ano não é divisível por 4, então não é bissexto.")
  }
}

let ano = Number(prompt("Digite um ano (AAAA)."))
anoBissexto(ano) */

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos 
//e não estar na lista de membros banidos (use operadores lógicos).

/* function permissao(nome, idade, listaBanidos) {

  if(idade >= 18 && !listaBanidos.includes(nome)){
    return alert(`${nome}, você tem permissão para entrar.`)
  } else {
    return alert(`${nome}, você não tem permissão para entrar.`)
  }
}

const nome = prompt("Digite o seu nome")
const idade = prompt("Digite a sua idade")
const listaBanidos = ['Erika', 'Mariana', 'José']

permissao(nome, idade, listaBanidos) */

// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique 
//se correspondem aos valores esperados.

const usuarios = [
  {login: 'maricarnevale', senha: '7673mari'}
]
const login = prompt("Digite seu login")
const senha = prompt("Digite sua senha")


