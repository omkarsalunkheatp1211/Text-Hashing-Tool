// Import CryptoJS library from CDN
const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js";
document.head.appendChild(script);

script.onload = function () {
    const algorithmSelect = document.getElementById("algorithmSelect");
    const inputText = document.getElementById("inputText");
    const hashedText = document.getElementById("hashedText");

    document.getElementById("hashButton").addEventListener("click", function () {
        const selectedAlgorithm = algorithmSelect.value;
        const textToHash = inputText.value;
        const hash = hashText(selectedAlgorithm, textToHash);
        hashedText.innerHTML = `<p><strong>${selectedAlgorithm}:</strong> ${hash} <button class="copy-button" onclick="copyToClipboard('${hash}')">Copy</button></p>`;
    });
};

function hashText(algorithm, text) {
    switch (algorithm) {
        case "MD5":
            return CryptoJS.MD5(text).toString();
        case "SHA1":
            return CryptoJS.SHA1(text).toString();
        case "SHA224":
            return CryptoJS.SHA224(text).toString();
        case "SHA256":
            return CryptoJS.SHA256(text).toString();
        case "SHA384":
            return CryptoJS.SHA384(text).toString();
        case "SHA512":
            return CryptoJS.SHA512(text).toString();
        case "SHA3_224":
            return CryptoJS.SHA3(text, { outputLength: 224 }).toString();
        case "SHA3_256":
            return CryptoJS.SHA3(text, { outputLength: 256 }).toString();
        case "SHA3_384":
            return CryptoJS.SHA3(text, { outputLength: 384 }).toString();
        case "SHA3_512":
            return CryptoJS.SHA3(text, { outputLength: 512 }).toString();
        case "RIPEMD160":
            return CryptoJS.RIPEMD160(text).toString();
        default:
            return "Invalid algorithm";
    }
}

function copyToClipboard(text) {
    const tempElement = document.createElement("textarea");
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    alert("Copied hash: " + text);
}
