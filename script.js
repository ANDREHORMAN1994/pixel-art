// MY VARIABLES AND CONSTANTS
const pixelBoard = document.querySelector('#pixel-board');
const inputSizeBoard = document.querySelector('#board-size');
const buttonSizeBoard = document.querySelector('#generate-board');
let getColor = 'black';
let numberLines = 5;
let numberElements = 5;

buttonSizeBoard.addEventListener('click', function () {
  if (inputSizeBoard.value === '') {
    alert('Board inválido!');
  } else if (inputSizeBoard.value <= 5) {
    numberLines = 5;
    numberElements = 5;
    getColor = 'black';
  } else if (inputSizeBoard.value >= 50) {
    numberLines = 50;
    numberElements = 50;
    getColor = 'black';
  } else if (inputSizeBoard.value > 5 && inputSizeBoard.value < 50) {
    numberElements = inputSizeBoard.value;
    numberLines = inputSizeBoard.value;
    getColor = 'black';
    // console.log(numberElements);
    // console.log(numberLines);
  }
  executeAll();
});

function executeAll() {
  clearBoard();
  paletteRandom();
  createLine();
  createPixels();
  updateColors();
  changeColorPixel();
  clearColors();
}

function clearBoard() {
  pixelBoard.innerHTML = '';
}

// FUNCTION TO CREATE DIVS WITH CLASS 'LINE'
function createLine() {
  for (let i = 0; i < numberLines; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixelBoard.appendChild(line);
  }
}
createLine();

// LOOP TO EXECUTE IN ALL LINES THE FUNCTION FILL LINE
function createPixels() {
  for (let i = 0; i < numberLines; i += 1) {
    const line = document.querySelectorAll('.line');
    fillLine(line[i]);
  }
}
createPixels();

// FUNCTION TO CREATE MY PIXEL ELEMENTS AND THE CLASSES
function createElement(classList) {
  const elementPixel = document.createElement('div');
  elementPixel.classList = classList;
  return elementPixel;
}

// FUNCTION TO INPUT THE PIXEL ELEMENTS IN THE LINE
function fillLine(divLine) {
  for (let i = 0; i < numberElements; i += 1) {
    const elementPixel = createElement('pixel');
    divLine.appendChild(elementPixel);
  }
}

// LOOP TO UPDATE MY LET GET COLOR
function updateColors() {
  const colorSelected = document.querySelectorAll('.color');
  for (let i = 0; i < colorSelected.length; i += 1) {
    colorSelected[i].addEventListener('click', function (event) {
      let divs = event.target;
      getColor = divs.style.backgroundColor
      // getColor = divs.classList[1];
      console.log(getColor);
    });
  }
}
updateColors();

// LOOP TO SELECTED MY PIXEL ELEMENT AND CHANGE HIS BACKGROUND COLOR
function changeColorPixel() {
  const myPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < myPixels.length; i += 1) {
    myPixels[i].addEventListener('click', function (event) {
      let onePixel = event.target;
      onePixel.style.backgroundColor = getColor;
      // console.log(getColor);
    });
  }
}
changeColorPixel();

// LOOP TO ADD AND REMOVE NEW CLASS 'SELECTED'
const colorSelected = document.querySelectorAll('.color');
for (let i = 0; i < colorSelected.length; i += 1) {
  colorSelected[i].addEventListener('click', function (event) {
    let divs = event.target;
    let checkClassName = document.querySelector('.selected');
    // If the class selected existed, it will be removed
    if (checkClassName) {
      checkClassName.classList.remove('selected');
    }
    // When the div be clicked, the class selected will be created in the div;
    divs.classList.add('selected');
    // console.log(document.querySelectorAll('.selected'));
  });
}

// BUTTON CREATED TO CLEAR MY BACKGROUND
function clearColors () {
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', function () {
  const myPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < myPixels.length; i += 1) {
    myPixels[i].style.backgroundColor = 'white';
  }
  pixelBoard.style.backgroundColor = 'white';
});
}
clearColors();

function paletteRandom () {
  let randomNumber1 = Math.round(Math.random()*1000000);
  let randomNumber2 = Math.round(Math.random()*1000000);
  let randomNumber3 = Math.round(Math.random()*1000000);
  let palette = document.querySelectorAll('.color');
  palette[0].style.backgroundColor = 'black';
  palette[1].style.backgroundColor = '#' + randomNumber1;
  palette[2].style.backgroundColor = '#' + randomNumber2;
  palette[3].style.backgroundColor = '#' + randomNumber3;
}
paletteRandom();
// TESTE PARA getPropertyValue()
// let colorBlue = document.querySelector('.blue');
// console.log(colorBlue.style.getPropertyValue('background-color'));
