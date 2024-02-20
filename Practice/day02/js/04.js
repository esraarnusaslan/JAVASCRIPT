let man = document.querySelector('#man');
let woman = document.querySelector('#woman');
let message = document.querySelector('#message');

const handleSoldier = () => {
    let age = document.querySelector('#age').value;
    if (age) {
        if (age >= 18 && man.checked) {
            message.innerHTML = `<strong>Yo can join the military </strong>`;
        } else {
            message.innerHTML = `<strong>Yo can not join the military </strong>`;
        }
    } else {
        message.innerHTML = `<strong>Please enter in valid a age</strong>`;
    }
};

const clearButton = () => {
    message.remove();
    document.querySelector('#age').value = '';
};
