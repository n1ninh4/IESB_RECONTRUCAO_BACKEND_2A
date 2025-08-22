//importando a lib prompt-sync
let prompt = require('prompt-sync')()

//usar a lib do prompt-sync
let nome = prompt("Qual é o seu nome?")

console.log("olá " + nome)

// importar o modulo CalculadoraNota

let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota.js')
//notaA1
// perguntar p o usuario a nota do exercicio, trabalho e prova
let exercicioA1 = parseFloat(prompt(" Qual a nota de ecercícios A1: "))
let trabalhoA1 =  parseFloat(prompt(" Qual a nota do trabalho A1: "))
let provaA1 =  parseFloat(prompt(" Qual a nota do prova A1: "))
let notaA1 = calcularNotaA1(exercicioA1, trabalhoA1, provaA1)

console.log ("### Calculo da NOTA A1 ###")
console.log ("Nota exercício A1", exercicioA1)
console.log ("Nota trabalho A1", trabalhoA1)
console.log ("Nota prova A1", provaA1)
console.log("NOTA A1 CALCULADA:", notaA1)  

//notaA2
let exercicioA2 = parseFloat(prompt(" Qual a nota de ecercícios A2: "))
let trabalhoA2 =  parseFloat(prompt(" Qual a nota do trabalho A2: "))
let provaA2 =  parseFloat(prompt(" Qual a nota do prova A2: "))
let notaA2 = calcularNotaA2(exercicioA2, trabalhoA2, provaA2)

console.log ("### Calculo da NOTA A2 ###")
console.log ("Nota exercício A2", exercicioA2)
console.log ("Nota trabalho A2", trabalhoA2)
console.log ("Nota prova A2", provaA2)
console.log("NOTA A2 CALCULADA:", notaA2)  

let notaFinal = calcularNotaFinal(notaA1,  notaA2)

console.log("### CALCULO DA NOTA FINAL ###")
console.log(" Nota Final: ", notaFinal)

if(notaFinal >= 5) {
    console.log("Parabéns "+ nome + ", você foi Aprovado")
}
else{
    console.log(nome +  ", estude mais, infelizmente REPROVADO!")
}
