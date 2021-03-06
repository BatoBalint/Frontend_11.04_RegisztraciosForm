var nevDiv;
var nevDb;
var nevInput;
var jelszoDiv;
var jelszoDb;
var jelszoInput;
var jelszoMegintInput;
var jelszavakEgyeznekDiv;

var nevError = jelszoError = jelszoEgyezesError = true;

var regBtn;
var sikeresRegisztracioLabel;

function init() {
  nevDiv = document.getElementById('nameCharCountDiv');
  nevDb = document.getElementById('nameCharCount');
  jelszoDiv = document.getElementById('passCharCountDiv');
  jelszoDb = document.getElementById('passCharCount');
  jelszavakEgyeznekDiv = document.getElementById('passMatch');
  sikeresRegisztracioLabel = document.getElementById('sucRegLabel');

  nevInput = document.getElementById('nameInput');
  nevInput.addEventListener('input', nevInputChange);

  jelszoInput = document.getElementById('passInput');
  jelszoInput.addEventListener('input', passInputChange);

  jelszoMegintInput = document.getElementById('passAgainInput');
  jelszoMegintInput.addEventListener('change', passAgainChange);

  regBtn = document.getElementById('regBtn');
  regBtn.addEventListener('click', regButtonCLick);
}

document.addEventListener("DOMContentLoaded", init);

function nevInputChange() {
  let length = nevInput.value.length;
  nevDb.innerHTML = length;

  if (length > 20) {
    nevDiv.classList.add('text-danger');
    nevError = true;
  } else if (length <= 20) {
    nevDiv.classList.remove('text-danger');
    nevError = false;
  }

  if (length === 0) {
    nevError = true;
  }
}

function passInputChange() {
  let length = jelszoInput.value.length;
  jelszoDb.innerHTML = length;

  if (length < 8) {
    jelszoDiv.classList.add('text-danger');
    jelszoError = true;
  } else if (length >= 8) {
    jelszoDiv.classList.remove('text-danger');
    jelszoError = false;
  }
}

function passAgainChange() {
  if (jelszoInput.value !== jelszoMegintInput.value) {
    jelszavakEgyeznekDiv.classList.remove('hidden');
    jelszoEgyezesError = true;
  } else if (jelszoInput.value === jelszoMegintInput.value) {
    jelszavakEgyeznekDiv.classList.add('hidden');
    jelszoEgyezesError = false;
  }
}

function regButtonCLick() {
  if (!nevError && !jelszoError && !jelszoEgyezesError) {
    setTimeout(() => { sucRegLabel.classList.remove('hidden'); }, 2000);
  }
}
