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

function exe6() {
    let operacao = Number(document.getElementById('op').value);
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    switch(operacao) {
        case 1:
            // para elevar um número ao outro pode se usar tambem Math.pow(num1, num2);
            let numeroElevado = (num1 ** num2).toFixed(2);
            document.getElementById('resultado').textContent = `Resultado: ${numeroElevado}`;
            break
        case 2:
            // calculando raíz quadrada;
            let raizNum1 = Math.sqrt(num1).toFixed(2);
            let raizNum2 = Math.sqrt(num2).toFixed(2);
            document.getElementById('resultado').innerHTML = `Raíz quadrada num1 = ${raizNum1} <br/> Raíz quadrada num2 = ${raizNum2}`;
            // para usar <br/> --> (pular linha) precisa usar innerHTML ao invés de textContent ou innerText
            break
        case 3:
            // calculando raíz cúbica;
            let raizCubicaNum1 = Math.cbrt(num1).toFixed(2);
            let raizCubicaNum2 = Math.cbrt(num2).toFixed(2);
            document.getElementById('resultado').innerHTML = `Raíz cúbica num1 = ${raizCubicaNum1} <br/> Raíz cúbica num2 = ${raizCubicaNum2}`;
            break
    }
}

function exe7() {
    let salario = Number(document.getElementById('salario').value);
    let porcentagemAumento = 0.3;

    if(salario > 500) {
        alert('Somente pessoas que recebem menos que 30% receberam o aumento.');
        document.getElementById('salario').value = '';
        document.getElementById('resultado').textContent = 'Resultado: ';
    } else {
        // cálculo
        let aumento = salario + (salario * porcentagemAumento);
        document.getElementById('resultado').textContent = `Seu salário com aumento em 30%: ${aumento}`;
    }
}

function exe8() {
    let salario = Number(document.getElementById('salario').value);

    if(salario > 300) {
        let aumentoAcima300 = (salario + (salario * 0.15));
        document.getElementById('resultado').textContent = `Seu salário com 15% de aumento: ${aumentoAcima300}` //template string
    } else {
        let aumentoAte300 = (salario + (salario * 0.35)).toFixed(2);
        document.getElementById('resultado').textContent = `Seu salário com 15% de aumento: ${aumentoAte300}` //template string
    }
}

function exe9() {
    let saldoMedio = Number(document.getElementById('saldoMedio').value);
    let credito = 0;

    if(saldoMedio > 400) {
        credito = (saldoMedio * 0.3);
    } else if((saldoMedio > 300) && (saldoMedio <= 400)) {
        credito = (saldoMedio * 0.25);
    } else if((saldoMedio > 200) && (saldoMedio <= 300)) {
        credito = (saldoMedio * 0.2);
    } else if((saldoMedio >= 0) && (saldoMedio <= 200)) {
        credito = (saldoMedio * 0.1);
    } else {
        document.getElementById('resultado').textContent = `Saldo não pode ser negativo!`;
        document.getElementById('saldoMedio').value = '';
        return;
    }
    document.getElementById('resultado').textContent = `Saldo médio: ${saldoMedio} | Crédito disponível ${credito}`;
}

function exe10() {
    let custo = Number(document.getElementById('custoFabrica').value);
    let imposto = 0;
    let distribuidor = 0;

    if(custo <= 12000) {
        distribuidor = custo * 0.05;
    } else if((custo > 12000) && (custo <=25000)) {
        imposto = custo * 0.15;
        distribuidor = custo * 0.1;
    } else if(custo > 25000) {
        imposto = custo * 0.2;
        distribuidor = custo * 0.15;
    } else {
        document.getElementById('resultado').textContent = 'Custo não pode ser negativo!';
        document.getElementById('custoFabrica').value = '';
        return;
    }
    let valorConsumidor = custo + imposto + distribuidor;
    document.getElementById('resultado').innerHTML = `Custo de Fábrica: ${custo} <br/> Distribuidor: ${distribuidor} <br/> Imposto: ${imposto} <br/> Valor ao consumidor: ${valorConsumidor}`;
}