const urlEncode = document.querySelector('#url_encode');
const urlDecode = document.querySelector('#url_decode');
const url = document.querySelector('#url');
const urlEncodeDecodeResult = document.querySelector('#url_encode_decode_result');
urlEncode.addEventListener('click', () => {
    urlEncodeDecodeResult.value = encodeURIComponent(url.value);
});
urlDecode.addEventListener('click', () => {
    urlEncodeDecodeResult.value = decodeURIComponent(url.value);
});
