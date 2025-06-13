function entrada(mat, vet) {
    for(let i=0;i<12;i++) {
        mat[i] = [];
        for(let j=0;j<4;j++) {
            mat[i][j] = Number(prompt(`Informe as vendas na semana ${j+1} do mês ${vet[i]}`));
        }
    }
}

function calculoTotalMes(mat, vet) {
    for(let i=0;i<12;i++) {
        let soma = 0
        for(let j=0;j<4;j++) {
            soma += mat[i][j];
        }
        alert(`Total vendido no mês de ${vet[i]}: ${soma}`);
    }
}

function calculoTotalSemana(mat) {
    for(let j=0;j<4;j++) { // para cada semana
        let soma = 0;
        for(let i=0;i<12;i++) { // para cada mês
            soma += mat[i][j];
        }
        alert(`Total vendido na semana ${j + 1}: ${soma}`);
    }
}

function calculoTotalAno(mat) {
    let soma = 0;
    for(let i=0;i<12;i++) {
        for(let j=0;j<4;j++) {
            soma += mat[i][j];
        }
    }
    return(soma);
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

function exe5() {
    let mat = [];
    const vet = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 
    'novembro', 'dezembro'];
    entrada(mat, vet);
    exibeMatriz(mat);
    calculoTotalMes(mat, vet);
    calculoTotalSemana(mat);
    alert(`Total vendido no ano: ${calculoTotalAno(mat)}`);
}

exe5();
//crie uma função que calcula e mostra a qtde de vendas maiores que 5000 em cada mês
//crie uma função que calcula e mostra os meses que tiveram vendas menores que 1000