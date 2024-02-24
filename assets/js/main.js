// 01-Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
function challenge01() {
  window.alert("Hello World!");
}

// 02-Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

function challenge02() {
  let num1 = prompt(
    "Vamos fazer a soma de dois valores.\n\nInsira o primeiro valor:"
  );
  let num2 = prompt("Insira o segundo valor:");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Você inseriu um valor incorreto! \n\nTente novamente!");
  } else {
    let result = parseInt(num1) + parseInt(num2);
    alert(`O resultado de ${num1}+${num2} é = ${result}`);
  }
}

// 03 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

function challenge03() {
  var value = prompt(
    "Vamos verificar se o valor inserido é um número ou não.\n\nDigite um valor:"
  );

  if (typeof Number(value) === "number" && !isNaN(value)) {
    alert(`${value} é um número!`);
  } else {
    alert(`${value} não é um número!`);
  }
}

// 04 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

function challenge04() {
  var value = prompt(
    "Vamos verificar se o valor inserido é uma String ou não.\n\nDigite um valor:"
  );
  if (typeof String(value) === "string" && !Number(value)) {
    alert(`${value} é uma string!`);
  } else {
    alert(`${value} não é uma string!`);
  }
}

// 05 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

function challenge05() {
  var value = prompt(
    "Vamos verificar se o valor inserido é um Booleano ou não.\n\nDigite um valor:"
  );
  if (typeof Boolean(value) === "boolean" && !Number(value)) {
    alert(`${value} é um booleano!`);
  } else {
    alert(`${value} não é um booleano!`);
  }
}

// 06 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

function challenge06() {
  let num1 = prompt(
    "Vamos fazer a subtração de dois valores.\n\nInsira o primeiro valor:"
  );
  let num2 = prompt("Insira o segundo valor:");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Você inseriu um valor incorreto! \n\nTente novamente!");
  } else {
    let result = parseInt(num1) - parseInt(num2);
    alert(`O resultado de ${num1}-${num2} é = ${result}`);
  }
}

// 07 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

function challenge07() {
  let num1 = prompt(
    "Vamos fazer a multiplicação de dois valores.\n\nInsira o primeiro valor:"
  );
  let num2 = prompt("Insira o segundo valor:");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Você inseriu um valor incorreto! \n\nTente novamente!");
  } else {
    let result = parseInt(num1) * parseInt(num2);
    alert(`O resultado de ${num1}*${num2} é = ${result}`);
  }
}

// 08 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

function challenge08() {
  let num1 = prompt(
    "Vamos saber o resultado da divisão entre dois valores.\n\nInsira o primeiro valor:"
  );
  let num2 = prompt("Agora insira o segundo valor:");

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Você inseriu um valor incorreto! \n\nTente novamente!");
  } else {
    let result = parseInt(num1) / parseInt(num2);
    alert(`O resultado de ${num1}/${num2} é = ${result}`);
  }
}

// 09 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

function challenge09() {
  let num1 = prompt(
    "Vamos saber o número inserido é par.\n\nDigite um número:"
  );

  num1 = parseInt(num1);
  if (isNaN(num1)) {
    alert("Você inseriu um valor incorreto! \n\nTente novamente!");
  } else if (num1 % 2 === 0) {
    alert(`${num1} é um número par!`);
  } else {
    alert(`${num1} não é um número par!`);
  }
}

// 10-  Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
function challenge10() {
  let num1 = prompt("Vamos saber o número é ímpar.\n\nDigite um número:");

  num1 = parseInt(num1);
  if (isNaN(num1)) {
    alert("Você inseriu um valor incorreto! \n\nTente novamente!");
  } else if (num1 % 2 !== 0) {
    alert(`${num1} é um número ímpar!`);
  } else {
    alert(`${num1} não é um número ímpar!`);
  }
}
