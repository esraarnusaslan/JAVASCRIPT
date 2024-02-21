const titles = document.querySelector('.titles');
const productsImage = document.querySelectorAll('.image');

titles.addEventListener('click', (e) => {
    if (e.target.classList.contains('product')) {
        titles.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const wanted = e.target.getAttribute('data-sec');
        productsImage.forEach((item) => {
            if (item.classList.contains(wanted)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
