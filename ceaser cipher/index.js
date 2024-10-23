function convertText() {
    const inputText = document.getElementById('inputText').value;  // Get the input text
    const shiftAmount = parseInt(document.getElementById('shiftAmount').value);  // Get the shift amount
    let result = '';   

    
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];   

        
        if (char >= 'A' && char <= 'Z') {
            let newCharCode = ((char.charCodeAt(0) - 65 + shiftAmount) % 26) + 65;
            result += String.fromCharCode(newCharCode);
        }
        
        else if (char >= 'a' && char <= 'z') {
            let newCharCode = ((char.charCodeAt(0) - 97 + shiftAmount) % 26) + 97;
            result += String.fromCharCode(newCharCode);
        }
       
        else {
            result += char;
        }
    }

    
    document.getElementById('resultText').textContent = result;
}
