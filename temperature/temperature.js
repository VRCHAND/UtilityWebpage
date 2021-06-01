const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');
celsius.addEventListener('input', () => {
    fahrenheit.value = celsius.value * (9 / 5) + 32;
    kelvin.value = celsius.value + 273.15;
});
fahrenheit.addEventListener('input', () => {
    celsius.value = (fahrenheit.value - 32) * (5 / 9);
    kelvin.value = (fahrenheit.value - 32) * (5 / 9) + 273.15;
});
kelvin.addEventListener('input', () => {
    fahrenheit.value = kelvin.value - 273.15;
    celsius.value = (kelvin.value - 273.15) * (9 / 5) + 32;
});
