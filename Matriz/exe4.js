function entrada(mat, vet) {
    for(let i=0;i<4;i++) {
        vet.push(prompt(`Informe o ${i+1}o nome.`))
        mat[i] = [];
        for(let j=0;j<5;j++) {
            mat[i][j] = Number(prompt(`Informe nota ${j+1} do aluno ${vet[i]}`));
        }
    }
}

function calculaMedias(mat, vet) {
    for(let i=0;i<4;i++) {
        let soma = 0; // aluno novo
        for(let j=0;j<5;j++) {
            soma += mat[i][j];
        }
        let media = soma / 5;
        let situacao

        if(media <3) {
            situacao = 'Reprovado';
        } else if(media >=3 && media < 6) {
            situacao = 'Exame';
        } else {
            situacao = 'Aprovado';
        }
        alert(`${vet[i]} teve média ${media} e está ${situacao}`);
    }
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

function calculaMediaClasse(mat) {
    let soma = 0;
    for(let i=0;i<4;i++) {
        for(let j=0;j<5;j++) {
            soma += mat[i][j];
        }
    }
    let mediaClasse = soma / 20;
    return(mediaClasse);
}

function exe4() {
    let vet = [];
    let mat = [];
    entrada(mat, vet);
    exibeMatriz(mat);
    calculaMedias(mat, vet);
    alert(`A média da classe é ${calculaMediaClasse(mat)}`);
}

exe4();