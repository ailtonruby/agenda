const contatoForm = document.getElementById('contatoForm');
const tabelaContatos = document.querySelector('tbody');

contatoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    adicionarContato(nome, telefone);

    // Limpar campos do formulário
    contatoForm.reset();
});

function adicionarContato(nome, telefone) {
    const linha = tabelaContatos.insertRow();

    const celulaNome = linha.insertCell();
    const celulaTelefone = linha.insertCell();

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;
}
