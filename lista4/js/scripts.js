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
        let posicao = codigos.indexOf(codigo);
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