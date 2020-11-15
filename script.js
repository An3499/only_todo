let modalAdd = document.querySelector('.modal')
let fab = document.querySelector('.fab')
let closeBtn = document.querySelector('.button__close')

fab.onclick = function () {
  toggleModal(modalAdd)
}

closeBtn.onclick = function () {
   toggleModal(modalAdd)
}

function toggleModal(modal){
    modal.classList.toggle('modal__effect_hide')
    modal.classList.toggle('modal__effect_show')
}