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