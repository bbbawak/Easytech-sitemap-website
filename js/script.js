// Check if we're on the success page and update the message based on the previous page
document.addEventListener('DOMContentLoaded', function() {
    const successText = document.getElementById('success-text');
    if (successText) {
        const referrer = document.referrer;
        if (referrer.includes('login.html')) {
            successText.textContent = 'Login successful!';
        } else if (referrer.includes('register.html')) {
            successText.textContent = 'Thank you for registering!';
        }
    }

    // Password confirmation validation
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    
    if (password && confirmPassword) {
        function validatePassword() {
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords don't match");
            } else {
                confirmPassword.setCustomValidity('');
            }
        }

        password.addEventListener('change', validatePassword);
        confirmPassword.addEventListener('keyup', validatePassword);
    }
}); 