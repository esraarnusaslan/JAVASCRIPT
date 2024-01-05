document.getElementById('btnAdd').addEventListener('click', () => {
    const txtName = document.getElementById('txtName');
    const ulList = document.querySelector('#list');
    const name = txtName.value;

    if (!name) return; //bossa

    const newLi = document.createElement('li');
    newLi.innerText = name;
    newLi.style.cursor = 'pointer';
    newLi.style.color = 'red';
    newLi.setAttribute('data-id', Math.floor(Math.random() * 1000));
    newLi.addEventListener('click', (e) => {
        e.target.remove(); //dom dan kaldirir
    });

    ulList.appendChild(newLi);
    txtName.value = '';
    txtName.focus();
});
