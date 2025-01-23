// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const nome = document.getElementById('amigo').value;

  // Valida se o campo está vazio
  if (nome.trim() === '') {
    alert('Por favor, insira um nome válido.');
  } else {
    // Adiciona o nome ao array e atualiza a lista na tela
    amigos.push(nome);
    atualizarLista();

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo para realizar o sorteio.');
  } else {
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado e exibe na tela
    const amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').textContent = `O amigo secreto é: ${amigoSorteado}`;
  }
}