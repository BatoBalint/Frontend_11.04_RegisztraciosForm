var nevDiv;
var nevDb;
var nevInput;
var jelszoDiv;
var jelszoDb;
var jelszoInput;
var jelszoMegintInput;

var error = false;

var regBtn;

function init() {
  nevDiv = document.getElementById('nameCharCountDiv');
  nevDb = document.getElementById('nameCharCount');
  jelszoDiv = document.getElementById('passCharCountDiv');
  jelszoDb = document.getElementById('passCharCount');

  nevInput = document.getElementById('nameInput');
  nevInput.addEventListener('input', nevInputChange);

  jelszoInput = document.getElementById('passInput');
  jelszoMegintInput = document.getElementById('passAgainInput');

  regBtn = document.getElementById('regBtn');
  regBtn.addEventListener('click', regButtonCLick);
}

document.addEventListener("DOMContentLoaded", init);

function nevInputChange() {
  let length = nevInput.value.length;
  nevDb.innerHTML = length;
  if (length > 20) {
    nevDiv.classList.add('text-danger');
  } else if (length <= 20) {
    nevDiv.classList.remove('text-danger');
  }
}

function regButtonCLick() {

}
