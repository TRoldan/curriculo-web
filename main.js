/* portátil */

const MENU = document.querySelector('#menu-movel')
const ICONE_MENU = document.querySelector('.menu')
const EXIT = document.querySelector('#sair')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- interesses 
const LISTA_INTERESSES = document.querySelectorAll('.icone-habilidades')

for(let i = 0; i < LISTA_INTERESSES.length; i++) {
    const INTERESSE = LISTA_INTERESSES[i]
    let idInteresse = INTERESSE.id
    
    INTERESSE.onclick = function() {
        mostraTexto(idInteresse)
    }
}

const descricoesInteresses = {
    'interesse-powerbi': 'Conhecimento intermediário - amo as possibilidades de crianção e visualização dos dados <3',
    'interesse-office': 'Conhecimento intermediário/avançado - aquele clássico',
    'interesse-sql': 'Conhecimento básico/intermediário - dou meus pulos kkk',
    'interesse-python': 'Conhecimento básico - adoro fazer umas automações, mas estou focando no aprendizado',
}

function mostraTexto (idInteresse) {
    let texto = document.querySelector('#texto-interesse')
    let caixaDisplay = document.querySelector('#caixa-texto-interesses')

    caixaDisplay.classList.remove('display-informacoes-interesses')

    texto.innerHTML = descricoesInteresses[idInteresse] || ''
}
---*/