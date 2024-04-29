function mudouTamanho() {
    if (window.innerWidth >= 1349) {
        pe.style.display = 'block'
    } else {
        pe.style.display = 'none'
    }
}
function clickMenu() {
    if (pe.style.display == 'block') {
        pe.style.display = 'none'
    } else {
        pe.style.display = 'block'
    }
}

window.addEventListener('scroll', function(){
    let cab = document.getElementById('header')
    
    cab.classList.toggle('rolagem', window.scrollY > 0) /* Toggle ex.: Se uma coisa existe, retira, senão, põe. */
});

window.onload = function() {
    var username = localStorage.getItem('usuario'); // Recupera o nome do usuário do armazenamento local
    if(username) {
      document.getElementById('usu').textContent = 'Olá, ' + username + "!";
      document.getElementById('logout-button').style.display = 'block';
    }
  };

  function logout() {
    localStorage.removeItem('username'); // Remove o nome do usuário do armazenamento local
    document.getElementById('usu').textContent = '' // Limpa o texto de informação do usuário
    document.getElementById('logout-button').style.display = 'none'; // Esconde o botão de logout
    alert('Você foi deslogado.'); // Opcional: Mostra um alerta informando que o logout foi bem-sucedido

    window.location = "./index.html"
  }