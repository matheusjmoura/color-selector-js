window.addEventListener('load', start);

var inputRangeRed = null;
var inputRangeGreen = null;
var inputRangeBlue = null;
var inputTextRed = null;
var inputTextGreen = null;
var inputTextBlue = null;

function start() {
  inputRangeRed = document.querySelector('#inputRangeRed');
  inputRangeGreen = document.querySelector('#inputRangeGreen');
  inputRangeBlue = document.querySelector('#inputRangeBlue');
  inputTextRed = document.querySelector('#inputTextRed');
  inputTextGreen = document.querySelector('#inputTextGreen');
  inputTextBlue = document.querySelector('#inputTextBlue');
  inputTextRed.disabled = true;
  inputTextGreen.disabled = true;
  inputTextBlue.disabled = true;
  setColor();
  onChange();
}

function onChange() {
  inputRangeRed.addEventListener('input', () => {
    setColor();
  });
  inputRangeGreen.addEventListener('input', () => {
    setColor();
  });
  inputRangeBlue.addEventListener('input', () => {
    setColor();
  });
}

function setColor() {
  inputTextRed.value = inputRangeRed.value;
  inputTextGreen.value = inputRangeGreen.value;
  inputTextBlue.value = inputRangeBlue.value;
  document.querySelector(
    '.colorSelected'
  ).style.backgroundColor = `rgb(${inputTextRed.value}, ${inputTextGreen.value}, ${inputTextBlue.value})`;
}
