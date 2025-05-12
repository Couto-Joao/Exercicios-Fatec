function exe1() {
    let i = 1;
    let vetor = [];

    //entrada dde dados
    while(i <= 6) {
        vetor.push(Number(prompt('Entre com um número: ')));
        i++;
    }

    //calculando pares e ímpares
    let pares = [];
    let impares = [];
    for(i = 0;i < vetor.length;i++) {
        if(vetor[i] % 2 == 0) { //par
            pares.push(vetor[i]);
        } else { //ímpar
            impares.push(vetor[i]);
        }
    }
    document.getElementById('resultado').innerHTML = `Números pares = ${pares} <br> Números Ímpares = ${impares}`;
}

function exe2() {
    let vetor = [];
    let multiplos2 = [];
    let multiplos3 = [];
    let multiplos2e3 = [];
    
    for(let i = 1;i <= 7;i++) {
        vetor.push(Number(prompt('Entre com um número: ')));
    }

    for(i = 0;i < vetor.length;i++) {
        if((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            multiplos2e3.push(vetor[i]);
        } else if(vetor[i] % 3 == 0) {
            multiplos3.push(vetor[i]);
        } else if(vetor[i] % 2 == 0) {
            multiplos2.push(vetor[i]);
        }
    }
    document.getElementById('resultado').innerHTML = `Números múltiplos de 2 e 3 = ${multiplos2e3} <br> Números múltiplos de 2 = ${multiplos2} <br> 
    Números múltiplos de 3 = ${multiplos3}`;
}

function exe3() {
   let codigos = [], estoque = [];
   
   for(let i = 0;i < 3;i++) {
        codigos.push(prompt('Informe o código do produto:'));
        estoque.push(Number(prompt('Informe a quantidade em estoque: ')));
    }

   //comprando
   let cliente = Number(prompt('Informe código do cliente: '));
   do {
        let codigoProduto;
        codigoProduto = prompt('Informe código do produto para compra: ');
        let quantidade;
        quantidade = Number(prompt('Informe a quantidade do produto para compra: '));
    
        // procurar para ver se o produto existe;
        let posicao = codigos.indexOf(codigoProduto);
        if(posicao == -1) {
            alert('Código Inexistente');
        } else {
            if(estoque[posicao] >= quantidade) {
                estoque[posicao] = estoque[posicao] - quantidade;
                alert('Pedido atendido, obrigado e volte sempre.');
            } else {
                alert('Não temos estoque suficiente dessa mercadoria.');
            }
        }
        cliente = Number(prompt('Informe o código do novo cliente. Digite 0 para encerrar.'));
    }
   while(cliente != 0) {
        alert(`${codigos} ${estoque}`);
    }
}

function exe4() {
    var vetor = [];

    for(var i = 0;i < 15;i++) {
        vetor.push(Number(prompt(`Informe o ${i + 1}o número: `)));
    }

    var posicoes = [];
    for(i = 0;i < 15;i++) {
        if(vetor[i] == 30) {
            posicoes.push(i);
        }
    }
    alert(`Número 30 encontrado nas posições ${posicoes}`);
}

function exe5() {
    var logica = [], linguagem = [];

    for(var i = 0;i < 15;i++) {
        logica.push(Number(prompt(`Informe o ${i + 1}o. aluno que faz a disciplina Lógica`)));
    }
    for(var i = 0;i < 15;i++) {
        linguagem.push(Number(prompt(`Informe o ${i + 1}o. aluno que faz a disciplina Linguagem`)));
    }

    var interseccao = [];

    for(i = 0;i < 15;i++) {
        var posicao = linguagem.indexOf(logica[i]);
        if(posicao != -1) {
            interseccao.push(logica[i]);
        }
    }
    alert(`Alunos que fazem Lógica e Linguagem: ${interseccao}`);
}

function exe6() {
    var vendas = [], percentual = [], nome = [], comissao = [];
    for(var i = 0;i < 3;i++) {
        nome.push(prompt(`Informe o nome do ${i+1}o. vendedor.`));
        vendas.push(Number(prompt(`Informe o total vendido pelo ${i+1}o. vendedor.`)));
        percentual.push(Number(prompt(`Informe o percentual das vendas do ${i+1}o. vendedor.`)));
        //calcula a comissão
        comissao.push((vendas[i] * percentual[i]) / 100);
    }
    //relação dos vendedores e valores a receber
    var relatorio = '';
    for(i = 0;i < 3;i++) {
        relatorio += `Vendedor ${nome[i]} vai receber: ${comissao[i]} `;
    }
    alert(relatorio);

    var totalVendas = 0;
    for(i=0;i<3;i++) {
        totalVendas = totalVendas + vendas[i];
    }
    alert(`Total de vendas de todos os vendedores: ${totalVendas}`);

    var maiorValor = comissao[0];
    var menorValor = comissao[0];
    for(i=1;i<3;i++) {
        if(comissao[i] > maiorValor) {
            maiorValor = comissao[i];
        }
        if(comissao[i] < menorValor) {
            menorValor = comissao[i];
        }
    }
    var iMaior = comissao.indexOf(maiorValor); // recuperando a posição do maior valor
    alert(`${nome[iMaior]} vai receber maior comissão de ${maiorValor}`);
    alert(`${nome[comissao.indexOf(menorValor)]} vai receber menor comissão de ${menorValor}`);
}

function exe7() {
    var vetor = [], negativos = [], positivos = 0;

    for(var i = 0;i < 10;i++) {
        vetor.push(Number(prompt('Informe um número real: ')));
    }

    for(i = 0;i < 10;i++) {
        if(vetor[i] < 0) {
            negativos.push(vetor[i]);
        } else if(vetor[i] >= 0) {
            positivos += vetor[i];
        }
    }
    alert(`Quantidade de números negativos: ${negativos.length}`);
    alert(`Soma dos números positivos: ${positivos}`);
}

function exe8() {
    var nomes = [], media = [];

    for(var i = 0;i < 3;i++) {
        nomes.push(prompt('Informe o nome do aluno: '));
        media.push(prompt(`Informe a média de ${nomes[i]}`));
    }

    var maior = media[0];

    for(i = 0;i<3;i++) {
        if(media[i] > maior) {
            maior = media[i];
        }
    }

    var posicao = media.indexOf(maior);
    alert(`Nome do aluno com maior média ${nome[posicao]}`);

    for(i=0;i<3;i++) {
        if(medias[i] < 3) {
            alert(`${nome[i]} precisa tirar ${10 - media[i]}`);
        }
    }

}

function exe9() {
    var nomes = [], codigos = [], precos = [];

    for(var i=0;i<3;i++) {
        nomes.push(prompt(`Informe o nome do produto ${i + 1}`));
        codigos.push(Number(prompt(`Informe o código do produto ${i+1}`)));
        precos.push(Number(prompt(`Informe o preço do produto ${i+1}`)));
    }

    var novo
    for(var i=0;i<3;i++) {
        if((codigos[i] % 2 == 0) && (precos[i] > 1000)) {
            novo = precos[i] + precos[i] * 20/100;
        } else if (codigos[i] % 2 == 0) {
            novo = precos[i] + precos[i] * 15/100;
        } else if (precos[i] > 100) {
            novo = precos[i] + precos[i] * 10/100;
        } else {
            novo = precos[i];
        }
        alert(`${nomes[i]} - ${codigos[i]} ${precos[i]} - ${novo}`);
    }

}