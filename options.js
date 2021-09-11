const optionsDisplay = document.querySelector('#show-display');
const clickButton = document.querySelector('#myFunction');
const span = document.getElementsByClassName('close')[0];
const ipValue = document.querySelector('#ip');
clickButton.addEventListener('click', () => {
    clickButton.style.display = 'none';
    optionsDisplay.style.display = 'block';
});
span.onclick = () => {
    optionsDisplay.style.display = 'none';
    clickButton.style.display = 'block';
}
fetch('https://api.ipify.org/?format=json')
    .then((response) => response.json())
    .then((data) => ipValue.innerHTML = data.ip);