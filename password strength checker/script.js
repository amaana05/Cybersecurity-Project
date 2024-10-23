// Simplified function to check password strength
function checkPasswordStrength(password) {
    let strength = 0;

    // Increment strength based on conditions
    if (/[A-Z]/.test(password)) strength++;   // Uppercase letters
    if (/[0-9]/.test(password)) strength++;   // Numbers
    if (/[@#$%^&*()_+!~\-=[\]{}|;:',.<>?]/.test(password)) strength++;   // Symbols

    return strength;
}

// Event listener for checking password strength
document.getElementById('checkStrengthBtn').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('strengthResult');

    const strength = checkPasswordStrength(password);

    // Determine password strength with minimal code
    resultDiv.className = 'strength-result';  // Reset class
    if (password.length < 6) {
        resultDiv.textContent = "Password is too short!";
        resultDiv.classList.add('weak');
    } else {
        resultDiv.textContent = strength === 1 ? "Weak Password" :
                                strength === 2 ? "Medium Strength Password" :
                                "Strong Password";
        resultDiv.classList.add(strength === 1 ? 'weak' :
                                strength === 2 ? 'medium' : 'strong');
    }
});
