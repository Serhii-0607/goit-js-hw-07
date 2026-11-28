const categories = document.querySelectorAll('.item');

console.log('Numbers of categories: ' + categories.length);

categories.forEach(item => {
  console.log('Category: ' + item.children[0].textContent);
  console.log('Elements: ' + item.children[1].children.length);
});
