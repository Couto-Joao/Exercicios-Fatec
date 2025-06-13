function entrada(mat) {
    for(let i=0;i<6;i++) {
        mat[i] = [];
        for(let j=0;j<3;j++) {
            mat[i][j] = parseInt(Math.random() * (35 - 10) + 10);
        }
    }
}


function calculaMaiorMenor(mat) {
    let maior = mat[0][0], menor = mat[0][0];
    let iMaior = 0, jMaior = 0, iMenor = 0, jMenor = 0;

    for(let i=0;i<6;i++) {
        for(let j=0;j<3;j++) {
            if(mat[i][j] > maior) {
                maior = mat[i][j];
                iMaior = i;
                jMaior = j;
            }
            if(mat[i][j] < menor) {
                menor = mat[i][j];
                iMenor = i;
                jMenor = j;
            }
        }
    }
    alert(`O maior ${maior} está na posição [${iMaior}][${jMaior}] e o menor ${menor} na posição [${iMenor}][${jMenor}]`);
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

function exe3() {
    let mat = [];
    entrada(mat);
    exibeMatriz(mat);
    calculaMaiorMenor(mat);
}

exe3();