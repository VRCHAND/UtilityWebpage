const encode = document.querySelector('#encode');
const decode = document.querySelector('#decode');
const inputString = document.querySelector('#inputString');
const encodeDecodeResult = document.querySelector('#encode_decode_result');
encode.addEventListener('click', () => {
    encodeDecodeResult.value = btoa(inputString.value);
});
decode.addEventListener('click', () => {
    encodeDecodeResult.value = atob(inputString.value);
});