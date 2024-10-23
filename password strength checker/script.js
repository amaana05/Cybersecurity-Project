function checkPasswordStrength(password) {
    let strength = 0;


    if (/[A-Z]/.test(password)) strength++;   
    if (/[0-9]/.test(password)) strength++;   
    if (/[@#$%^&*()_+!~\-=[\]{}|;:',.<>?]/.test(password)) strength++; 

    return strength;
}


document.getElementById('checkStrengthBtn').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('strengthResult');

    const strength = checkPasswordStrength(password);


    resultDiv.className = 'strength-result';  
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
