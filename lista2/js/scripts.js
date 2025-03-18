function seguir() {
    alert('Você foi abduzido para o além.')
}

function exe1() {
    let nota1 = Number(document.getElementById('nota1').value); 
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let nota4 = Number(document.getElementById('nota4').value);

    let mediaAritmetica = (nota1 + nota2 + nota3 + nota4) / 4;

    if(mediaAritmetica >= 7) {
        document.getElementById('mediaAritmetica').textContent = `Aprovado com média: ${mediaAritmetica}`;
    } else {
        document.getElementById('mediaAritmetica').textContent = `Reprovado com média: ${mediaAritmetica}`;
    }
}

function exe2() {
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);

    let media = (nota1 + nota2) / 2

    if((media >= 0) && (media < 3)) {
        document.getElementById('mediaAritmetica').textContent = `Reprovado com média: ${media}`;
    } else if((media >= 3) && (media < 7)) {
        document.getElementById('mediaAritmetica').textContent = `Aluno ficou de exame. Média: ${media}`;
    } else if((media >= 7) && (media <= 10)) {
        document.getElementById('mediaAritmetica').textContent = `Aprovado com média: ${media}`;
    } else {
        document.getElementById('mediaAritmetica').textContent = `Problema com as notas.`;
    }
}

function exe3() {
    let numero1 = Number(document.getElementById('num1').value);
    let numero2 = Number(document.getElementById('num2').value);

    if(numero1 < numero2) {
        document.getElementById('menorNumero').textContent = `O menor número é: ${numero1}`;
    } else {
        document.getElementById('menorNumero').textContent = `O menor número é: ${numero2}`;
    }
}

function exe4() {
    let numero1 = Number(document.getElementById('num1').value);
    let numero2 = Number(document.getElementById('num2').value);
    let numero3 = Number(document.getElementById('num3').value);

    if((numero1 > numero2) && (numero1 > numero3)) {
        document.getElementById('maiorNumero').textContent = `O maior número é: ${numero1}`;
    } else if((numero2 > numero1) && (numero2 > numero3)) {
        document.getElementById('maiorNumero').textContent = `O maior número é: ${numero2}`;
    } else if((numero3 > numero1) && (numero3 > numero2)) {
        document.getElementById('maiorNumero').textContent = `O maior número é: ${numero3}`;
    }
}

function exe5() {
    let operacao = Number(document.getElementById('op').value);
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    switch(operacao) {
        case 1: 
            let media = (num1 + num2) / 2;
            document.getElementById('resultado').textContent = `Média entre os números é: ${media}`;
            break
        case 2: 
            if(num1 < num2) {
                let diferenca = num2 - num1;
                document.getElementById('resultado').textContent = `Diferença entre o maior e o menor é: ${diferenca}`
            } else {
                let diferenca = num1 - num2
                document.getElementById('resultado').textContent = `Diferença entre o maior e o menor é: ${diferenca}`;
            }
            break
        case 3:
            let multiplicacao = num1 * num2;
            document.getElementById('resultado').textContent = `Produto entre os números é: ${multiplicacao}`;
            break 
        case 4:
            let divisao = parseInt(num1 / num2);
            document.getElementById('resultado').textContent = `A divisão entre o primeiro e o segundo é: ${divisao}`;
    }

    // if(operacao == 1) {
    //     let media = (num1 + num2) / 2;
    //     document.getElementById('resultado').textContent = `Média entre os números é: ${media}`;
    // } else if(operacao == 2) {
    //     if(num1 < num2) {
    //         let diferenca = num2 - num1;
    //         document.getElementById('resultado').textContent = `Diferença entre o maior e o menor é: ${diferenca}`;
    //     } else {
    //         let diferenca = num1 - num2
    //         document.getElementById('resultado').textContent = `Diferença entre o maior e o menor é: ${diferenca}`;
    //     }
    // } else if(operacao == 3) {
    //     let multiplicacao = num1 * num2;
    //     document.getElementById('resultado').textContent = `Produto entre os números é: ${multiplicacao}`;
    // } else if(operacao == 4) {
    //     let divisao = parseInt(num1 / num2);
    //     document.getElementById('resultado').textContent = `A divisão entre o primeiro e o segundo é: ${divisao}`;
    // }
}