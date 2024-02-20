const message = document.querySelector('#message');

const messageDiv = () => {
    const nameSurname = document.querySelector('#name').value;
    const profession = document.querySelector('#profession').value;

    if (!nameSurname || !profession) {
        message.innerHTML = 'Please enter a name-surname or a profession';
        message.classList.remove('d-none');
        message.classList.add('d-block');
    } else {
        message.innerHTML = `Dear ${profession} ${nameSurname} welcome`;
        message.classList.remove('d-none');
        message.classList.add('d-block');
    }
};

const clearMessage = () => {
    message.remove();
};
