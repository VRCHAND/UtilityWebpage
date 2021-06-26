const optionsDisplay = document.querySelector('#show-display');
const clickButton = document.querySelector('#myFunction');
const span = document.getElementsByClassName('close')[0];
clickButton.addEventListener('click', () => {
    clickButton.style.display = 'none';
    optionsDisplay.style.display = 'block';
});
span.onclick = () => {
    optionsDisplay.style.display = 'none';
    clickButton.style.display = 'block';
}
