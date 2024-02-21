const notes = [
    'Read books',
    'Write code',
    'Practice coding',
    'Exercise',
    'Sleep 8 hours',
];

const list = document.querySelector('#list');

let line = '';

for (let note of notes) {
    line += `<li>${note}</li>`;
}
list.innerHTML = line;

let newInput = document.querySelector('#newInput');

document.querySelector('#add').addEventListener('click', () => {
    if (!newInput.value) {
        newInput.focus();
        return;
    }

    list.innerHTML += `<li>${newInput.value}</li>`;
    notes.push(newInput.value);
    result(notes);
    newInput.value = '';
    newInput.focus();
});

document.querySelector('#delete').addEventListener('click', () => {
    if (notes.length === 0) {
        list.innerHTML = `<b>List is empty </b>`;
    } else {
        newInput.value = '';
        notes.pop();
        result(notes);
        list.removeChild(list.lastElementChild);
    }
});

const result = (add) => {
    document.querySelector('#text').innerHTML = add.join(', ');
};
