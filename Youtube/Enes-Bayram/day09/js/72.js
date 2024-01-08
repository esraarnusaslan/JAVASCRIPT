function changeTitle(e) {
    const cardTitles = document.querySelectorAll('.card-title');
    cardTitles[1].textContent = 'change';
}

const clearButton = document.querySelector('#todoClearButton');
clearButton.addEventListener('click', changeTitle);
