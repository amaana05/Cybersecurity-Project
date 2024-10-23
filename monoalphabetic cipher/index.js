const cipherMap = {
    'A': 'Q', 'B': 'W', 'C': 'E', 'D': 'R', 'E': 'T',
    'F': 'Y', 'G': 'U', 'H': 'I', 'I': 'O', 'J': 'P',
    'K': 'A', 'L': 'S', 'M': 'D', 'N': 'F', 'O': 'G',
    'P': 'H', 'Q': 'J', 'R': 'K', 'S': 'L', 'T': 'Z',
    'U': 'X', 'V': 'C', 'W': 'V', 'X': 'B', 'Y': 'N',
    'Z': 'M', ' ': ' ', 
};

function convertToCipher() {
    const inputText = document.getElementById('inputText').value.toUpperCase();  
    let cipherText = '';  
 
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        cipherText += cipherMap[char] ? cipherMap[char] : char; 
    }

    document.getElementById('cipherResult').textContent = cipherText;
}
