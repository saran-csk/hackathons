document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define your username and password here
    const predefinedUsername = 'saran';
    const predefinedPassword = '123';

    if (username === predefinedUsername && password === predefinedPassword) {
        // Redirect to homepage if login is successful
        window.location.href = 'home.html';
    } else {
        // Show error message
        document.getElementById('error').innerText = 'Invalid username or password';
    }
});