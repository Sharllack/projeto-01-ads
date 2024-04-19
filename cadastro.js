function cadastrarUsuario(event) {
    event.preventDefault();
    let nome = document.getElementById("idnome");
    let data = document.getElementById("idata");
    let sexo = document.getElementById("idsexo");
    let mae = document.getElementById("idmae");
    let cpf = document.getElementById("idcpf");
    let email = document.getElementById("idemail");
    let cell = document.getElementById("idtel");
    let tel = document.getElementById("idtelf");
    let ende = document.getElementById("idendereco");
    let log = document.getElementById("idlogin");
    let sen = document.getElementById("idsen");
    let csen = document.getElementById("idcsen");

    while (sen.value != csen.value) {
        alert('As senhas não correspondem!');
    }

    if (nome.value != ''
    && data.value != ''
    && sexo.value != ''
    && mae.value != ''
    && cpf.value != ''
    && email.value != ''
    && cell.value != ''
    && tel.value != ''
    && ende.value != ''
    && log.value != ''
    && sen.value != ''
    && csen.value != '') {

        localStorage.setItem('nome', nome.value);
         localStorage.setItem('data', data.value);
          localStorage.setItem('sexo', sexo.value);
           localStorage.setItem('mae', mae.value);
            localStorage.setItem('cpf', cpf.value);
             localStorage.setItem('email', email.value);
              localStorage.setItem('cell', cell.value);
               localStorage.setItem('tel', tel.value);
                localStorage.setItem('ende', ende.value);
                 localStorage.setItem('log', log.value);
                  localStorage.setItem('sen', sen.value);
                   localStorage.setItem('csen', csen.value);

    alert('Cadastro efetuado com sucesso!');

    window.location = "./login.html";

    } else {
        alert('Preencha os campos corretamente.');
    }
}