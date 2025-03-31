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