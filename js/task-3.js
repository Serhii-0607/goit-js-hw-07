const nameInput = document.getElementById('name-input');
const output = document.getElementById('name-output');

nameInput.addEventListener('input', e => {
  if (!e.target.value.trim() == '') {
    output.textContent = e.target.value.trim();
  } else {
    output.textContent = 'Anonymous';
  }
});
