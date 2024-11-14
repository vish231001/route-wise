const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your actual authentication logic
    if (username === 'your_username' && password === 'your_password') {
        // Successful login, redirect or show success message
        window.location.href = 'dashboard.html'; // Replace with your desired URL
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});