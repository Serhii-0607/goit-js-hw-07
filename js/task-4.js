const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  let email = formData.get('email');
  let password = formData.get('password');

  if (email == '' || password == '') {
    alert('All form fields must be filled in');
  } else {
    const user = { email, password };
    console.log(user);

    loginForm.reset();
  }
});
