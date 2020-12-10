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
  bottunRef: document.querySelector('.btn')
}

refs.bottunRef.addEventListener('click',buttonActiv)

console.log(refs.bodystyles)
console.dir(refs.bottunRef)

function buttonActiv() { refs.bodystyles.classList.add('active') }
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};