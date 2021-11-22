// const button = document.querySelector('.btn')

// const hide = document.querySelector('.hide')

// const modal = document.querySelector('.modal-wrap')


// function show() {
//   console.log('show')
//   modal.classList.add('show')
// }

// function remove() {
//   console.log('hide')
//   modal.classList.remove('show')
// }

// button.addEventListener('click', show)

// hide.addEventListener('click', remove)

//JS short
document.querySelector('.btn').addEventListener('click', function () {
  console.log('show')
  document.querySelector('.modal-wrap').classList.add('show')
})

document.querySelector('.hide').addEventListener('click', function () {
  console.log('hide')
  document.querySelector('.modal-wrap').classList.remove('show')
})

// jQ fast

// $('.btn, .hide').on('click', function () {
//   $('.modal-wrap').toggleClass('show');
//   $('.hide').toggleClass('show')
// })