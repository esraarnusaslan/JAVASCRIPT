const numberOfCharacters = () => {
    const counter = document.querySelector('.counter');
    const entrance = document.querySelector('#entrance');
    const resetButton = document.querySelector('#delete');
    const message = document.querySelector('.msg');

    setTimeout(() => {
        if (!entrance.value) message.innerHTML = `Please enter some text`;
    }, 3000);

    entrance.addEventListener('input', () => {
        message.innerHTML = '';
        counter.innerHTML = entrance.value.length;
    });

    resetButton.addEventListener('click', () => {
        entrance.value = '';
        counter.innerHTML = 0;
        numberOfCharacters();
    });
};

numberOfCharacters();
