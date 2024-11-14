document.getElementById('toggleButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const keyText = document.getElementById('keyText').value.toUpperCase();

    if (!keyText) {
        alert("Please enter a key.");
        return;
    }

    const encryptedText = vigenereEncrypt(inputText, keyText);
    const decryptedText = vigenereDecrypt(encryptedText, keyText);

    document.getElementById('encryptResult').innerText = encryptedText || 'N/A';
    document.getElementById('decryptResult').innerText = decryptedText || 'N/A';
});

function vigenereEncrypt(text, key) {
    let result = '';
    for (let i = 0, j = 0; i < text.length; i++) {
        const char = text[i];
        if (char >= 'A' && char <= 'Z') {
            const textChar = text.charCodeAt(i) - 65;
            const keyChar = key.charCodeAt(j % key.length) - 65;
            const encryptedChar = String.fromCharCode((textChar + keyChar) % 26 + 65);
            result += encryptedChar;
            j++;
        } else {
            result += char;
        }
    }
    return result;
}

function vigenereDecrypt(text, key) {
    let result = '';
    for (let i = 0, j = 0; i < text.length; i++) {
        const char = text[i];
        if (char >= 'A' && char <= 'Z') {
            const textChar = text.charCodeAt(i) - 65;
            const keyChar = key.charCodeAt(j % key.length) - 65;
            const decryptedChar = String.fromCharCode((textChar - keyChar + 26) % 26 + 65);
            result += decryptedChar;
            j++;
        } else {
            result += char;
        }
    }
    return result;
}
