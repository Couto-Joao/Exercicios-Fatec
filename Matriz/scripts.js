function entrada(mat) {
    for(let i=0; i<3; i++) { // i = linha da matriz
        mat[i] = [];
        for(let j=0; j<3; j++) { //j = coluna da matriz
            mat[i][j] = Number(prompt(`Informe o elemento [${i}][${j}] da matriz:`));
        }
    }
}

function calculaSomaDiagonalPrincipal(mat) {
    let soma = 0;
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if(i == j) {
                soma += mat[i][j];
            }
        }
    }
    return soma;
}

function exemplo() {
    let mat = [];
    entrada(mat);
    alert(`A soma da diagonal principal é ${calculaSomaDiagonalPrincipal(mat)}`);
}

exemplo();