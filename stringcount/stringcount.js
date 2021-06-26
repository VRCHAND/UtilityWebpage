const words = document.querySelector('#words');
const count = document.querySelector('#count');
words.addEventListener('input', () => {
    count.value = words.value.match(/(\w+)/g).length;
});
