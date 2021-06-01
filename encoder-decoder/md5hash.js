const generate = document.querySelector('#generate');
const inputStrings = document.querySelector('#inputStrings');
const encodeResult = document.querySelector('#encodeResult');

generate.addEventListener('click', (event) => {
    encodeResult.value = CryptoJS.MD5(inputStrings.value);
});