const button = document.querySelector('.btn')

const hide = document.querySelector('.hide')

const modal = document.querySelector('.modal-wrap')

const pic = document.querySelector('img')


function show() {
  console.log('show')
  modal.classList.add('show')
}

function remove() {
  console.log('show')
  modal.classList.remove('show')
}

button.addEventListener('click', show)

hide.addEventListener('click', remove)