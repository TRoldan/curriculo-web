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

