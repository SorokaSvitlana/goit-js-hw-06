const list =  document.querySelector('#categories')
const listItemEl = document.querySelectorAll('.item')


console.log('Number of categories: ' +  listItemEl.length);

const categoryEls = listItemEl.forEach((el) => {
console.log('Category: ' + el.children[0].textContent)
console.log('Elements: ' + el.children[1].children.length)}
)


