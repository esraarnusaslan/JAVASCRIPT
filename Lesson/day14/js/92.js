import showAlert, { showConfirm } from './message.js';

document.getElementById('btnAlert').addEventListener('click', () => {
    showAlert('Hello module');
});

document.getElementById('btnConfirm').addEventListener('click', () => {
    showConfirm('Hello');
});
