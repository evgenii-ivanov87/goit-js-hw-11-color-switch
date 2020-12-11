const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodystyles: document.querySelector('body'),
  bottunStartRef: document.querySelector('[data-action="start"]'),
  bottunStopRef: document.querySelector('[data-action="start"]')
  
}

refs.bottunStartRef.addEventListener('click',buttonActiv)

console.dir(refs.bodystyles)
console.dir(refs.bottunStartRef)
console.dir(refs.bottunStopRef)

function buttonNewColor() {
  const index = randomIntegerFromInterval(0, colors.length-1)
  const newColor = colors[index]
  console.log(newColor)
  refs.bodystyles.style.backgroundColor = newColor
}
function buttonActiv() {
  setInterval(buttonNewColor, 2000)
  
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

