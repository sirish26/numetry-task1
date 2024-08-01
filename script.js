function Form(event, formType) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const error = document.getElementById('error');

  if (formType === 'login') {
    if (username === 'admin' && password === 'password') {
      error.innerText = '';
      alert('Login successful!');
    } else {
      error.innerText = 'Invalid username or password';
    }
  } else if (formType === 'signup') {
    if (password !== confirmPassword) {
      error.innerText = 'Passwords do not match';
      return;
    }
    alert('Sign up successful!');
  }
}
