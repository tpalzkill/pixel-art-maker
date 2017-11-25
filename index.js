const brown = document.getElementById('brown');
const purple = document.getElementById('purple');
const yellow = document.getElementById('yellow');
const orange = document.getElementById('orange');
const target = document.getElementById('wrapper');
const blue = document.getElementById('blue');
const red = document.getElementById('rojo');
const white = document.getElementById('white');
const green = document.getElementById('green');
const colorPicker = document.getElementById('colorPicker');
let pixel = document.getElementsByClassName('pixel')
let selector = document.getElementById('selector');
let clearButton = document.getElementById('clear');

let crayColor = 'white';
for (let i = 0; i < 4606; i++) {
  let divas = document.createElement('div');
  divas.className = 'pixel';
  target.appendChild(divas);
}

function changeCray(pen) {
  crayColor = pen;
}
let wrapper = document.getElementById('wrapper');
let paintbrush = false;

wrapper.addEventListener('mousedown', function(event) {
  paintbrush = true;
})

wrapper.addEventListener('mouseup', function(event) {
  paintbrush = false;
})


  wrapper.addEventListener('mouseover', function(event) {
    if (paintbrush) {
      event.target.style.backgroundColor = crayColor;
    }
  })

clearButton.addEventListener('click', function() {
  for (let i = 0; i < pixel.length; i++) {
    pixel[i].style.backgroundColor = 'white';
  }
});
red.addEventListener('click', function() {
  crayColor = 'red';
});

blue.addEventListener('click', function() {
  crayColor = 'blue';
});

orange.addEventListener('click', function() {
  crayColor = 'orange';
});

yellow.addEventListener('click', function() {
  crayColor = 'yellow';
});
purple.addEventListener('click', function() {
  crayColor = 'purple';
});

brown.addEventListener('click', function() {
  crayColor = 'brown';
});
white.addEventListener('click', function() {
  crayColor = 'white';
});
green.addEventListener('click', function() {
  crayColor = 'green';
});

colorPicker.addEventListener('input', function() {
  let colorChoice = colorPicker.value;
  crayColor = colorChoice;
})


// red.addEventListener('click', function(){
//   red.onclick.;
// })
