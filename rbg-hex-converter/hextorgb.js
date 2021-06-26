function hexToRgb(hex_val){
    const aRgbHex = hex_val.substring(1,).match(/.{1,2}/g);
    const aRgb = [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
    return aRgb;}
const rgb = document.querySelector('#rgb');
const generate = document.querySelector('#generate');
const hex = document.querySelector('#hex');
generate.addEventListener('click', () => {
    rgb.value = hexToRgb(hex.value);
});