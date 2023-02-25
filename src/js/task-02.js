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

const ingredient = ingredients.forEach((name) => {
  const liEl = document.createElement('li')
  liEl.classList.add('item')
  liEl.innerHTML = name
  listEl.appendChild(liEl)
return

})

console.log(listEl)