const encode = document.querySelector('#encode');
const decode = document.querySelector('#decode');
const inputString = document.querySelector('#inputString');
const encodeDecodeResult = document.querySelector('#encode_decode_result');
encode.addEventListener('click', (event) => {
    encodeDecodeResult.value = btoa(inputString.value);
});
decode.addEventListener('click', (event) => {
    encodeDecodeResult.value = atob(inputString.value);
});