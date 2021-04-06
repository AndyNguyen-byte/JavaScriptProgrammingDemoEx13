import { $ } from '/dom.js';
import { isValidNumeric } from '/validators.js';

//DOM elements for results
let abs = $('#abs');
let round = $('#round');
let ceiling = $('#ceiling');
let floor = $('#floor');
let square = $('#square');
let squareRoot = $('#squareRoot');
let power = $('#power');
let root = $('#root');
let sine = $('#sine');
let cos = $('#cos');
let tan = $('#tan');

let maxNumber = $('#maxNumber');
let minNumber = $('#minNumber');
let randomNumber = $('#randNumber');

//DOM Query for Form
const mathForm = $('#myMathForm');
mathForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let rand = Math.floor(Math.random() * 101);
  randomNumber.innerHTML = rand;

  //Calculate the absolute value

  let absInput = this.elements.txtAbs.value;
  if (isValidNumeric(absInput)){
      abs.textContent = Math.abs(absInput);
  }

  //Round

  let roundInput = this.elements.txtRound.value;
  if (isValidNumeric(roundInput)){
    round.textContent = Math.round(roundInput);
}



});