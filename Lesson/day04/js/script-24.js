function setMode() {
    const elBody = document.querySelector('body');
    const btnMode = document.querySelector('#btnMode');

    if (elBody.classList.contains('light')) {
        elBody.classList.remove('light');
        elBody.classList.add('dark');

        btnMode.textContent = 'Light';
    } else {
        elBody.classList.remove('dark');
        elBody.classList.add('light');

        btnMode.textContent = 'Dark';
    }
}
