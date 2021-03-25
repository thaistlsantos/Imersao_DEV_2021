var valor1 = parseInt(prompt('Digite o primeiro valor: '))
var valor2 = parseInt(prompt('Digite o segundo valor: '))


var operacao = prompt("Digite 1 para Soma, 2 para Subtração, 3 para Multiplicação e 4 para Divisão")

if  (operacao == 1) {
  var resultado = valor1 + valor2
  document.write("<h2>" + valor1 + " + " + valor2 + " = " + resultado + "</h2>")
}

else if  (operacao == 2) {
  var resultado = valor1 - valor2
  document.write("<h2>" + valor1 + " - " + valor2 + " = " + resultado + "</h2>")
}

else if  (operacao == 3) {
  var resultado = valor1 * valor2
  document.write("<h2>" + valor1 + " * " + valor2 + " = " + resultado + "</h2>")
}

else if  (operacao == 4) {
  var resultado = valor1 / valor2
  document.write("<h2>" + valor1 + " / " + valor2 + " = " + resultado + "</h2>")
}

else {
  document.write("<h2> Opção Inválida </h2>")
}