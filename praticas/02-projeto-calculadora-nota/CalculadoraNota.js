//Modelo de calculadora de notas



// 40% Nota
function calcularNotaA1(exercicios, trabalho, prova,){
    return exercicios + trabalho + prova
}

// 60% Nota
function calcularNotaA2(exercicios, trabalho, prova,){
        return exercicios + trabalho + prova
}

//nota final calculada (notaA1 * 0.4) + (notaA2 * 0.6)
function calcularNotaFinal( notaA1, notaA2){
    return (notaA1 * 0.4) + (notaA2 * 0.6)
}

// exportar  essas funções para serem utilizadas

module.exports = {
    calcularNotaA1,
    calcularNotaA2,
    calcularNotaFinal
}


