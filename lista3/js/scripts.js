function seguir() {
    alert('Você agora está seguindo Bob.')
}

function exe1() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    let d = Number(document.getElementById('d').value);

    let i = 0;
    let aux

    while(i < 4) {
        if(a > b) {
            aux = a; a = b; b = aux;
        }
        if(b > c) {
            aux = b; b = c; c = aux;
        }
        if(c > d) {
            aux = c; c = d; d = aux;
        }
        i++;
    }
    document.getElementById('resultado').innerHTML = `Ordem crescente ${a} ${b} ${c} ${d} </br> Ordem decrescente ${d} ${c} ${b} ${a}`
}

function exe3() {
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0;
    let idade

    for(let i = 1; i <= 8; i++) {
        idade = Number(prompt(`Informe a idade ${i}`));
        if( idade >= 0 && idade <= 15) {
            faixa1++
        } else if(idade > 15 && idade <= 30) {
            faixa2++
        } else if(idade > 30 && idade <= 45) {
            faixa3++
        } else if(idade > 45 && idade <= 60) {
            faixa4++
        } else if(idade > 60) {
            faixa5++
        } else {
            alert('Idade Negativa!')
        }
    }
    document.getElementById('resultado').innerHTML = 
    `Faixa 1: ${faixa1} </br> Faixa 2: ${faixa2} </br> Faixa 1: ${faixa3} </br> Faixa 4: ${faixa4} </br> Faixa 5: ${faixa5} </br>
    Porcentagem Faixa 1: ${faixa1/8 * 100}% </br> Porcentagem Faixa 5: ${faixa5/8 * 100}%`
} 

function exe4() {
    let numero = Number(document.getElementById('numero').value);
    let resultado = '';

    for(let i = 0; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i} </br>`
    }
    document.getElementById('resultado').innerHTML = resultado;
}

function exe5() {
    let resultado = '';

    for(let numero = 1; numero <= 10; numero++) {
        resultado += `Tabuada do ${numero} </br>`;
        for(let i = 0; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i} </br>`;
        }
    }
    document.getElementById('resultado').innerHTML = resultado;
}

function exe6() {
    let codigo, valor, totalVista = 0, totalPrazo = 0
    for(let i=1; i <= 5; i++){
        do { // vai permanecer no do ... while enquanto o usuário não digitar V ou P
            codigo = prompt(`Digite V (à vista) ou P (à prazo)`).toUpperCase()
        }
        while (codigo != 'V' && codigo != 'P')
        valor = Number(prompt(`Digite o valor da transação`))
        if (codigo == 'V'){
            totalVista += valor
        }
        else {
            totalPrazo += valor
        }
    }
    document.getElementById("resultado").innerHTML = `Total à vista ${totalVista} Total à prazo ${totalPrazo},
    total geral ${totalPrazo + totalVista} e valor da primeira parcela ${totalPrazo/3}`;
}

function exe7() {
    let idade, altura, peso, idade50 = 0, idade10e20, somaAltura = 0, peso40 = 0;

    for(let i = 1; i <= 5; i++) {
        do {
            idade = Number(prompt('Informe a idade:'));
        }
        while(idade < 0) {
            altura = Number(prompt('Informe a altura:'));
            peso = Number(prompt('Informe a peso:'));
            if(idade > 50) { // item 1
                idade50++; 
            }
            if(idade >= 10 && idade >= 20) { // item 2
                idade10e20++;
                somaAltura += altura;
            }
            if(peso < 40) { // item 3
                peso40++;
            }
        }
    }
    document.getElementById('resultado').innerHTML = `Item 1: ${idade50} <br> Item 2: ${somaAltura / idade10e20} <br>
     Item 3: ${peso40}`;
}