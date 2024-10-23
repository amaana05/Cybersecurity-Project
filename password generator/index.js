function generatePassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

 
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = document.getElementById('length').value;

    if (length > 0 && length <= 20) {
        const password = generatePassword(length);
        document.getElementById('passwordResult').textContent = password;
    } else {
        document.getElementById('passwordResult').textContent = "Please enter a valid number between 1 and 20";
    }
});
