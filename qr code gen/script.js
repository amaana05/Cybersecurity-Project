function generateQRCode() {
    const qrInput = document.getElementById('qrInput').value;
    const qrCodeContainer = document.getElementById('qrCode');
    
    // Clear previous QR code by removing any existing canvas
    qrCodeContainer.innerHTML = '';

    // Check if input is empty
    if (!qrInput) {
        alert("Please enter text or a URL to generate the QR code.");
        return;
    }

    // Create a new canvas element
    const canvas = document.createElement('canvas');
    qrCodeContainer.appendChild(canvas);

    // Generate QR Code on the canvas
    QRCode.toCanvas(canvas, qrInput, { width: 200, margin: 2 }, function (error) {
        if (error) console.error(error);
    });
}
