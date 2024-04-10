const listCategories = document.querySelector('#categories');
console.log('Number of categories: ' + listCategories.childElementCount);

const listItems = document.querySelectorAll('.item');

console.log('Category: ' + listItems[0].firstElementChild.textContent);
console.log('Elements: ' + listItems[0].lastElementChild.childElementCount);

console.log('Category: ' + listItems[1].firstElementChild.textContent);
console.log('Elements: ' + listItems[1].lastElementChild.childElementCount);

console.log('Category: ' + listItems[2].firstElementChild.textContent);
console.log('Elements: ' + listItems[2].lastElementChild.childElementCount);
