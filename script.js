let logradouro = document.getElementById('logradouro');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('uf');
let campos = document.getElementsByTagName('input');

function buscarCep() {
    let cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            let {logradouro: rua, bairro: dist, localidade: loc, uf: est} = json;
            
            logradouro.value = rua;
            bairro.value = dist;
            cidade.value = loc;
            estado.value = est;

            for(let c in campos) {
                if(c != 0)
                    campos[c].setAttribute('disabled', 'disabled');
            }
        });

}