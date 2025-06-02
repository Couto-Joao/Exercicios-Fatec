function entrada(mat) {
    for(let i=0; i<3; i++) {
        mat[i] = []
        for(let j=0; j<5; j++) {
            mat[i][j] = parseInt(Math.random() * 30) + 1;
        }
    }
}

function calculo(mat) {
    let soma = 0
    for(let i=0; i<3; i++) {
        for(let j=0; j<5; j++) {
            if((mat[i][j] >= 15) && (mat[i][j] <= 20)) {
                soma++;
            }
        }
    }
    return soma;
}

function exibeMatriz(mat) {
    let saida = '';
    for(let i=0; i<mat.length; i++) {
        saida = saida + '\n';
        for(let j=0; j<mat[i].length; j++) {
            saida = saida + ' ' + mat[i][j];
        }
    }
    alert(saida);
}

function saida() {
    let matriz = []
    entrada(matriz);
    exibeMatriz(matriz);
    alert(`Os intervalos de 15 à 20 da matriz são: ${calculo(matriz)}`);
}

saida();