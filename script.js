function showSignupForm() {
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');

    loginForm.style.opacity = 0;

    // Trigger the transition by changing opacity after a short delay
    setTimeout(function () {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupForm.style.opacity = 1;
    }, 500);
}

function showLoginForm() {
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');

    signupForm.style.opacity = 0;

    // Trigger the transition by changing opacity after a short delay
    setTimeout(function () {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        loginForm.style.opacity = 1;
    }, 500);
}

// Existing functions (login, signup, navigateToLogin) remain unchanged.
