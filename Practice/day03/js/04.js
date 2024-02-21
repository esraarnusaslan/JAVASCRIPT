const image = document.querySelector('.image');

document.querySelector('.on').addEventListener('click', () => {
    image.src = '../pexels-sonic-12102794.jpg';
});

document.querySelector('.off').addEventListener('click', () => {
    image.src = '../pexels-brett-sayles-3970096.jpg';
});
