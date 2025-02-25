function seguir() {
    alert('Você agora está seguindo João Pedro');
}

function exe1() {
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    
    let sub = numero1 - numero2;
    
    document.getElementById('subtracao').textContent = `O resultado é: ${sub}`;

}