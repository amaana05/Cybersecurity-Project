const morseCodeMap = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
    'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': ' ',     '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--'
};

function convertToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase(); 
    let morseCode = '';  

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        morseCode += morseCodeMap[char] ? morseCodeMap[char] + ' ' : ''; 
    }


    document.getElementById('morseResult').textContent = morseCode.trim();
}
