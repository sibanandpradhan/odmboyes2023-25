function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check if password matches
    if (username && password === 'odm@2325') {
        // Redirect to the next page
        window.location.href = 'dashboard.html';
    } else {
        alert("Fuck up! It is the reason you fail in JEE.");
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

// Add event listener for Enter key
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateForm(event);
    }
});
