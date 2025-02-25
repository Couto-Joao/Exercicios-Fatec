function seguir() {
    alert('Você agora está seguindo João Pedro');
}

function exe1() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    
    let sub = numero1 - numero2;
    
    document.getElementById('subtracao').textContent = `O resultado é: ${sub}`;
}

function exe2() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let numero3 = Number(document.getElementById('numero3').value);
    
    let multiplicacao = numero1 * numero2 * numero3;

    document.getElementById('multiplicacao').textContent = `O resultado é: ${multiplicacao}`;
}