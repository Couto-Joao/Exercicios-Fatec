function entrada(mat) {
    for(let i=0; i<2; i++) {
        mat[i] = [];
        for(let j=0; j<4; j++) {
            mat[i][j] = parseInt(Math.random() * (35 - 10) + 10);
        }
    }
}

function soma(mat) {
    let soma = 0;
    for(let i=0; i<2; i++) {
        for(let j=0; j<4; j++) {
            if(mat[i][j] >= 12 && mat[i][j] <= 20) {
                 soma += mat[i][j];
            }
        }
    }

    return soma;
}

function media(mat) {
    let qtdPares = 0;
    let soma = 0;
    for(let i=0; i<mat.length; i++) {
        for(let j=0; j<mat[i].length; j++) {
            if(mat[i][j] % 2 == 0) {
                qtdPares++;
                soma += mat[i][j];
            }
        }
    }
    let media = 0
    media = soma / qtdPares;

    return media;
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
    let mat = [];
    entrada(mat);
    exibeMatriz(mat)
    alert(`Soma dos números de 12 a 20: ${soma(mat)}`);
    alert(`Média entre os números pares da matriz: ${media(mat)}`);
}

saida();