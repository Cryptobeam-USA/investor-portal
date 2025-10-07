// Main page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Cryptobeam Investor Portal initialized');

    // Handle login button
    const loginButton = document.getElementById('loginButton');
    const loginBtn = document.getElementById('loginBtn');
    const registerButton = document.getElementById('registerButton');

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            authService.login();
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            authService.login();
        });
    }

    if (registerButton) {
        registerButton.addEventListener('click', function() {
            // Registration flow - redirects to Auth0 signup
            authService.login();
        });
    }

    // Check if user is already authenticated
    if (authService.isAuthenticated()) {
        // User is logged in, could show different UI
        if (loginButton) {
            loginButton.textContent = 'Go to Dashboard';
            loginButton.addEventListener('click', function() {
                window.location.href = '/dashboard.html';
            });
        }
    }
});
