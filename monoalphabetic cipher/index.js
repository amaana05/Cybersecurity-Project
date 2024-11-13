const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shuffledAlphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';

document.getElementById('toggleButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.toUpperCase();

    const encryptText = monoalphabeticEncrypt(inputText);
    const decryptText = monoalphabeticDecrypt(encryptText);

    document.getElementById('encryptResult').innerText = `Encrypted Text: ${encryptText}`;
    document.getElementById('decryptResult').innerText = `Decrypted Text: ${decryptText}`;
});

function monoalphabeticEncrypt(input) {
    let result = '';
    for (let char of input) {
        if (alphabet.includes(char)) {
            const index = alphabet.indexOf(char);
            result += shuffledAlphabet[index];
        } else {
            result += char; // Non-alphabet characters stay the same
        }
    }
    return result;
}

function monoalphabeticDecrypt(input) {
    let result = '';
    for (let char of input) {
        if (shuffledAlphabet.includes(char)) {
            const index = shuffledAlphabet.indexOf(char);
            result += alphabet[index];
        } else {
            result += char;
        }
    }
    return result;
}
