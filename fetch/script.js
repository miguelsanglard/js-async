// Utilizando a API https://viacep.com.br/ws/${CEP}/json/

// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar


const btn = document.getElementById('btn')
const resultado = document.getElementById('resultado')
btn.addEventListener('click', function (e) {

  e.preventDefault();

  const name = document.getElementById('name')
  const value = name.value
  console.log(value)

  fetch(`https://viacep.com.br/ws/${value}/json/`).then(response => response.text())
    .then(body => {
      console.log(body)
      resultado.innerText = body
    })
});


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valorBtc = document.querySelector('.bitc')
function loop(texto) {
  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(dados => {
      valorBtc.innerText = 'R$ ' + dados.BRL.buy
    })
}
setInterval(loop, 1000 * 2, 'Passou 1s');


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const btn2 = document.getElementById('botao')
const piada = document.getElementById('piada')
btn2.addEventListener('click', clickCallback)
function clickCallback() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(piadocas => {
      piada.innerText = piadocas.value
    })
}





