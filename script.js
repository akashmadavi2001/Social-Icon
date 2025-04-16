let li = document.querySelectorAll('li ');

li.forEach(list => {
    list.addEventListener('click', () => {
        let active = document.querySelector('.active');
        active?.classList.remove('active');
        list.classList.add('active');
    });
});