function seguir() {
    alert('Você foi abduzido para o além.')
}

function exe1() {
    let nota1 = Number(document.getElementById('nota1').value); 
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let nota4 = Number(document.getElementById('nota4').value);

    let mediaAritmetica = (nota1 + nota2 + nota3 + nota4) / 4;

    if(mediaAritmetica >= 7) {
        document.getElementById('mediaAritmetica').textContent = `Aprovado com média: ${mediaAritmetica}`;
    } else {
        document.getElementById('mediaAritmetica').textContent = `Reprovado com média: ${mediaAritmetica}`;
    }
}

function exe2() {
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);

    let media = (nota1 + nota2) / 2

    if((media >= 0) && (media < 3)) {
        document.getElementById('mediaAritmetica').textContent = `Reprovado com média: ${media}`;
    } else if((media >= 3) && (media < 7)) {
        document.getElementById('mediaAritmetica').textContent = `Aluno ficou de exame. Média: ${media}`;
    } else if((media >= 7) && (media <= 10)) {
        document.getElementById('mediaAritmetica').textContent = `Aprovado com média: ${media}`;
    } else {
        document.getElementById('mediaAritmetica').textContent = `Problema com as notas.`;
    }
}