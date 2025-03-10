function seguir() {
    alert('Você agora está seguindo João Pedro');
}

function exe1() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    
    let sub = numero1 - numero2;
    
    document.getElementById('subtracao').textContent = `O resultado é: ${sub}`;
}

function exe2() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);
    
    let multiplicacao = numero1 * numero2 * numero3;

    document.getElementById('multiplicacao').textContent = `O resultado é: ${multiplicacao}`;
}

function exe3() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    if(numero2 <= 0) {
        alert('Erro! O número do segundo espaço não pode ser menor ou igual a 0.');
        return;
    }

    let divisao = numero1 / numero2;

    document.getElementById('divisao').textContent = `O resultado é: ${divisao}`;
}

function exe4() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    let mediaPonderada = [(numero1 * 2) + (numero2 * 3)] / (2 + 3);

    document.getElementById('media').textContent = `O resultado é: ${mediaPonderada}`;
}

function exe5() {
    let valorProduto = Number(document.getElementById('produto').value);

    let valorComDesconto = valorProduto - (valorProduto * 0.1);

    document.getElementById('desconto').textContent = `O valor do produto com desconto é: ${valorComDesconto}`;
}

function exe6() {
    let salario = Number(document.getElementById('salario').value);
    let valorVendas= Number(document.getElementById('vendas').value);

    let comissao = valorVendas * 0.04;
    let salarioFinal = salario + comissao;

    document.getElementById('comissao').textContent = `O valor da comissão é: ${comissao}`;
    document.getElementById('salariofinal').textContent = `O salário final: ${salarioFinal}`;
}

function exe7() {
    let peso = Number(document.getElementById('peso').value);

    let pesoEngordar = peso + (peso * 0.15);
    let pesoEmagrecer = peso - (peso * 0.2);

    document.getElementById('pesoEngordar').textContent = `Novo peso se a pessoa engordar 15% sobre o peso normal: ${pesoEngordar}`;
    document.getElementById('pesoEmagrecer').textContent = `Novo peso se a pessoa emagrecer 20% sobre o peso normal: ${pesoEmagrecer}`;
}

function exe8() {
    let pesoKg = Number(document.getElementById('pesoKg').value);

    let pesoEmGramas = pesoKg * 1000;

    document.getElementById('pesoGramas').textContent = `Peso da pessoa em gramas:${pesoEmGramas}`;
}

function exe9() {
    let baseMaior = Number(document.getElementById('baseMaior').value);
    let baseMenor = Number(document.getElementById('baseMenor').value);
    let altura = Number(document.getElementById('altura').value);

    let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;

    document.getElementById('areaTrapezio').textContent = `A área do trapézio é: ${areaTrapezio}`;
}

function exe10() {
    let lado = Number(document.getElementById('lado').value);

    let areaQuadrado = lado * lado;

    document.getElementById('areaQuadrado').textContent = `A área do quadrado é: ${areaQuadrado}`;
}

function exe11() {
    let diagonalMaior = Number(document.getElementById('diagonalMaior').value);
    let diagonalMenor = Number(document.getElementById('diagonalMenor').value);

    let areaLosango = (diagonalMaior * diagonalMenor) / 2;

    document.getElementById('areaLosango').textContent = `A área do losango é: ${areaLosango}`;
}

function exe12() {
    let salarioMinimo = Number(document.getElementById('salarioMinimo').value);
    let salarioFuncionario = Number(document.getElementById('salarioFuncionario').value);

    let funcionarioRecebe = salarioFuncionario / salarioMinimo;

    document.getElementById('funcionarioRecebe').textContent = `O funcionário recebe: ${funcionarioRecebe.toFixed(2)} salários minimos.`;
}

function exe13() { 
    let numero = Number(document.getElementById('numero').value);
    let i = 0;

    while(i < 11) {
        let resultadoTabuada = numero * i;
        let textoTabuada = `${numero} x ${i} = ${resultadoTabuada}`;

        document.getElementById('tabuada').textContent = `Tabuada do número ${numero}: ${textoTabuada}`;//ESTÁ SOBESCREVENDO EM CIMA DOS RESULTADOS!!!
        i++
    }
}