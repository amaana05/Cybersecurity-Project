document.getElementById('toggleButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const keyText = document.getElementById('keyText').value;

    if (inputText.length !== keyText.length) {
        alert("Key length must be the same as the input text length.");
        return;
    }

    const encryptedText = vernamCipher(inputText, keyText);
    const decryptedText = vernamCipher(encryptedText, keyText); // Vernam Cipher is symmetric

    document.getElementById('encryptResult').innerText = encryptedText || 'N/A';
    document.getElementById('decryptResult').innerText = decryptedText || 'N/A';
});

function vernamCipher(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        // XOR between character codes of text and key, then convert back to character
        const cipherChar = String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i));
        result += cipherChar;
    }
    return result;
}
