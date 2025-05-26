function entrada(vet) {
    vet[0] = 'a';
    vet[1] = 'b';
    vet[2] = 'c';
}

function processamento(vet) {
    vet[0] = vet[0] + 'a';
    vet[1] = vet[1] + 'b';
    vet[2] = vet[2] + 'c';
}

function saida(vet) {
    alert(`Saída de dados ${vet}`);
}

function main() {
    let vetor = [];
    entrada(vetor);
    processamento(vetor);
    saida(vetor);
}