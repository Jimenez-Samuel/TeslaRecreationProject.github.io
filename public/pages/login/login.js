const inputform = document.querySelector('.form-input');
const nextButton = document.querySelector('.next-button');

const lenguageButton = document.querySelector('.lenguage-button')
const body = document.body
const closeButton = document.querySelector('.close-button')

const EnButton = document.querySelector('.En-button')

lenguageButton.addEventListener('click', () => {
  body.classList.add('active');
})

closeButton.addEventListener('click', () => {
  body.classList.remove('active');
})

EnButton.addEventListener('click', () => {
  window.location.href = 'loginEn.html';
})

function update () {
  requestAnimationFrame(update)
  ifFunction()
}
function ifFunction () {
  if (inputform.value !== "") {
    nextButton.disabled = false
  } else {
    nextButton.disabled = true
  }
}

update()