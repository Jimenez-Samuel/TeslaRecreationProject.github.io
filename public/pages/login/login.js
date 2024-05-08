const inputform = document.querySelector('.form-input');
const nextButton = document.querySelector('.next-button');

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