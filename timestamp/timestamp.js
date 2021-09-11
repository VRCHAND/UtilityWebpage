const generate = document.querySelector('#generate');
const generate1 = document.querySelector('#generate1');
const clock = document.querySelector('#clock');
setInterval(() => {
    clock.value = Math.round(Date.now() / 1000);
}, 1000);
generate.addEventListener('click', () => {
    const epoch = document.querySelector('#epoch');
    const humandate = document.querySelector('#humandate');
    humandate.value = new Date(epoch.value * 1000);
});
generate1.addEventListener('click', () => {
    const epoch1 = document.querySelector('#epoch1');
    const year = document.querySelector('#year');
    const month = document.querySelector('#month');
    const date = document.querySelector('#date');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const dateNumberss = new Date(year.value, month.value, date.value, hours.value, minutes.value, seconds.value);
    epoch1.value = dateNumberss.getTime() / 1000;
})