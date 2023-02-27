const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')
const liEl = document.createElement('li')
liEl.classList.add('item')
const array = []

const ingredient = ingredients.forEach((name) => {
  const liEl = document.createElement('li')
  liEl.textContent = name;
  liEl.classList.add('item')
  return array.push(liEl)

})

listEl.append(...array)
console.log(listEl)