const binary = document.querySelector('#binary');
const decimal = document.querySelector('#decimal');
const hex = document.querySelector('#hex');
const oct = document.querySelector('#oct');
binary.addEventListener('input', () => {
    decimal.value = parseInt(binary.value, 2).toString(10);
    hex.value = parseInt(binary.value, 2).toString(16);
    oct.value = parseInt(binary.value, 2).toString(8);
});
decimal.addEventListener('input', () => {
    binary.value = parseInt(decimal.value, 10).toString(2);
    hex.value = parseInt(decimal.value, 10).toString(16);
    oct.value = parseInt(decimal.value, 10).toString(8);
});
hex.addEventListener('input', () => {
    decimal.value = parseInt(hex.value, 16).toString(10);
    binary.value = parseInt(hex.value, 16).toString(2);
    oct.value = parseInt(hex.value, 16).toString(8);
});
oct.addEventListener('input', () => {
    decimal.value = parseInt(oct.value, 8).toString(10);
    hex.value = parseInt(oct.value, 8).toString(16);
    binary.value = parseInt(oct.value, 8).toString(2);
});