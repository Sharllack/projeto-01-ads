function logar(event) {
    event.preventDefault();
    let login = localStorage.getItem('login');
    let pass = localStorage.getItem('sen');

    let usuario = document.getElementById('idusu');
    let sen = document.getElementById('idsenha');

    if (login == usuario.value && pass == sen.value) {
        alert('Usuário logado com sucesso!');

        window.location = './index.html';


    } else if (usuario.value == '' && sen.value == '' ) {
        alert('Preencha todos os dados!');

    } else {
        alert('Usuário ou senha incorretos!');
        
    }
}