let nome = window.document.getElementById('link:')
let nomeok = false
let mapa = document.querySelector('#mapa')

link.style.width = '25%'


function validaLink() {

    let txt = document.querySelector('#validar')

if (link.value.length <= 10) {

   txt.innerHTML = 'Link do meme é inválido.'
   txt.style.color = 'red'

}

else {

txt.innerHTML = 'Link do meme é válido.'
txt.style.color = 'green'
nomeok = true

}


function enviar () {

if (nomeok == true ) {


alert ('Link do meme enviado com sucesso!')


}

else {

alert ('coloque um link para concluir o envio!')

}


}

function mapaZoom() {

mapa.style.width = '800px'
mapa.style.height = '600px'
    


}

function mapaNormal() {

    mapa.style.width = '400px'
    mapa.style.height = '250px'


}




}
