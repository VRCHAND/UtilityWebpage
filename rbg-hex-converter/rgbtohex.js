const redVal = document.querySelector('#red');
const blueVal = document.querySelector('#blue');
const greenVal = document.querySelector('#green');
const generate = document.querySelector('#generate');
const hex = document.querySelector('#hex');
const hexColor = document.querySelector('#hex-color');
generate.addEventListener('click',(event) => {
    const hexValss = `#${hexConvert(redVal.value)}${hexConvert(greenVal.value)}${hexConvert(blueVal.value)}`;
    hex.value = hexValss;
    hexColor.style.backgroundColor = hex.value;
});
function hexConvert(val){
    const hexa = Number(val).toString(16);
    return hexa.length === 1 ? `0${hexa}` : hexa;
}

